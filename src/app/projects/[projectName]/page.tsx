"use client";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ImageSlider from "../../../components/ImageSlider";
import { usePathname } from "next/navigation";
import { fetchProjectByName, Project} from "../../firebase";
import { useEffect, useState } from "react";

export default function IndividualProjectPage() {
    // The project being displayed.
    const [project, setProject] = useState<Project | null>(null);
    // The current URL.
    const pathname = usePathname();

    // Runs on page start, fetches project by name from Firebase using the URL.
    useEffect(() => {
        try {
            // get last part of the URL, which is the project name
            const urlProjectName = pathname.split("/").pop();
            // uri decode name if it exists
            const projectName = decodeURIComponent(urlProjectName || "");
            if (projectName) {
                fetchProjectByName(projectName).then((proj) => {
                    if (proj) {
                        setProject(proj);
                    }
                });
            }
        } catch (error) {
            alert(error);
        }
    }, []);

    return (
        <><div className="Container">
            <Header/>
            <main className="MainContent">
                <div className="Section">
                    {project === null
                        ?
                        <div>Project not found</div>
                        :
                        <><h1 className="Head">{project.title}</h1>
                        {project.slides === null || project.slides.length === 0 
                            ?
                            <></>
                            :
                            <div className="SliderContainer">
                                <ImageSlider slides={project.slides}/>
                            </div>
                        }
                        <br/>
                        <div className="Text">
                            { project.text === null || project.text.length === 0 
                                ?
                                <></>
                                :
                                project.text.map((paragraph, num) => (
                                    <p className="Text" key={num} style={{marginTop: "20px", whiteSpace: "pre-line"}}>{paragraph}</p>
                                ))
                            }
                        </div>
                        </>
                    }
                </div>
            </main>
            <Footer/>
        </div></>
    )
}