
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import "./Page.css";
import volcano from "./images/volcano.jpg";
import volcano2 from "./images/volcano2.jpg";
import volcano3 from "./images/volcano3.jpg";
import volcano4 from "./images/volcano4.jpg";
import volcano5 from "./images/volcano5.jpg";
import photogrammetry from "./images/photogrammetry.jpg";
import photogrammetry2 from "./images/photogrammetry2.png";
import photogrammetry3 from "./images/photogrammetry3.png";
import photogrammetry4 from "./images/photogrammetry4.jpg";
import ppp from "./images/ppp.png";
import ppp2 from "./images/ppp2.jpg";
import ppp3 from "./images/ppp3.jpg";
import ppp4 from "./images/ppp4.png";
import ppp5 from "./images/ppp5.jpg";
import printing from "./images/printing.jpg";
import kidney from "./images/kidney.png";
import kidney2 from "./images/kidney2.jpg";
import kidney3 from "./images/kidney3.png";
import kidney4 from "./images/kidney4.png";
import voxel from "./images/voxel.png";
import voxel2 from "./images/voxel2.png";
import turbine from "./images/turbine.jpg";
import turbine2 from "./images/turbine2.jpg";
import turbine3 from "./images/turbine3.jpg";
import iro from "./images/iro.jpg";
import iro2 from "./images/iro2.jpg";
import mediumblue from "./images/mediumblue.jpg";
import mediumblue2 from "./images/mediumblue2.jpg";
import mediumblue3 from "./images/mediumblue3.jpg";
import mediumblue4 from "./images/mediumblue4.jpg";
import fossil from "./images/fossil.jpg";
import fossil2 from "./images/fossil2.jpg";
import fossil3 from "./images/fossil3.jpg";
import fossil4 from "./images/fossil4.jpg";
import droneteamone from "./images/droneteamone.jpg";
import droneteamone2 from "./images/droneteamone2.jpg";
import droneteamone3 from "./images/droneteamone3.jpg";
import droneteamtwo from "./images/droneteamtwo.jpg";
import droneteamtwo2 from "./images/droneteamtwo2.jpg"
import casting from "./images/casting.jpg";
import casting2 from "./images/casting2.jpg";
import casting3 from "./images/casting3.jpg";
import casting4 from "./images/casting4.jpg";
import rcvehicle from "./images/rcvehicle.jpg";
import rcvehicle2 from "./images/rcvehicle2.jpg";
import rcvehicle3 from "./images/rcvehicle3.jpg";
import rcvehicle4 from "./images/rcvehicle4.jpg";
import iss from "./images/iss.png";
import iss2 from "./images/iss2.jpg";
import iss3 from "./images/iss3.jpg";

export const ProjectsPage = () => {    
    function scrollToTop() {
        window.scrollTo(0,0);
    }
    
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
                `The casting project explored a diverse use case of 3D-printing and digital fabrication to convert 3D-printed prototypes 
                to physical aluminum-casted objects. The goal was to design a model, sand or investment cast it with molten aluminum, 
                and post-process it to form a durable and everlasting piece.`
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
                <h1 className="Head Center">Past Projects</h1>
                {projects.map((project, projectIndex) => (
                    <div className="Row">
                        <div className="RowSection" style={projectIndex % 2 === 0 ? {marginLeft: "auto"} : {marginRight: "auto"}}>
                            <Link className="Name" to="/projects/project" state={{title: project.title, slides: project.slides, text: project.text}}>
                                <div><img className="Portrait" src={project.slides.length > 0 ? project.slides[0].url : null} alt={project.title + " Image"}/>{project.title}</div>
                            </Link>
                        </div>
                    </div>
                ))}
            </main>
            <Footer/>
        </div>
    );
}