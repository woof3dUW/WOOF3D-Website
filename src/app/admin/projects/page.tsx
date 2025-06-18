"use client";

import { useEffect, useState } from "react";
import { fetchProjects, Project, auth, addProject, removeProject, updateProject } from "../../firebase";
import { deleteBlob } from "../../server";
import Image from "next/image";
import { onAuthStateChanged } from "firebase/auth";
import { upload } from "@vercel/blob/client";

export default function EditProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [original, setOriginal] = useState<Project[]>([]);
    const [signedIn, setSignedIn] = useState<boolean>(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setSignedIn(user !== null);
            if (user !== null) {
                try {
                    fetchProjects(null).then((projs) => {
                        if (projs) {
                            setProjects(JSON.parse(JSON.stringify(projs)));
                            setOriginal(JSON.parse(JSON.stringify(projs)));
                        }
                    });
                } catch (error) {
                    alert(error);
                }
            }
        });
    }, []);

    const handleSlideMove = (index: number, sIndex: number, up: boolean) => {
        const newProjects = [...projects];
        const [movedSlide] = newProjects[index].slides.splice(sIndex, 1);
        newProjects[index].slides.splice(sIndex + (up ? (sIndex > 0 ? -1 : 0) : (sIndex < projects[index].slides.length ? 1 : 0)), 0, movedSlide);
        setProjects(newProjects);
    };

    const handleDelete = (index: number) => {
        if (confirm("Are you sure you want to delete this project?")) {
            const newProjects = [...projects];
            newProjects.splice(index, 1);
            setProjects(newProjects);
        }
    }

    const handleSlideDelete = (index: number, sIndex: number) => {
        if (confirm("Are you sure you want to delete this slide?")) {
            const newProjects = [...projects];
            newProjects[index].slides.splice(sIndex, 1);
            setProjects(newProjects);
        }
    }

    const handleTextDelete = (index: number, tIndex: number) => {
        if (confirm("Are you sure you want to delete this text box?")) {
            setProjects(projects.map((p, i) => i === index ? { 
                ...p, 
                text: p.text.filter((t, j) => j !== tIndex)
                } : p))
        }
    }

    const handleAdd = () => {
        setProjects((prevProjects) => [...prevProjects, { id: "add", title: "", slides: [], text: [], current: true}]);
    };

    const handleSlideAdd = (index: number) => {
        const newProjects = [...projects];
        newProjects[index].slides.push("");
        setProjects(newProjects);
    };

    const handleTextAdd = (index: number) => {
        const newProjects = [...projects];
        newProjects[index].text.push("");
        setProjects(newProjects);
    };

    const handleSave = async () => {
        // do nothing if nothing has been changed
        if (JSON.stringify(projects) !== JSON.stringify(original) && signedIn) {
            try {
                // used to check for duplicate names
                const uniqueNames = new Set();
                
                // loop through projects and check for errors
                for (let i = 0; i < projects.length; i++) {
                    const project = projects[i];

                    // check for missing fields
                    if (project.title === "") throw new Error("Missing name field");
                    if (project.text.length === 0 || project.text[0] === "") throw new Error("Missing description field");

                    // check for duplicate names
                    if (uniqueNames.has(project.title)) {
                        throw new Error("No duplicate names allowed");
                    }
                    uniqueNames.add(project.title);
                }
                
                for (let i = 0; i < original.length; i++) {
                    const oldProject = original[i];

                    const newProject: Project | undefined = projects.find(p => p.id === oldProject.id);

                    if (newProject === undefined) {
                        // project has been removed, so delete it from firebase and vercel blob
                        await deleteBlob(oldProject.slides)
                        await removeProject(oldProject.id);
                    } else {
                        if (JSON.stringify(newProject) !== JSON.stringify(oldProject)) {
                            // modifications have been made
                            
                            const urls: string[] = newProject.slides;
                            if (urls !== oldProject.slides) {
                                // slides have been modified

                                // find removed slides and delete them from Vercel blob
                                const removedSlides = oldProject.slides.filter(slide => !urls.includes(slide));
                                console.log("Removed slides:", removedSlides);
                                await deleteBlob(removedSlides);

                                for (let j = 0; j < urls.length; j++) {
                                    if (urls[j].includes("  ")) {
                                        // the slide is new, so fetch the image and upload it to Vercel blob
                                        const [fileType, realUrl] = urls[j].split("  ");
                                        const fileExtension = fileType.replace("image/", ".");
                                        const imageStream = (await fetch(realUrl)).body;
                                        if (imageStream) {
                                            const blob = await upload("/projects/" + newProject.title.split(" ")[0] + fileExtension, imageStream, { access: "public", handleUploadUrl: "/admin/upload" });
                                            urls[j] = blob.url;
                                        }
                                    }
                                }
                            }
                            await updateProject(newProject.id, newProject.title, urls, newProject.text, newProject.current);
                        }
                    }
                }

                // add new list items to Vercel blob and Firebase
                const newProjects = projects.filter(p => p.id === "add");
                for (let i = 0; i < newProjects.length; i++) {
                    const project = newProjects[i];
                    const urls: string[] = [];
                    
                    for (let j = 0; j < project.slides.length; j++) {
                        const slide = project.slides[j];
                        const [fileType, realUrl] = slide.split("  ");
                        const fileExtension = fileType.replace("image/", ".");
                        const imageStream = (await fetch(realUrl)).body;
                        if (imageStream) {
                            const blob = await upload("/projects/" + project.title.split(" ")[0] + fileExtension, imageStream, { access: "public", handleUploadUrl: "/admin/upload" });
                            urls.push(blob.url);
                        }
                    }
                    await addProject(project.title, urls, project.text, project.current);
                }

                // update original projects list for further changes
                setOriginal(JSON.parse(JSON.stringify(projects)));
            } catch (error) {
                alert(error);
            }
        }
    };

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>, index: number, sIndex: number) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const url = file.type + "  " + URL.createObjectURL(file);
            setProjects((prevProjects) => {
                const newProjects = [...prevProjects];
                newProjects[index] = { ...newProjects[index], slides: newProjects[index].slides.map((s, j) => j === sIndex ? url : s) };
                return newProjects;
            });
        }
    };

    return (
        <div className="Container">
            <main className="MainContent">
                {signedIn 
                    ?
                    <div className="Section">
                        <h1 className="Head">Edit Projects</h1>
                        <button className="CornerButton" onClick={() => handleSave()}>Save</button>
                        <div className="flex flex-col gap-8">
                            {projects.map((project, index) => (
                                <div className="EditCard w-3/4 flex flex-col gap-2" key={index}>
                                    <button className="EditButton DeleteButton" onClick={() => handleDelete(index)}>
                                        <Image src="/admin/x-button.svg" alt="Delete Button" width={20} height={20} />
                                    </button>
                                    <label>Slides</label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 justify-center">
                                        {project.slides.map((slide, sIndex) => (
                                            <div className="Input flex flex-col gap-2 items-center" key={sIndex}>
                                                {slide === "" ?
                                                    <></>
                                                    :
                                                    <Image className="aspect-square object-cover" src={project.slides[sIndex].includes("  ") ? project.slides[sIndex].split("  ")[1] : project.slides[sIndex]} alt={project.title} width={100} height={100} />
                                                }
                                                <input className="border-2 rounded-md w-3/4" type="file" onChange={e => handleImageChange(e, index, sIndex)} accept="image/*"></input>
                                                
                                                <div className="flex justify-center gap-2">
                                                    <button className="EditButton LeftButton" onClick={() => handleSlideMove(index, sIndex, true)}>
                                                        <Image src="/admin/chevron-up.svg" alt="Edit Button" width={20} height={20} />
                                                    </button>
                                                    <button className="EditButton RightButton" onClick={() => handleSlideDelete(index, sIndex)}>
                                                        <Image src="/admin/x-button.svg" alt="Delete Button" width={20} height={20} />
                                                    </button>
                                                    <button className="EditButton RightButton" onClick={() => handleSlideMove(index, sIndex, false)}>
                                                        <Image src="/admin/chevron-up.svg" alt="Edit Button" width={20} height={20} />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="Input flex justify-center items-center">
                                            <button className="EditButton AddButton" onClick={() => handleSlideAdd(index)}>
                                                <Image src="/admin/add-button.svg" alt="Add Button" width={20} height={20} />
                                            </button>
                                        </div>
                                    </div>
                                    <label className="pointer-events-none">Name
                                        <input className="Input w-full pointer-events-auto" value={project.title} onChange={e => setProjects(projects.map((o, i) => i === index ? { ...o, title: e.target.value } : o))}></input>
                                    </label>
                                    <label className="pointer-events-none">Description (write paragraphs in separate boxes)
                                        <div className="flex flex-col gap-2 pointer-events-auto">
                                            {project.text.map((text, tIndex) => (
                                                <div key={tIndex} className="flex flex-row gap-2 items-center">
                                                    <textarea className="Input w-full" value={project.text[tIndex]} onChange={e => setProjects(projects.map((p, i) => i === index ? { 
                                                        ...p, 
                                                        text: p.text.map((t, j) => j === tIndex ? e.target.value : t)
                                                        } : p))}
                                                    ></textarea>
                                                    {project.text.length > 1 
                                                        ?
                                                        <button className="EditButton RightButton" onClick={() => handleTextDelete(index, tIndex)}>
                                                            <Image src="/admin/x-button.svg" alt="Delete Button" width={20} height={20} />
                                                        </button>
                                                        :
                                                        <></>
                                                    }
                                                </div>
                                            ))}
                                            <button className="EditButton AddButton" onClick={() => handleTextAdd(index)}>
                                                <Image src="/admin/add-button.svg" alt="Add Button" width={20} height={20} />
                                            </button>
                                        </div>
                                    </label>
                                    <label className="flex flex-col items-start pointer-events-none">Current Project
                                        <input type="checkbox" className="Checkbox pointer-events-auto" checked={project.current} onChange={e => setProjects(projects.map((p, i) => i === index ? { ...p, current: e.target.checked } : p))} />
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