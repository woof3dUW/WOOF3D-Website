"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchProjects, Project } from "../firebase";

// const current = [
//     {
//         title: "Hydroponics",
//         slides: [
//             "/projects/hydroponics/hydroponics.png",
//             "/projects/hydroponics/hydroponics2.png"
//         ],
//         text: [
//             `Students are working together to design and assemble a functional hydroponic tower. The tower will house duckweed. 
//             The tower will feature automated sensors for the management of soil chemistry, water levels, and general plant health. 
//             This project encompasses various skills such as: CAD, 3D printing, controls, electronics, and gardening.
//             So far, students have 3D printed parts for a frame, and designed tools and a tool changing mechanism.`
//         ]
//     },
//     {
//         title: "3D Printed Assisstive Tech",
//         slides: [
//             "/projects/assist/assist.jpg",
//             "/projects/assist/assist2.png",
//             "/projects/assist/assist3.jpg",
//             "/projects/assist/assist4.png",
//             "/projects/assist/assist5.png",
//             "/projects/assist/assist6.png",
//             "/projects/assist/assist7.png",
//             "/projects/assist/assist8.png",
//             "/projects/assist/assist9.png",
//             "/projects/assist/assist10.png",
//             "/projects/assist/assist11.png",
//             "/projects/assist/assist12.png",
//             "/projects/assist/assist13.png",
//             "/projects/assist/assist14.png",
//             "/projects/assist/assist15.png",
//             "/projects/assist/assist16.png",
//             "/projects/assist/assist17.png"
//         ],
//         text: [
//             `This is a collaborative project with the Washington Assistive Technology Act Program (WATAP) and Husky Adapt. 
//             The Assistive Technology Support Technician for WATAP, Brennen Johnston, has reached out to Husky Adapt and WOOF3D 
//             to request help in the expansion of a design library of 3D printed assistive devices. Members of this project are working with Brennen to identify various needs for assistive technology, 
//             design devices to help address these needs, test these devices, and add final designs to an open source library for public use. 
//             Students will engage in the following skills: CAD, human centered design and engineering, electronics and programming. `
//         ]
//     },
//     {
//         title: "Fabrics",
//         slides: [
//             "/projects/fabrics/fabrics.png",
//             "/projects/fabrics/fabrics2.png",
//             "/projects/fabrics/fabrics3.png",
//             "/projects/fabrics/fabrics4.png",
//             "/projects/fabrics/fabrics5.png"
//         ],
//         text: [
//             `This is the continuation of a project from last year which attempted to 3D print various clothing/wearables and fabrics. 
//             Members each chose an article of wear to design, print, and test. Members will engage with the following skills: CAD and 3D printing  `
//         ]
//     },
//     {
//         title: "Casting",
//         slides: [
//             "/projects/casting2/casting.png",
//             "/projects/casting2/casting2.png",
//             "/projects/casting2/casting3.png",
//             "/projects/casting2/casting4.png"
//         ],
//         text: [
//             `This project aims at experimenting with various casting techniques, tools, and materials to create various objects. 
//             Students spent fall quarter experimenting with silicone and resin casting, as well as 3D printing molds and casting silicone molds.
//             During winter and spring quarters, students have been working with a UW faculty member to design a model to be casted
//             with aluminum.`
//         ]
//     },
//     {
//         title: "RC Drone",
//         slides: [
//             "/projects/rcdrone/rcdrone.png",
//             "/projects/rcdrone/rcdrone2.png"
//         ],
//         text: [
//             `This project aims to explore the viability and design of both a compact FPV drone and a cycloidal drone with propellers that 
//             rotate around the horizontal axis.
//             Members will explore skills in: electronics, programming, CAD, 3D printing, and controls. `
//         ]
//     },
//     {
//         title: "RC Vehicle",
//         slides: [
//             "/projects/rcvehicle2/rccar.png",
//             "/projects/rcvehicle2/rccar2.png",
//             "/projects/rcvehicle2/rccar3.png",
//             "/projects/rcvehicle2/rccar4.png",
//             "/projects/rcvehicle2/rccar5.png"
//         ],
//         text: [
//             `This project is a continuation of a project from last year which involved designing and 3D printing functional components for an RC vehicle. 
//             So far, the team has experimented with various prototype components of a remote control car. 
//             Along the way, unique concepts such as magnetic suspension and airless tires have been modeled and printed.
//             This year, the team has designed a new chassis and experimented with casting tires out of TPU and silicone.`
//         ]
//     }
// ];

// const projects = [
//     {
//         title: "ISS-Mimic",
//         slides: [
//             "/projects/iss/iss.png",
//             "/projects/iss/iss2.jpg",
//             "/projects/iss/iss3.jpg"
//         ],
//         text: [
//             `The ISS-Mimic project was a joint project with WOOF3D and the Museum of Flight. 
//             The goal was to create a 3D-printed model of the ISS Mimic to display in an exhibition in late May/early June. 
//             The project entailed 3d printing parts and assembling the model with servos and other electronics.`,
//             `The model was successfully created and assembled, and was displayed at the Museum of Flight.`
//         ]
//     },
//     {
//         title: "RC Vehicle",
//         slides: [
//             "/projects/rcvehicle/rcvehicle.jpg",
//             "/projects/rcvehicle/rcvehicle2.jpg",
//             "/projects/rcvehicle/rcvehicle3.jpg",
//             "/projects/rcvehicle/rcvehicle4.jpg"
//         ],
//         text: [
//             `The RC Vehicle project has provided an opportunity for students to practice designing and 3D printing functional components. 
//             So far, the team has experimented with various prototype components of a remote control car. 
//             Along the way, unique concepts such as magnetic suspension and airless tires have been modeled and printed. 
//             In the future, the goal is to combine the individual components and ideas into a functional vehicle.`
//         ]
//     },
//     {
//         title: "Casting",
//         slides: [
//             "/projects/casting/casting.jpg",
//             "/projects/casting/casting2.jpg",
//             "/projects/casting/casting3.jpg",
//             "/projects/casting/casting4.jpg"
//         ],
//         text: [
//             `The casting project explored a diverse use case of 3D-printing and digital fabrication to convert 3D-printed prototypes 
//             to physical aluminum-casted objects. The goal was to design a model, sand or investment cast it with molten aluminum, 
//             and post-process it to form a durable and everlasting piece.`
//         ]
//     },
//     {
//         title: "Drone Teams",
//         slides: [
//             "/projects/droneteamone/droneteamone.jpg",
//             "/projects/droneteamone/droneteamone2.jpg",
//             "/projects/droneteamone/droneteamone3.jpg",
//             "/projects/droneteamtwo/droneteamtwo.jpg",
//             "/projects/droneteamtwo/droneteamtwo2.jpg"
//         ],
//         text: [
//             `The Drone project is an exploration of using 3D printing to create greatly customizable quadcopter designs. 
//             The project is split into two teams, exploring opposite ends of the drone spectrum.`,
//             `Drone Team 1 attempted to create a lightweight and fast racing FPV drone, with the potential to add wings (Images 1-3).`,
//             `Drone Team 2 aimed to design a foldable large format cargo drone that has attachment points for additional modules (Images 4-5).`
//         ]
//     },
//     {
//         title: "3D Printed Fossils",
//         slides: [
//             "/projects/fossil/fossil.jpg",
//             "/projects/fossil/fossil2.jpg",
//             "/projects/fossil/fossil3.jpg",
//             "/projects/fossil/fossil4.jpg"
//         ],
//         text: [
//             `This project involves important scientific research and working with a research group to help 3D print two newly discovered species of ground sloths from the Hoyo Negro project in Mexico, in hopes of comparing them to other known sloths. 
//             So far the team has familiarized themselves with printing fossils by practicing with fossil scans, 
//             and will start printing the fossils for the research group.`
//         ]
//     },
//     {
//         title: "Medium Blue",
//         slides: [
//             "/projects/mediumblue/mediumblue.jpg",
//             "/projects/mediumblue/mediumblue2.jpg",
//             "/projects/mediumblue/mediumblue3.jpg",
//             "/projects/mediumblue/mediumblue4.jpg"
//         ],
//         text: [
//             `The goal of this project is to redesign our club's large format 3D printer, Big Blue. 
//             Members of the team spent autumn quarter researching 3D printer designs and figuring out what works best for the needs of the club. 
//             In a later quarter, members worked on transferring design ideas to a 3D model using CAD, 
//             with the eventual goal of building the printer and using it for the club.`
//         ]
//     },
//     {
//         title: "IRO-3D",
//         slides: [
//             "/projects/iro/iro.jpg",
//             "/projects/iro/iro2.jpg"
//         ],
//         text: [
//             `The goal of IRO-3D is to characterize a novel 3D printing process called selective powder deposition through a machine called IRO-3D. 
//             The characterization involves attempting to fine tune the machine so it can print with a variety of material powder, including glass and metal. 
//             Once the machine is characterized and fully functional, it can cut the cost of printing solid metal and glass parts to around $1k.`
//         ]
//     },
//     {
//         title: "Turbine Printing",
//         slides: [
//             "/projects/turbine/turbine.jpg",
//             "/projects/turbine/turbine2.jpg",
//             "/projects/turbine/turbine3.jpg"
//         ],
//         text: [
//             `Goal: Using Big Blue to print large-scale turbines that "are otherwise un-machinable." Due to some difficulties, this project is more about updating Big Blue, 
//             our in-house large-scale 3D printer with a build space of approximately 1 m by 1 m.`,
//             `Results: Our client came to us with this project since we have Big Blue, which is our custom-built 1m by 1m printer the club made for a previous project. 
//             The team not only got to work with a graduate student working on his thesis but also tackled the difficulties of large-scale printing. 
//             Gian, the team lead of the project, has expressed interest in a new project for the next year to create Big Blue 2.0, using what he and the team learned this year 
//             to update the printer for future WOOF members. `
//         ]
//     },
//     {
//         title: "Voxel Printing",
//         slides: [
//             "/projects/voxel/voxel.png",
//             "/projects/voxel/voxel2.png"
//         ],
//         text: [
//             `Goal: Create a slicing software in MATLAB that can take in a DICOM file and slice it into the necessary layers for voxel printing using the Stratasys machine.`,
//             `Results: The workflow for this project was extremely slow as the team needed permission and check offs from Stratasys every step of the way. 
//             Despite this, the team was able to work with and be mentored by researches in the CLIMB lab. 
//             By the end of the year, the team had created a software that successfully processed a 3D model of a cube for voxel printing. 
//             The next step will be to test the software on more complex models. 
//             This project had a large focus on programming skills but also granted the students to work with high tech printers. 
//             CLIMB has expressed an interest in working with the students in the future which presents possibilities for the future of the club.`
//         ]
//     },
//     {
//         title: "Kidney Modeling",
//         slides: [
//             "/projects/kidney/kidney.png",
//             "/projects/kidney/kidney2.jpg",
//             "/projects/kidney/kidney3.png",
//             "/projects/kidney/kidney4.png"
//         ],
//         text: [
//             `Goal: Use 3D printing to create kidney models that can be imaged with medical ultrasound equipment. 
//             Realistic and ultrasound-compatible kidney models could be used for medical education, training, or for development and testing of ultrasound-based therapy systems.`,
//             `Results: In order to print out of a material that responds in a similar manner to a kidney, the team need to use a syringe printer. 
//             Instead of heating up the plastic filament in the conventional 3D printing manner, the material is extruded out of a syringe by a plunger. 
//             After much research and testing, the team felt that silicone would best mirror the properties of a kidney for ultrasounding purposes. 
//             Using our club room and resources, the team has assembled a syringe printer and have received an STL for the kidney from the client. 
//             Next, the team will start testing their design with ultrasound.`,
//             `The client came to us because he had not been able to get a grant from the school for this project. 
//             Our club presented an easy and accessible way for him as a faculty member at UW to pursue it. 
//             In exchange, the team got valuable mentorship on a unique engineering project.`
//         ]
//     },
//     {
//         title: "Precious Plastics",
//         slides: [
//             "/projects/ppp/ppp.png",
//             "/projects/ppp/ppp2.jpg",
//             "/projects/ppp/ppp3.jpg",
//             "/projects/ppp/ppp4.png",
//             "/projects/ppp/ppp5.jpg"
//         ],
//         text: [
//             `Goal: Design and print products that PPP can then sell at the bookstore after manufacturing them from recycled plastics. 
//             We will be designing products that can be printed, as well as creating molds that can be used by the injection machine. The goal will be to have finished products by Earth day (April 20th) for PPP to display!`,
//             `Results: Our client, Precious Plastics, moved a lot slower than we would have liked and only have two of the four machines required: The Shredder and the Extruder. 
//             Since they still do not have the injection molder, the team was not able to make any products. 
//             However, they have successfully made the prototypes and were in the process of designing the necessary molds by the end of the year. 
//             PPP is getting us the funding for mold materials now, so that should be purchased and ready to go by the end of the quarter. 
//             Next year the team will make the mold and they will use their new injection molder to make products.`
//         ]
//     },
//     {
//         title: "Advanced Printing",
//         slides: [
//             "/projects/advancedprinting/printing.jpg"
//         ],
//         text: [
//             `Goal: Finish the printers we built as a club Fall 2018. We will be teaching multiple topics especially about special optional parts. 
//             Offered in a similar structure as a class with a once-a-week meeting where the members will focus on a different subcategory of 3D printing each week.`,   
//             `Results: The team went over basic Solidworks design, G-Code, part inventory, and the Finders' extruder system. 
//             We plan to continue to offer this internal course next year and hope to improve the overall experience from what we learned.`
//         ]
//     },
//     {
//         title: "Photogrammetry",
//         slides: [
//             "/projects/photogrammetry/photogrammetry.jpg",
//             "/projects/photogrammetry/photogrammetry2.png",
//             "/projects/photogrammetry/photogrammetry3.png",
//             "/projects/photogrammetry/photogrammetry4.jpg"
//         ],
//         text: [
//             `Goal: Design and build a device capable of taking photographs in a repeatable and accurate manner for use in photogrammetric analysis, the generation of a three-dimensional model of an object through a collection of photographs.`,
//             `Results: The team successfully created a photogrammetry device. In the future they plan to continue to project to make a better, 2.0, version.  The project involved working with Arduino, basic hardware and tools, and imaging software. 
//             The team also compiled what they learned about photogrammetry into an eighteen-page report. Three main points are summarized below.`,
//             `Three important tricks to improve the overall quality of the generated model:`,
//             ` • Specular reflective (shiny) surfaces are not desirable. Reflections change position with respect to the camera and confuse the photogrammetry software. Remedy this by spraying the model with a matte finish and avoid direct light sources. `,
//             ` • Capturing as many perspectives of the model is desirable. Only so much data may be captured by rotating in a single lateral ring. 
//             Changing the height and angle of the camera for several lateral rings captures essential perspective detail of the model and improves the fidelity of the generated model.`,
//             ` • The photogrammetric analysis software uses all information in the images, including items in the background. For the most effective model generation, fill about 60% of the camera view with the model. 
//             Items in the background provide useful information helpful to identifying camera location in 3D space.`
//         ]
//     },
//     {
//         title: "Volcanoes",
//         slides: [
//             "/projects/volcano/volcano.jpg",
//             "/projects/volcano/volcano2.jpg",
//             "/projects/volcano/volcano3.jpg",
//             "/projects/volcano/volcano4.jpg",
//             "/projects/volcano/volcano5.jpg",
//         ],
//         text: [
//             `Goal: Work with Steve on his personal project of printing the topographical maps of the Northwest's five volcanos. 
//             He showed them how to create 3D topo maps, how to use MeshMixer to manipulate the STL files, slice the files and how-to 3D print the files.`,
//             `Results: Our team lead did an excellent good job with this project and Steve was happy with the results. 
//             The team improved upon the original method designed by club members for the process to create several models that the club will show off at future workshops. 
//             We also plan to continue to expand this project and see what other data can be used to create and print 3D models.`
//         ]
//     }
// ];

// async function AddProjects() {
//     projects.forEach(async (project, projectIndex) => {
//         if (true) {
//             const urlSlides: string[] = [];
//             for (let slideIndex = 0; slideIndex < project.slides.length; slideIndex++) {
//                 const slide = project.slides[slideIndex];
//                 const imageStream = (await fetch(slide)).body;
//                 if (imageStream) {
//                     const blob = await upload(slide, imageStream, {access: "public", handleUploadUrl: "/admin/upload"});
//                     urlSlides[slideIndex] = blob.url;
//                     console.log("blob url: " + blob.url);
//                 }
//             }
//             console.log("starting add project");
//             await addProject(project.title, urlSlides, project.text, false);
//         }
//     });
// }

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
    const [currProjectArr, setCurrProjectArr] = useState<Project[]>([]);
    const [pastProjectArr, setPastProjectArr] = useState<Project[]>([]);

    useEffect(() => {
        try {
            fetchProjects(true).then((currProjs) => {
                if (currProjs) {
                    setCurrProjectArr(currProjs);
                }
            });
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
                <h1 className="Head Center">Current Projects</h1>
                {DisplayArray(currProjectArr)}
                <h1 className="Head Center">Past Projects</h1>
                {DisplayArray(pastProjectArr)}
            </main>
            <Footer/>
        </div>
    );
} 