"use client";

import { useEffect, useState } from "react";
import { fetchProjects, Project, auth, addProject, removeProject, updateProject } from "../../firebase";
import { deleteBlob } from "../../server";
import Image from "next/image";
import { onAuthStateChanged } from "firebase/auth";
import { upload } from "@vercel/blob/client";

export default function EditProjectsPage() {
    // The list of projects to be displayed and edited.
    const [projects, setProjects] = useState<Project[]>([]);
    // The original list of projects to check for changes.
    const [original, setOriginal] = useState<Project[]>([]);
    // Whether the user is signed in or not.
    const [signedIn, setSignedIn] = useState<boolean>(false);

    // Runs on page start, fetches projects from Firebase and checks auth state.
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setSignedIn(user !== null);
            if (user !== null) {
                try {
                    fetchProjects(null).then((projs) => {
                        if (projs) {
                            // deep copy projects to projects array and original array to avoid reference issues
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

    // Moves a slide up or down in the list. index is the project index, sIndex is the slide's index within the project slides, 
    // and up is a boolean indicating whether to move the slide up or down in the list.
    const handleSlideMove = (index: number, sIndex: number, up: boolean) => {
        const newProjects = [...projects];
        const [movedSlide] = newProjects[index].slides.splice(sIndex, 1);
        // move the slide up or down only if it is not already at the top or bottom of the list
        newProjects[index].slides.splice(sIndex + (up ? (sIndex > 0 ? -1 : 0) : (sIndex < projects[index].slides.length ? 1 : 0)), 0, movedSlide);
        setProjects(newProjects);
    };

    // Deletes a project from the list. index is the index of the project in the projects array.
    const handleDelete = (index: number) => {
        // open a popup to confirm deletion before proceeding
        if (confirm("Are you sure you want to delete this project?")) {
            const newProjects = [...projects];
            newProjects.splice(index, 1);
            setProjects(newProjects);
        }
    }

    // Deletes a slide from the project. index is the index of the project in the projects array, sIndex is the index of the slide in the project's slides array.
    const handleSlideDelete = (index: number, sIndex: number) => {
        // open a popup to confirm deletion before proceeding
        if (confirm("Are you sure you want to delete this slide?")) {
            const newProjects = [...projects];
            newProjects[index].slides.splice(sIndex, 1);
            setProjects(newProjects);
        }
    }

    // Deletes a text box from the project. index is the index of the project in the projects array, tIndex is the index of the text box in the project's text array.
    const handleTextDelete = (index: number, tIndex: number) => {
        // open a popup to confirm deletion before proceeding
        if (confirm("Are you sure you want to delete this text box?")) {
            setProjects(projects.map((p, i) => i === index ? { 
                ...p, 
                text: p.text.filter((t, j) => j !== tIndex)
                } : p))
        }
    }

    // Adds a new project to the list with an empty title, no slides, and no text and current set to true. 
    // The ID is set to "add" to indicate that this is a new project when saving.
    const handleAdd = () => {
        setProjects((prevProjects) => [...prevProjects, { id: "add", title: "", slides: [], text: [], current: true}]);
    };

    // Adds a new slide to the project at the specified index in the projects array.
    const handleSlideAdd = (index: number) => {
        const newProjects = [...projects];
        newProjects[index].slides.push("");
        setProjects(newProjects);
    };

    // Adds a new text box to the project at the specified index in the projects array.
    const handleTextAdd = (index: number) => {
        const newProjects = [...projects];
        newProjects[index].text.push("");
        setProjects(newProjects);
    };

    // Saves the current projects list to Firebase and Vercel blob, checking for changes and errors.
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
                
                // loop through original projects and check for changes
                for (let i = 0; i < original.length; i++) {
                    // current original project
                    const oldProject = original[i];

                    // find the corresponding new project by ID if it exists
                    const newProject: Project | undefined = projects.find(p => p.id === oldProject.id);

                    // check if the corersponding new project exists
                    if (newProject === undefined) {
                        // project has been removed, so delete it from Firebase and Vercel blob
                        await deleteBlob(oldProject.slides)
                        await removeProject(oldProject.id);
                    } else {
                        // corresponding new officer exists, check for modifications
                        if (JSON.stringify(newProject) !== JSON.stringify(oldProject)) {
                            // modifications have been made
                            
                            // check if the slides have been modified
                            const urls: string[] = newProject.slides;
                            if (urls !== oldProject.slides) {
                                // slides have been modified

                                // find removed slides and delete them from Vercel blob
                                const removedSlides = oldProject.slides.filter(slide => !urls.includes(slide));
                                await deleteBlob(removedSlides);

                                // loop through the new URLs and check if they need to be uploaded to Vercel blob
                                for (let j = 0; j < urls.length; j++) {
                                    if (urls[j].includes("  ")) {
                                        // the slide is new, so fetch the image and upload it to Vercel blob

                                        // extract file type and URL from the slide 
                                        // the new picture is stored in the format "image/type  URL"
                                        const [fileType, realUrl] = urls[j].split("  ");
                                        // change file type format from "image/type" to ".type"
                                        const fileExtension = fileType.replace("image/", ".");
                                        // fetch the image stream from the URL
                                        const imageStream = (await fetch(realUrl)).body;
                                        // upload the image stream to Vercel blob storage if it exists
                                        if (imageStream) {
                                            // upload in format "/projects/firstword.type"
                                            const blob = await upload("/projects/" + newProject.title.split(" ")[0] + fileExtension, imageStream, { access: "public", handleUploadUrl: "/admin/upload" });
                                            // replace the URL in the URLs array with the new blob URL
                                            urls[j] = blob.url;
                                        }
                                    }
                                }
                            }
                            // update the project in Firebase with the new title, slides, text, and current status
                            await updateProject(newProject.id, newProject.title, urls, newProject.text, newProject.current);
                        }
                    }
                }

                // find new projects through the ID "add"
                const newProjects = projects.filter(p => p.id === "add");
                // loop through new projects and add them to Firebase and Vercel blob
                for (let i = 0; i < newProjects.length; i++) {
                    const project = newProjects[i];
                    const urls: string[] = [];
                    
                    // loop through the slides of the new project and upload them to Vercel blob
                    for (let j = 0; j < project.slides.length; j++) {
                        const slide = project.slides[j];
                        // extract file type and URL from the slide 
                        // the new picture is stored in the format "image/type  URL"
                        const [fileType, realUrl] = slide.split("  ");
                        // change file type format from "image/type" to ".type"
                        const fileExtension = fileType.replace("image/", ".");
                        // fetch the image stream from the URL
                        const imageStream = (await fetch(realUrl)).body;
                        // upload the image stream to Vercel blob storage if it exists
                        if (imageStream) {
                            // upload in format "/projects/firstword.type"
                            const blob = await upload("/projects/" + project.title.split(" ")[0] + fileExtension, imageStream, { access: "public", handleUploadUrl: "/admin/upload" });
                            // add the blob URL to the URLs array
                            urls.push(blob.url);
                        }
                    }
                    // add the new project to Firebase
                    await addProject(project.title, urls, project.text, project.current);
                }

                // update original projects list for further changes (deep copy to avoid reference issues)
                setOriginal(JSON.parse(JSON.stringify(projects)));

                alert("Save successful");
            } catch (error) {
                alert(error);
            }
        }
    };

    // Handles image change for a specific slide in a project. e is the HTML file upload event, index is the project index
    // and sIndex is the slide index within the project slides.
    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>, index: number, sIndex: number) => {
        // make sure file exists
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            // save the file type in the URL in the format "image/type  URL"
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