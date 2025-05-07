
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import "./Page.css";
import volcano from "./images/volcano/volcano.jpg";
import volcano2 from "./images/volcano/volcano2.jpg";
import volcano3 from "./images/volcano/volcano3.jpg";
import volcano4 from "./images/volcano/volcano4.jpg";
import volcano5 from "./images/volcano/volcano5.jpg";
import photogrammetry from "./images/photogrammetry/photogrammetry.jpg";
import photogrammetry2 from "./images/photogrammetry/photogrammetry2.png";
import photogrammetry3 from "./images/photogrammetry/photogrammetry3.png";
import photogrammetry4 from "./images/photogrammetry/photogrammetry4.jpg";
import ppp from "./images/ppp/ppp.png";
import ppp2 from "./images/ppp/ppp2.jpg";
import ppp3 from "./images/ppp/ppp3.jpg";
import ppp4 from "./images/ppp/ppp4.png";
import ppp5 from "./images/ppp/ppp5.jpg";
import printing from "./images/advancedprinting/printing.jpg";
import kidney from "./images/kidney/kidney.png";
import kidney2 from "./images/kidney/kidney2.jpg";
import kidney3 from "./images/kidney/kidney3.png";
import kidney4 from "./images/kidney/kidney4.png";
import voxel from "./images/voxel/voxel.png";
import voxel2 from "./images/voxel/voxel2.png";
import turbine from "./images/turbine/turbine.jpg";
import turbine2 from "./images/turbine/turbine2.jpg";
import turbine3 from "./images/turbine/turbine3.jpg";
import iro from "./images/iro/iro.jpg";
import iro2 from "./images/iro/iro2.jpg";
import mediumblue from "./images/mediumblue/mediumblue.jpg";
import mediumblue2 from "./images/mediumblue/mediumblue2.jpg";
import mediumblue3 from "./images/mediumblue/mediumblue3.jpg";
import mediumblue4 from "./images/mediumblue/mediumblue4.jpg";
import fossil from "./images/fossil/fossil.jpg";
import fossil2 from "./images/fossil/fossil2.jpg";
import fossil3 from "./images/fossil/fossil3.jpg";
import fossil4 from "./images/fossil/fossil4.jpg";
import droneteamone from "./images/droneteamone/droneteamone.jpg";
import droneteamone2 from "./images/droneteamone/droneteamone2.jpg";
import droneteamone3 from "./images/droneteamone/droneteamone3.jpg";
import droneteamtwo from "./images/droneteamtwo/droneteamtwo.jpg";
import droneteamtwo2 from "./images/droneteamtwo/droneteamtwo2.jpg"
import casting from "./images/casting/casting.jpg";
import casting2 from "./images/casting/casting2.jpg";
import casting3 from "./images/casting/casting3.jpg";
import casting4 from "./images/casting/casting4.jpg";
import rcvehicle from "./images/rcvehicle/rcvehicle.jpg";
import rcvehicle2 from "./images/rcvehicle/rcvehicle2.jpg";
import rcvehicle3 from "./images/rcvehicle/rcvehicle3.jpg";
import rcvehicle4 from "./images/rcvehicle/rcvehicle4.jpg";
import iss from "./images/iss/iss.png";
import iss2 from "./images/iss/iss2.jpg";
import iss3 from "./images/iss/iss3.jpg";
import hydroponics from "./images/hydroponics/hydroponics.png";
import hydroponics2 from "./images/hydroponics/hydroponics2.png";
import assist from "./images/assist/assist.jpg";
import assist2 from "./images/assist/assist2.png";
import assist3 from "./images/assist/assist3.jpg";
import assist4 from "./images/assist/assist4.png";
import assist5 from "./images/assist/assist5.png";
import assist6 from "./images/assist/assist6.png";
import assist7 from "./images/assist/assist7.png";
import assist8 from "./images/assist/assist8.png";
import assist9 from "./images/assist/assist9.png";
import assist10 from "./images/assist/assist10.png";
import assist11 from "./images/assist/assist11.png";
import assist12 from "./images/assist/assist12.png";
import assist13 from "./images/assist/assist13.png";
import assist14 from "./images/assist/assist14.png";
import assist15 from "./images/assist/assist15.png";
import assist16 from "./images/assist/assist16.png";
import assist17 from "./images/assist/assist17.png";
import fabrics from "./images/fabrics/fabrics.png";
import fabrics2 from "./images/fabrics/fabrics2.png";
import fabrics3 from "./images/fabrics/fabrics3.png";
import fabrics4 from "./images/fabrics/fabrics4.png";
import fabrics5 from "./images/fabrics/fabrics5.png";
import cast from "./images/casting2/casting.png";
import cast2 from "./images/casting2/casting2.png";
import cast3 from "./images/casting2/casting3.png";
import cast4 from "./images/casting2/casting4.png";
import rcdrone from "./images/rcdrone/rcdrone.png";
import rcdrone2 from "./images/rcdrone/rcdrone2.png";
import rccar from "./images/rcvehicle2/rccar.png";
import rccar2 from "./images/rcvehicle2/rccar2.png";
import rccar3 from "./images/rcvehicle2/rccar3.png";
import rccar4 from "./images/rcvehicle2/rccar4.png";
import rccar5 from "./images/rcvehicle2/rccar5.png";

export const ProjectsPage = () => {    
    function scrollToTop() {
        window.scrollTo(0,0);
    }

    const current = [
        {
            title: "Hydroponics",
            slides: [
                {url: hydroponics, title: "hydroponics"},
                {url: hydroponics2, title: "hydroponics2"}
            ],
            text: [
                `Students are working together to design and assemble a functional hydroponic tower. The tower will house duckweed. 
                The tower will feature automated sensors for the management of soil chemistry, water levels, and general plant health. 
                This project encompasses various skills such as: CAD, 3D printing, controls, electronics, and gardening.
                So far, students have 3D printed parts for a frame, and designed tools and a tool changing mechanism.`
            ]
        }, 
        {
            title: "3D Printed Assisstive Tech", 
            slides: [
                {url: assist, title: "assist"},
                {url: assist2, title: "assist2"},
                {url: assist3, title: "assist3"},
                {url: assist4, title: "assist4"},
                {url: assist5, title: "assist5"},
                {url: assist6, title: "assist6"},
                {url: assist7, title: "assist7"},
                {url: assist8, title: "assist8"},
                {url: assist9, title: "assist9"},
                {url: assist10, title: "assist10"},
                {url: assist11, title: "assist11"},
                {url: assist12, title: "assist12"},
                {url: assist13, title: "assist13"},
                {url: assist14, title: "assist14"},
                {url: assist15, title: "assist15"},
                {url: assist16, title: "assist16"},
                {url: assist17, title: "assist17"},
            ],
            text: [
                `This is a collaborative project with the Washington Assistive Technology Act Program (WATAP) and Husky Adapt. 
                The Assistive Technology Support Technician for WATAP, Brennen Johnston, has reached out to Husky Adapt and WOOF3D 
                to request help in the expansion of a design library of 3D printed assistive devices. Members of this project are working with Brennen to identify various needs for assistive technology, 
                design devices to help address these needs, test these devices, and add final designs to an open source library for public use. 
                Students will engage in the following skills: CAD, human centered design and engineering, electronics and programming. `
            ]
        },
        {
            title: "Fabrics", 
            slides: [
                {url: fabrics, title: "fabrics"},
                {url: fabrics2, title: "fabrics2"},
                {url: fabrics3, title: "fabrics3"},
                {url: fabrics4, title: "fabrics4"},
                {url: fabrics5, title: "fabrics5"},

            ],
            text: [
                `This is the continuation of a project from last year which attempted to 3D print various clothing/wearables and fabrics. 
                Members each chose an article of wear to design, print, and test. Members will engage with the following skills: CAD and 3D printing  `
            ]
        },
        {
            title: "Casting", 
            slides: [
                {url: cast, title: "casting"},
                {url: cast2, title: "casting2"},
                {url: cast3, title: "casting3"},
                {url: cast4, title: "casting4"},
            ],
            text: [
                `This project aims at experimenting with various casting techniques, tools, and materials to create various objects. 
                Students spent fall quarter experimenting with silicone and resin casting, as well as 3D printing molds and casting silicone molds.
                During winter and spring quarters, students have been working with a UW faculty member to design a model to be casted
                with aluminum.`
            ]
        },
        {
            title: "RC Drone", 
            slides: [
                {url: rcdrone, title: "rcdrone"},
                {url: rcdrone2, title: "rcdrone2"},
            ],
            text: [
                `This project aims to explore the viability and design of both a compact FPV drone and a cycloidal drone with propellers that 
                rotate around the horizontal axis.
                Members will explore skills in: electronics, programming, CAD, 3D printing, and controls. `
            ]
        },
        {
            title: "RC Vehicle", 
            slides: [
                {url: rccar, title: "rcvehicle"},
                {url: rccar2, title: "rcvehicle2"},
                {url: rccar3, title: "rcvehicle3"},
                {url: rccar4, title: "rcvehicle4"},
                {url: rccar5, title: "rcvehicle5"},
            ],
            text: [
                `This project is a continuation of a project from last year which involved designing and 3D printing functional components for an RC vehicle. 
                So far, the team has experimented with various prototype components of a remote control car. 
                Along the way, unique concepts such as magnetic suspension and airless tires have been modeled and printed.
                This year, the team has designed a new chassis and experimented with casting tires out of TPU and silicone.`
            ]
        }
    ]
    
    const projects = [
        {
            title: "ISS-Mimic", 
            slides: [
                {url: iss, title: "iss"},
                {url: iss2, title: "iss2"},
                {url: iss3, title: "iss3"}
            ], text: [
                `The ISS-Mimic project was a joint project with WOOF3D and the Museum of Flight. 
                The goal was to create a 3D-printed model of the ISS Mimic to display in an exhibition in late May/early June. 
                The project entailed 3d printing parts and assembling the model with servos and other electronics.`,
                `The model was successfully created and assembled, and was displayed at the Museum of Flight.`
            ]
        },
        {
            title: "RC Vehicle", 
            slides: [
                {url: rcvehicle, title: "rcvehicle"},
                {url: rcvehicle2, title: "rcvehicle2"},
                {url: rcvehicle3, title: "rcvehicle3"},
                {url: rcvehicle4, title: "rcvehicle4"}
            ], 
            text: [
                `The RC Vehicle project has provided an opportunity for students to practice designing and 3D printing functional components. 
                So far, the team has experimented with various prototype components of a remote control car. 
                Along the way, unique concepts such as magnetic suspension and airless tires have been modeled and printed. 
                In the future, the goal is to combine the individual components and ideas into a functional vehicle.
`
            ]
        },
        {
            title: "Casting",
            slides: [
                {url: casting, title: "casting"},
                {url: casting2, title: "casting2"},
                {url: casting3, title: "casting3"},
                {url: casting4, title: "casting4"}
            ], 
            text: [
                `The casting project explored a diverse use case of 3D-printing and digital fabrication to convert 3D-printed prototypes 
                to physical aluminum-casted objects. The goal was to design a model, sand or investment cast it with molten aluminum, 
                and post-process it to form a durable and everlasting piece.`
            ]
        },
        {
            title: "Drone Teams",
            slides: [
                {url: droneteamone, title: "droneteamone"},
                {url: droneteamone2, title: "droneteamone2"},
                {url: droneteamone3, title: "droneteamone3"},
                {url: droneteamtwo, title: "droneteamtwo"},
                {url: droneteamtwo2, title: "droneteamtwo2"}
            ], 
            text: [
                `The Drone project is an exploration of using 3D printing to create greatly customizable quadcopter designs. 
                The project is split into two teams, exploring opposite ends of the drone spectrum.`,
                `Drone Team 1 attempted to create a lightweight and fast racing FPV drone, with the potential to add wings (Images 1-3).`,
                `Drone Team 2 aimed to design a foldable large format cargo drone that has attachment points for additional modules (Images 4-5).`
            ]
        },
        {
            title: "3D Printed Fossils",
            slides: [
                {url: fossil, title: "fossil"},
                {url: fossil2, title: "fossil2"},
                {url: fossil3, title: "fossil3"},
                {url: fossil4, title: "fossil4"}
            ], 
            text: [
                `This project involves important scientific research and working with a research group to help 3D print two newly discovered species of ground sloths from the Hoyo Negro project in Mexico, in hopes of comparing them to other known sloths. 
                So far the team has familiarized themselves with printing fossils by practicing with fossil scans, 
                and will start printing the fossils for the research group.`
            ]
        },
        {
            title: "Medium Blue",
            slides: [
                {url: mediumblue, title: "mediumblue"},
                {url: mediumblue2, title: "mediumblue2"},
                {url: mediumblue3, title: "mediumblue3"},
                {url: mediumblue4, title: "mediumblue4"}
            ], 
            text: [
                `The goal of this project is to redesign our club's large format 3D printer, Big Blue. 
                Members of the team spent autumn quarter researching 3D printer designs and figuring out what works best for the needs of the club. 
                In a later quarter, members worked on transferring design ideas to a 3D model using CAD, 
                with the eventual goal of building the printer and using it for the club.`
            ]
        },
        {
            title: "IRO-3D",
            slides: [
                {url: iro, title: "iro"},
                {url: iro2, title: "iro2"}
            ], 
            text: [
                `The goal of IRO-3D is to characterize a novel 3D printing process called selective powder deposition through a machine called IRO-3D. 
                The characterization involves attempting to fine tune the machine so it can print with a variety of material powder, including glass and metal. 
                Once the machine is characterized and fully functional, it can cut the cost of printing solid metal and glass parts to around $1k.`
            ]
        },
        {
            title: "Turbine Printing",
            slides: [
                {url: turbine, title: "turbine"},
                {url: turbine2, title: "turbine2"},
                {url: turbine3, title: "turbine3"}
            ], 
            text: [
                `Goal: Using Big Blue to print large-scale turbines that “are otherwise un-machinable.” Due to some difficulties, this project is more about updating Big Blue, 
                our in-house large-scale 3D printer with a build space of approximately 1 m by 1 m.`,
                `Results: Our client came to us with this project since we have Big Blue, which is our custom-built 1m by 1m printer the club made for a previous project. 
                The team not only got to work with a graduate student working on his thesis but also tackled the difficulties of large-scale printing. 
                Gian, the team lead of the project, has expressed interest in a new project for the next year to create Big Blue 2.0, using what he and the team learned this year 
                to update the printer for future WOOF members. `
            ]
        },
        {
            title: "Voxel Printing",
            slides: [
                {url: voxel, title: "voxel"},
                {url: voxel2, title: "voxel2"}
            ], 
            text: [
                `Goal: Create a slicing software in MATLAB that can take in a DICOM file and slice it into the necessary layers for voxel printing using the Stratasys machine.`,
                `Results: The workflow for this project was extremely slow as the team needed permission and check offs from Stratasys every step of the way. 
                Despite this, the team was able to work with and be mentored by researches in the CLIMB lab. 
                By the end of the year, the team had created a software that successfully processed a 3D model of a cube for voxel printing. 
                The next step will be to test the software on more complex models. 
                This project had a large focus on programming skills but also granted the students to work with high tech printers. 
                CLIMB has expressed an interest in working with the students in the future which presents possibilities for the future of the club.`
            ]
        },
        {
            title: "Kidney Modeling",
            slides: [
                {url: kidney, title: "kidney"},
                {url: kidney2, title: "kidney2"},
                {url: kidney3, title: "kidney3"},
                {url: kidney4, title: "kidney4"}
            ], 
            text: [
                `Goal: Use 3D printing to create kidney models that can be imaged with medical ultrasound equipment. 
                Realistic and ultrasound-compatible kidney models could be used for medical education, training, or for development and testing of ultrasound-based therapy systems.`,
                `Results: In order to print out of a material that responds in a similar manner to a kidney, the team need to use a syringe printer. 
                Instead of heating up the plastic filament in the conventional 3D printing manner, the material is extruded out of a syringe by a plunger. 
                After much research and testing, the team felt that silicone would best mirror the properties of a kidney for ultrasounding purposes. 
                Using our club room and resources, the team has assembled a syringe printer and have received an STL for the kidney from the client. 
                Next, the team will start testing their design with ultrasound.`,
                `The client came to us because he had not been able to get a grant from the school for this project. 
                Our club presented an easy and accessible way for him as a faculty member at UW to pursue it. 
                In exchange, the team got valuable mentorship on a unique engineering project.`
            ]
        },
        {
            title: "Precious Plastics",
            slides: [
                {url: ppp, title: "preciousplastics"},
                {url: ppp2, title: "preciousplastics2"},
                {url: ppp3, title: "preciousplastics3"},
                {url: ppp4, title: "preciousplastics4"},
                {url: ppp5, title: "preciousplastics5"}
            ], 
            text: [
                `Goal: Design and print products that PPP can then sell at the bookstore after manufacturing them from recycled plastics. 
                We will be designing products that can be printed, as well as creating molds that can be used by the injection machine. The goal will be to have finished products by Earth day (April 20th) for PPP to display!`,
                `Results: Our client, Precious Plastics, moved a lot slower than we would have liked and only have two of the four machines required: The Shredder and the Extruder. 
                Since they still do not have the injection molder, the team was not able to make any products. 
                However, they have successfully made the prototypes and were in the process of designing the necessary molds by the end of the year. 
                PPP is getting us the funding for mold materials now, so that should be purchased and ready to go by the end of the quarter. 
                Next year the team will make the mold and they will use their new injection molder to make products.`
            ]
        },
        {
            title: "Advanced Printing",
            slides: [{url: printing, title: "advancedprinting"}],
            text: [
                `Goal: Finish the printers we built as a club Fall 2018. We will be teaching multiple topics especially about special optional parts. 
                Offered in a similar structure as a class with a once-a-week meeting where the members will focus on a different subcategory of 3D printing each week.`,   
                `Results: The team went over basic Solidworks design, G-Code, part inventory, and the Finders' extruder system. 
                We plan to continue to offer this internal course next year and hope to improve the overall experience from what we learned.`
            ]
        },
        {
            title: "Photogrammetry",
            slides: [
                {url: photogrammetry, title: "photogrammetry"},
                {url: photogrammetry2, title: "photogrammetry2"},
                {url: photogrammetry3, title: "photogrammetry3"},
                {url: photogrammetry4, title: "photogrammetry4"}
            ], 
            text: [
                `Goal: Design and build a device capable of taking photographs in a repeatable and accurate manner for use in photogrammetric analysis, the generation of a three-dimensional model of an object through a collection of photographs.`,
                `Results: The team successfully created a photogrammetry device. In the future they plan to continue to project to make a better, 2.0, version.  The project involved working with Arduino, basic hardware and tools, and imaging software. 
                The team also compiled what they learned about photogrammetry into an eighteen-page report. Three main points are summarized below.`,
                `Three important tricks to improve the overall quality of the generated model:`,
                ` • Specular reflective (shiny) surfaces are not desirable. Reflections change position with respect to the camera and confuse the photogrammetry software. Remedy this by spraying the model with a matte finish and avoid direct light sources. `,
                ` • Capturing as many perspectives of the model is desirable. Only so much data may be captured by rotating in a single lateral ring. 
                Changing the height and angle of the camera for several lateral rings captures essential perspective detail of the model and improves the fidelity of the generated model.`,
                ` • The photogrammetric analysis software uses all information in the images, including items in the background. For the most effective model generation, fill about 60% of the camera view with the model. 
                Items in the background provide useful information helpful to identifying camera location in 3D space.`
            ]
        },
        {
            title: "Volcanoes",
            slides: [
                {url: volcano, title: "volcano"},
                {url: volcano2, title: "volcano2"},
                {url: volcano3, title: "volcano3"},
                {url: volcano4, title: "volcano4"},
                {url: volcano5, title: "volcano5"}
            ],
            text: [
                `Goal: Work with Steve on his personal project of printing the topographical maps of the Northwest's five volcanos. 
                He showed them how to create 3D topo maps, how to use MeshMixer to manipulate the STL files, slice the files and how-to 3D print the files.`,
                `Results: Our team lead did an excellent good job with this project and Steve was happy with the results. 
                The team improved upon the original method designed by club members for the process to create several models that the club will show off at future workshops. 
                We also plan to continue to expand this project and see what other data can be used to create and print 3D models.`
            ]
        }
    ]
    
    return (
        <div className="Container">
            <Header/>
            <main className="MainContent" onLoad={scrollToTop()}>                
                <h1 className="Head Center">Current Projects</h1>
                {current.map((project, projectIndex) => (
                    <div className="Row">
                        <div className="RowSection" style={projectIndex % 2 === 0 ? {marginLeft: "auto"} : {marginRight: "auto"}}>
                            <Link className="Name Underline" to="/projects/project" state={{title: project.title, slides: project.slides, text: project.text}}>
                                <div><img className="Portrait Card" src={project.slides.length > 0 ? project.slides[0].url : null} alt={project.title + " Image"}/>{project.title}</div>
                            </Link>
                        </div>
                    </div>
                ))}
                {/* use when no images are available
                <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                    {current.map((project, projectIndex) => (
                            <Link className="Name Center Underline" to="/projects/project" state={{title: project.title, slides: project.slides, text: project.text}}>
                                <div>{project.title}</div>
                            </Link> 
                    ))}
                </div> */}
                <h1 className="Head Center">Past Projects</h1>
                {projects.map((project, projectIndex) => (
                    <div className="Row">
                        <div className="RowSection" style={projectIndex % 2 === 0 ? {marginLeft: "auto"} : {marginRight: "auto"}}>
                            <Link className="Name Underline" to="/projects/project" state={{title: project.title, slides: project.slides, text: project.text}}>
                                <div className="Card"><img className="Portrait" src={project.slides.length > 0 ? project.slides[0].url : null} alt={project.title + " Image"}/>{project.title}</div>
                            </Link>
                        </div>
                    </div>
                ))}
            </main>
            <Footer/>
        </div>
    );
}