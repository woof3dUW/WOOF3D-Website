"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchProjects, Project } from "../firebase";

// Displays an array of projects as a 2 column wide grid.
function DisplayArray(array: {title: string, slides: string[], text: string[]}[]) {
    return (
        <div className="Grid">
            {array.map((project, projectIndex) => (
                <Link className="Name Underline GridItem" href={`/projects/${project.title}`} key={projectIndex}>
                        {project.slides.length > 0
                            ?
                            <Image className="Portrait Card" src={project.slides[0]} width={400} height={400} alt={project.title + " Image"}/>
                            :
                            <></>
                        }
                        {project.title}
                </Link>
            ))}
        </div>
    );
}

export default function ProjectsPage() {
    // The lists of current projects to be displayed.
    const [currProjectArr, setCurrProjectArr] = useState<Project[]>([]);
    // The lists of past projects to be displayed.
    const [pastProjectArr, setPastProjectArr] = useState<Project[]>([]);

    // Runs on page start, fetches current and past projects from Firebase.
    useEffect(() => {
        try {
            // current projects
            fetchProjects(true).then((currProjs) => {
                if (currProjs) {
                    setCurrProjectArr(currProjs);
                }
            });
            // past projects
            fetchProjects(false).then((pastProjs) => {
                if (pastProjs) {
                    setPastProjectArr(pastProjs);
                }
            });
        } catch (error) {
            alert(error);
        }
    }, []);

    return (
        <div className="Container">
            <Header/>
            <main className="MainContent">  
                {currProjectArr.length > 0
                    ?
                    <>
                        <h1 className="Head Center">Current Projects</h1>
                        {DisplayArray(currProjectArr)}
                    </>    
                    : 
                    <></>
                }              
                {pastProjectArr.length > 0
                    ?
                    <>
                        <h1 className="Head Center">Past Projects</h1>
                        {DisplayArray(pastProjectArr)}
                    </>    
                    : 
                    <></>
                }     
            </main>
            <Footer/>
        </div>
    );
} 