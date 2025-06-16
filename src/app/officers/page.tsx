"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { fetchOfficers, Officer } from "../firebase";
// import { upload } from "@vercel/blob/client";
import Image from "next/image";

const officers = [
    {
        name: "Nathan Bursch", role: "President", picture: "/officers/nathan.jpg", bio: `My name is Nathan; I'm a senior in Mechanical Engineering: Mechatronics. 
        This is my fourth year in Woof3D and my first year as club president. I spend most of my free time 3D modeling or 3D printing, 
        so if you have any questions about these topics, feel free to reach out!`
    },
    {
        name: "Duy", role: "Project Manager", picture: "/officers/duy.png", bio: `I'm Duy a Senior in Mechanical Engineering with interest in specifically medical engineering. 
        I've worked in research and industry in the fields of medicine and aerospace respectively. My experiences lie all over the engineering world so feel free to 
        reach out for help! If I can't help you, I guarantee that I can find someone who can.`
    },
    {
        name: "Kyle Wong", role: "Treasurer / Social Media Manager", picture: "/officers/kyle.jpeg", bio: `Hello everyone I'm Kyle, treasurer of WOOF3D for this year. 
        I am a senior studying mechanical engineering. Last year I was a part of the Illumination team project designing and creating lighting solutions. 
        A few of my hobbies include skating, cars and going to the gym.`
    },
    {
        name: "Vash Mavrinac", role: "Software Technical Lead", picture: "/officers/vash.jpg", bio: `Hello, my name is Vash and I'm a second year majoring in Computer Science. 
        Last year, I worked on the Illumination project. I especially enjoy the artistic aspect of 3D printing, such as making figures or swords. I hope to see you at the club!`
    },
    {
        name: "Giang Pham", role: "Workspace Manager", picture: "/officers/giang.jpg", bio: `Hi, I'm Giang - Junior in Mechanical Engineering. I was in Drones project last year, 
        and many more this year! I'm also interested in utilizing 3D printing for cosplay props, miniature weapons, etc. See you at WOOF3D!`
    },
    {
        name: "Rory Barger", role: "Workspace Manager", picture: "/officers/rory.png", bio: `My name is Rory Barger and I am a Workspace Manager for Woof 3D. This is my 3rd year at Woof 3D, 
        and I previously was an Education Officer last year. I am a senior Mechanical Engineering student with a specialization in Biomechanics, 
        and I am interested in working with medical devices, manufacturing, and innovation. I enjoy the process and potential of 3D printing, as the options are limitless.`
    },
    {
        name: "Marcus Drienyovszky", role: "Education Co-Lead", picture: "/officers/marcus.jpeg", bio: `Hey! I'm Marcus, a Junior studying Mechanical Engineering. This is my third year in WOOF3D, 
        and my second year as an officer. I am excited to help create and lead workshops this year and learn a lot in the process! 
`
    },
    {
        name: "Joshua Levin", role: "Education Co-Lead", picture: "/officers/joshua.jpg", bio: `Hi, I'm Joshua Levin. I'm a sophomore studying electrical and computer engineering. 
        Come join the club!`
    },
];

// async function AddOfficers() {
//     officers.forEach(async (officer, officerIndex) => {
//         if (officerIndex === 4) {
//             let url: string = "";
//             const imageStream = (await fetch(officer.picture)).body;
//             if (imageStream) {
//                 const blob = await upload(officer.picture, imageStream, {access: "public", handleUploadUrl: "/admin/upload"});
//                 url = blob.url;
//                 console.log("blob url: " + blob.url);
//             }
//             console.log("starting add officer");
//             await addOfficer(officer.name, officer.role, url, officer.bio, officerIndex + 1);
//         }
//     });
// }

export default function OfficersPage() {
    const [officers, setOfficers] = useState<Officer[]>([]);

    useEffect(() => {
        try {
            fetchOfficers().then((offs) => {
                if (offs) {
                    setOfficers(offs);
                }
            });
        } catch (error) {
            alert(error);
        }
    }, []);

    return (
        <div className="Container">
            <Header />
            <main className="MainContent">
                <h1 className="Head Center">Meet Our Officers</h1>
                <div className="Grid">
                    {officers.map((officer, officerIndex) => (
                        <div className="GridItem" key={officerIndex}>
                            <Image className="Portrait" src={officer.picture} alt={officer.name + " Image"}/>
                            <div className="Name">{officer.name}</div>
                            <div className="Role">{officer.role}</div>
                            <p className="OfficerText">{officer.bio}</p>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
} 