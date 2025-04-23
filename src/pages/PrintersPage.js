import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./Page.css";
import entryareaprinters from "./images/entryareaprinters.jpg";
import workshopprinters from "./images/workshopprinters.jpg";
import prusaxl from "./images/prusaxl.jpg";

export const PrintersPage = () => {
    function scrollToTop() {
        window.scrollTo(0,0);
    }
    
    return (
        <div className="Container">
            <Header/>
            <main className="MainContent" onLoad={scrollToTop()}>
                <div className="Section" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <h1 className="Head Center">Club Printers</h1>
                    <div className="Text">WOOF3D currently owns 9 3D printers:</div>
                    <ul className="Text">
                        <li>6 Bambu Lab X1 Carbons*</li>
                        <li>3 Bambu Lab A1s</li>
                        <li>1 Prusa XL</li>
                    </ul>
                    <div className="Text">All printers are housed in The 8 in McMahon Hall, in either the entry area or the WOOF3D space in the workshop.</div>
                    <div style={{marginRight: "auto", marginBottom: "2rem"}}>* Funded by the Student Technology Fee</div>
                    <img className="Image" src={entryareaprinters} alt={"Entry Area Printers"}/>
                    <div className="Role" style={{marginBottom: "2rem"}}>3 Bambu Lab X1 Carbons and 2 Bambu Lab A1s in the entry area</div>
                    <img className="Image" src={workshopprinters} alt={"Workshop Printers"}/>
                    <div className="Role" style={{marginBottom: "2rem"}}>3 Bambu Lab X1 Carbons in the workshop</div>
                    <img className="Image" src={prusaxl} alt={"Prusa XL"}/>
                    <div className="Role" style={{marginBottom: "2rem"}}>Prusa XL in the workshop</div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}