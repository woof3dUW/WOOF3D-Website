"use client";

import { useEffect, useState } from "react";
import { fetchOfficers, Officer, auth, addOfficer, removeOfficer, updateOfficer } from "../../firebase";
import { deleteBlob } from "../../server";
import Image from "next/image";
import { onAuthStateChanged } from "firebase/auth";
import { upload } from "@vercel/blob/client";

export default function EditOfficersPage() {
    const [officers, setOfficers] = useState<Officer[]>([]);
    const [original, setOriginal] = useState<Officer[]>([]);
    const [signedIn, setSignedIn] = useState<boolean>(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setSignedIn(user !== null);
            if (user !== null) {
                try {
                    fetchOfficers().then((offs) => {
                        if (offs) {
                            setOfficers(offs);
                            setOriginal(offs);
                        }
                    });
                } catch (error) {
                    alert(error);
                }
            }
        });
    }, []);

    const handleMove = (index: number, up: boolean) => {
        setOfficers((prevOfficers) => {
            const newOfficers = [...prevOfficers];
            const [movedOfficer] = newOfficers.splice(index, 1);
            newOfficers.splice(index + (up ? (index > 0 ? -1 : 0) : (index < prevOfficers.length - 1 ? 1 : 0)), 0, movedOfficer);
            return newOfficers; 
        });
    };

    const handleDelete = (index: number) => {
        if (confirm("Are you sure you want to delete this officer?")) {
            setOfficers((prevOfficers) => {
                const newOfficers = [...prevOfficers];
                newOfficers.splice(index, 1);
                return newOfficers;
            });
        }
    }

    const handleAdd = () => {
        setOfficers((prevOfficers) => [...prevOfficers, { id: "add", name: "", role: "", picture: "", bio: "", rank: prevOfficers.length + 1 }]);
    };

    const handleDiscard = () => {
        setOfficers(original);
    };

    const handleSave = async () => {
        // do nothing if nothing has been changed
        if (JSON.stringify(officers) !== JSON.stringify(original) && signedIn) {
            try {
                // used to check for duplicate names
                const uniqueNames = new Set();
                
                // loop through officers and check for errors
                for (let i = 0; i < officers.length; i++) {
                    const officer = officers[i];

                    // check for missing fields
                    if (officer.name === "") throw new Error("Missing name field");
                    if (officer.role === "") throw new Error("Missing role field");
                    if (officer.bio === "") throw new Error("Missing bio field");
                    if (officer.picture === "") throw new Error("Missing picture field");

                    // check for duplicate names
                    if (uniqueNames.has(officer.name)) {
                        throw new Error("No duplicate names allowed");
                    }
                    uniqueNames.add(officer.name);
                }
                
                for (let i = 0; i < original.length; i++) {
                    const oldOfficer = original[i];

                    const newOfficer: Officer | undefined = officers.find(o => o.id === oldOfficer.id);

                    if (newOfficer === undefined) {
                        // officer has been removed, so delete it from firebase and vercel blob
                        console.log("removing officer", oldOfficer.name);
                        await deleteBlob(oldOfficer.picture)
                        await removeOfficer(oldOfficer.id);
                        console.log("removed officer");
                    } else {
                        if (newOfficer !== oldOfficer || officers.indexOf(newOfficer) !== i) {
                            // modifications have been made
                            
                            let url: string = newOfficer.picture;
                            if (url !== oldOfficer.picture) {
                                // remove image from vercel blob
                                await deleteBlob(oldOfficer.picture);

                                const [fileType, realUrl] = newOfficer.picture.split("  ");
                                const fileExtension = fileType.replace("image/", ".");
                                const imageStream = (await fetch(realUrl)).body;
                                if (imageStream) {
                                    const blob = await upload("/officers/" + newOfficer.name.split(" ")[0] + fileExtension, imageStream, { access: "public", handleUploadUrl: "/admin/upload" });
                                    url = blob.url;
                                }
                            }
                            await updateOfficer(oldOfficer.id, newOfficer.name, newOfficer.role, url, newOfficer.bio, officers.indexOf(newOfficer) + 1);
                        }
                    }
                }

                // add new list items to Vercel blob and Firebase
                const newOfficers = officers.filter(o => o.id === "add");
                for (let i = 0; i < newOfficers.length; i++) {
                    const officer = newOfficers[i];
                    
                    const [fileType, realUrl] = officer.picture.split("  ");
                    const fileExtension = fileType.replace("image/", ".");
                    const imageStream = (await fetch(realUrl)).body;
                    if (imageStream) {
                        const blob = await upload("/officers/" + officer.name.split(" ")[0] + fileExtension, imageStream, { access: "public", handleUploadUrl: "/admin/upload" });
                        await addOfficer(officer.name, officer.role, blob.url, officer.bio, officers.indexOf(officer) + 1);
                    }
                }

                // update original officers list for further changes
                setOriginal(officers);
            } catch (error) {
                alert(error);
            }
        }
    };

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const url = file.type + "  " + URL.createObjectURL(file);
            setOfficers((prevOfficers) => {
                const newOfficers = [...prevOfficers];
                newOfficers[index] = { ...newOfficers[index], picture: url };
                return newOfficers;
            });
        }
    };

    return (
        <div className="Container">
            <main className="MainContent">
                {signedIn 
                    ?
                    <div className="Section">
                        <h1 className="Head">Edit Officers</h1>
                        <button className="CornerButton" onClick={() => handleSave()}>Save</button>
                        <button className="CornerButton BackButton" onClick={handleDiscard}>Discard</button>
                        <div className="flex flex-col gap-8">
                            {officers.map((officer, index) => (
                                <div className="EditCard flex flex-col gap-2" key={index}>
                                    <button className="EditButton DeleteButton" onClick={() => handleDelete(index)}>
                                        <Image src="/admin/x-button.svg" alt="Delete Button" width={20} height={20} />
                                    </button>
                                    <button className="EditButton UpButton" onClick={() => handleMove(index, true)}>
                                        <Image src="/admin/chevron-up.svg" alt="Edit Button" width={20} height={20} />
                                    </button>
                                    <button className="EditButton DownButton" onClick={() => handleMove(index, false)}>
                                        <Image src="/admin/chevron-down.svg" alt="Edit Button" width={20} height={20} />
                                    </button>
                                    { officer.picture === ""
                                        ? 
                                        <></>
                                        :
                                        <Image className="aspect-square object-cover" src={officer.picture.includes("  ") ? officer.picture.split("  ")[1] : officer.picture} alt={officer.name} width={200} height={200} />
                                    }
                                    <label>Change image
                                        <input className="Input w-full" type="file" onChange={e => handleImageChange(e, index)} accept="image/*"></input>
                                    </label>
                                    <label>Name
                                        <input className="Input w-full" value={officer.name} onChange={e => setOfficers(officers.map((o, i) => i === index ? { ...o, name: e.target.value } : o))}></input>
                                    </label>
                                    <label>Role
                                        <input className="Input w-full" value={officer.role} onChange={e => setOfficers(officers.map((o, i) => i === index ? { ...o, role: e.target.value } : o))}></input>
                                    </label>
                                    <label>Bio
                                        <textarea className="Input w-full" value={officer.bio} onChange={e => setOfficers(officers.map((o, i) => i === index ? { ...o, bio: e.target.value } : o))}></textarea>
                                    </label>
                                </div>
                            ))}
                            <button className="EditButton AddButton" onClick={handleAdd}>
                                <Image src="/admin/add-button.svg" alt="Add Button" width={20} height={20} />
                            </button>
                        </div>
                    </div>
                    :
                    <></>
                }
            </main>
        </div>
    );
}