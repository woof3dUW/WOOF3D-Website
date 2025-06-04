"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function PrintersPage() {
    return (
        <div className="Container">
            <Header />
            <main className="MainContent">
                <div className="Section" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <h1 className="Head Center">Club Printers</h1>
                    <div className="Text">WOOF3D currently owns 9 3D printers:</div>
                    <ul className="Text">
                        <li>6 Bambu Lab X1 Carbons*</li>
                        <li>3 Bambu Lab A1s</li>
                        <li>1 Prusa XL</li>
                    </ul>
                    <div className="Text">All printers are housed in The 8 in McMahon Hall, in either the entry area or the WOOF3D space in the workshop.
                        <div className="mr-auto mb-8 text-sm">*Funded by the Student Technology Fee</div>
                    </div>
                    <Image className="Image" src="/printers/entryareaprinters.jpg" width={600} height={400} alt="Entry Area Printers"/>
                    <div className="Role" style={{marginBottom: "2rem"}}>3 Bambu Lab X1 Carbons and 2 Bambu Lab A1s in the entry area</div>
                    <Image className="Image" src="/printers/workshopprinters.jpg" width={600} height={400} alt="Workshop Printers"/>
                    <div className="Role" style={{marginBottom: "2rem"}}>3 Bambu Lab X1 Carbons in the workshop</div>
                    <Image className="Image" src="/printers/prusaxl.jpg" width={600} height={400} alt="Prusa XL"/>
                    <div className="Role" style={{marginBottom: "2rem"}}>Prusa XL in the workshop</div>
                </div>
            </main>
            <Footer />
        </div>
    );
} 