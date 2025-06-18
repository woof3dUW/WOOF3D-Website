"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { fetchOfficers, Officer } from "../firebase";
import Image from "next/image";

export default function OfficersPage() {
    // The list of officers to be displayed.
    const [officers, setOfficers] = useState<Officer[]>([]);

    // Runs on page start, fetches officers from Firebase.
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
                        <div className="GridItem !justify-start" key={officerIndex}>
                            <Image className="Portrait" src={officer.picture} alt={officer.name + " Image"} width={400} height={400}/>
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