import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./Page.css";
import entryareaprinters from "./images/entryareaprinters.jpg";
import workshopprinters from "./images/workshopprinters.jpg";

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
                    </ul>
                    <div className="Text">All printers are housed in The 8 in McMahon Hall, in either the entry area or the WOOF3D space in the workshop.</div>
                    <div style={{marginRight: "auto", marginBottom: "2rem"}}>* Sponsored by STF</div>
                    <img className="Image" src={entryareaprinters} alt={"Entry Area Printers"}/>
                    <div className="Role" style={{marginBottom: "2rem"}}>Entry Area Printers: 3 Bambu Lab X1 Carbons, 2 Bambu Lab A1s</div>
                    <img className="Image" src={workshopprinters} alt={"Workshop Printers"}/>
                    <div className="Role">Workshop Printers: 3 Bambu Lab X1 Carbons</div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}