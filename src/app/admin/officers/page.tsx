"use client";

import { useEffect, useState } from "react";
import { fetchOfficers, Officer, auth, addOfficer, removeOfficer, updateOfficer } from "../../firebase";
import { deleteBlob } from "../../server";
import Image from "next/image";
import { onAuthStateChanged } from "firebase/auth";
import { upload } from "@vercel/blob/client";

export default function EditOfficersPage() {
    // The list of officers to be displayed and edited.
    const [officers, setOfficers] = useState<Officer[]>([]);
    // A copy of the original officers list to check for changes.
    const [original, setOriginal] = useState<Officer[]>([]);
    // Indicates whether the user is signed in or not.
    const [signedIn, setSignedIn] = useState<boolean>(false);

    // Runs on page start, fetches officers from Firebase and checks auth state.
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setSignedIn(user !== null);
            if (user !== null) {
                try {
                    fetchOfficers().then((offs) => {
                        if (offs) {
                            // deep copy officers to officers array and original array to avoid reference issues
                            setOfficers(JSON.parse(JSON.stringify(offs)));
                            setOriginal(JSON.parse(JSON.stringify(offs)));
                        }
                    });
                } catch (error) {
                    alert(error);
                }
            }
        });
    }, []);

    // Moves an officer up or down in the officers array. The index parameter is the current index of the officer,
    // and the up parameter indicates whether to move the officer up (true) or down (false) in the list.
    const handleMove = (index: number, up: boolean) => {
        const newOfficers = [...officers];
        const [movedOfficer] = newOfficers.splice(index, 1);
        newOfficers.splice(index + (up ? (index > 0 ? -1 : 0) : (index < officers.length - 1 ? 1 : 0)), 0, movedOfficer);
        setOfficers(newOfficers);
    };

    // Deletes an officer from the officers array. The index parameter is the index of the officer to be deleted.
    const handleDelete = (index: number) => {
        // confirm deletion through a popup before proceeding
        if (confirm("Are you sure you want to delete this officer?")) {
            const newOfficers = [...officers];
            newOfficers.splice(index, 1);
            setOfficers(newOfficers);
        }
    }

    // Adds a new officer to the officers array with empty values. The officer's ID is set to "add" to indicate that it needs to be added when saving.
    const handleAdd = () => {
        setOfficers((prevOfficers) => [...prevOfficers, { id: "add", name: "", role: "", picture: "", bio: "", rank: prevOfficers.length + 1 }]);
    };

    // Saves the current officers list to Firebase and Vercel blob, checking for changes and errors.
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
                
                // loop through original officers and check for modifications or deletions in new officers
                for (let i = 0; i < original.length; i++) {
                    // current original officer
                    const oldOfficer = original[i];

                    // find the corresponding new officer in the officers array if it exists
                    const newOfficer: Officer | undefined = officers.find(o => o.id === oldOfficer.id);

                    // check if the corresponding new officer exists
                    if (newOfficer === undefined) {
                        // officer has been removed, so delete it from Firebase and Vercel blob
                        await deleteBlob([oldOfficer.picture])
                        await removeOfficer(oldOfficer.id);
                    } else {
                        // corresponding new officer exists, check for modifications
                        if (JSON.stringify(newOfficer) !== JSON.stringify(oldOfficer) || officers.indexOf(newOfficer) !== i) {
                            // modifications have been made

                            // check if the picture has been changed
                            let url: string = newOfficer.picture;
                            if (url !== oldOfficer.picture) {
                                // image has been changed, remove old image from vercel blob
                                await deleteBlob([oldOfficer.picture]);

                                // extract file type and URL from the new officer's picture 
                                // the new picture is stored in the format "image/type  URL"
                                const [fileType, realUrl] = newOfficer.picture.split("  ");
                                // change file type format from "image/type" to ".type"
                                const fileExtension = fileType.replace("image/", ".");
                                // fetch the image stream from the URL
                                const imageStream = (await fetch(realUrl)).body;
                                // upload the image stream to Vercel blob storage if it exists
                                if (imageStream) {
                                    // upload in format "/officers/firstname.type"
                                    const blob = await upload("/officers/" + newOfficer.name.split(" ")[0] + fileExtension, imageStream, { access: "public", handleUploadUrl: "/admin/upload" });
                                    url = blob.url;
                                }
                            }
                            // update the officer in Firebase with the new details
                            await updateOfficer(oldOfficer.id, newOfficer.name, newOfficer.role, url, newOfficer.bio, officers.indexOf(newOfficer) + 1);
                        }
                    }
                }

                // find new list items, identified through the "add" id
                const newOfficers = officers.filter(o => o.id === "add");
                // loop through new officers and add them to Firebase and Vercel blob
                for (let i = 0; i < newOfficers.length; i++) {
                    const officer = newOfficers[i];
                    
                    // extract file type and URL from the new officer's picture 
                    // the new picture is stored in the format "image/type  URL"
                    const [fileType, realUrl] = officer.picture.split("  ");
                    // change file type format from "image/type" to ".type"
                    const fileExtension = fileType.replace("image/", ".");
                    // fetch the image stream from the URL
                    const imageStream = (await fetch(realUrl)).body;
                    // upload the image stream to Vercel blob storage if it exists
                    if (imageStream) {
                        // upload in format "/officers/firstname.type"
                        const blob = await upload("/officers/" + officer.name.split(" ")[0] + fileExtension, imageStream, { access: "public", handleUploadUrl: "/admin/upload" });
                        // add new officer to Firebase
                        await addOfficer(officer.name, officer.role, blob.url, officer.bio, officers.indexOf(officer) + 1);
                    }
                }

                // update original officers list for further changes (deep copy to avoid reference issues)
                setOriginal(JSON.parse(JSON.stringify(officers)));
            } catch (error) {
                alert(error);
            }
        }
    };

    // Handles the image change event when a user selects a new image for an officer.
    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        // make sure image exists
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            // save the file type in the URL in the format "image/type  URL"
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
                        <div className="flex flex-col gap-8">
                            {officers.map((officer, index) => (
                                <div className="EditCard w-1/2 flex flex-col gap-2" key={index}>
                                    <button className="EditButton DeleteButton" onClick={() => handleDelete(index)}>
                                        <Image src="/admin/x-button.svg" alt="Delete Button" width={20} height={20} />
                                    </button>
                                    <button className="EditButton UpButton" onClick={() => handleMove(index, true)}>
                                        <Image src="/admin/chevron-up.svg" alt="Edit Button" width={20} height={20} />
                                    </button>
                                    <button className="EditButton DownButton" onClick={() => handleMove(index, false)}>
                                        <Image src="/admin/chevron-up.svg" alt="Edit Button" width={20} height={20} />
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