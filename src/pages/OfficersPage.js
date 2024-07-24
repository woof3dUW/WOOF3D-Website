
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./Page.css";
import vash from "./images/vash.jpg"
import joshua from "./images/joshua.jpg"

export const OfficersPage = () => {
    return (
        <div className="Container">
            <Header/>
            <main className="MainContent">
                <h1 className="Head Center">Meet Our Officers</h1>
                <div className="Row">
                    <div className="RowSection">
                        <img className="Portrait" src={vash} alt="Vash Portrait"/>
                        <div className="Name">Vash Mavrinac</div>
                        <div className="Role">Software Technical Lead</div>
                        <p className="OfficerText">Hello, my name is Vash and I'm a second year majoring in Computer Science. Last year, I worked on the Illumination project. 
                            I especially enjoy the artistic aspect of 3D printing, such as making figures or swords. I hope to see you at the club!
                        </p>
                    </div>
                    <div className="RowSection">
                        <img className="Portrait" src={joshua} alt="Joshua Portrait"/>
                        <div className="Name">Joshua Levin</div>
                        <div className="Role">Education Co-Lead</div>
                        <p className="OfficerText">Hi, I'm Joshua Levin. I'm a sophomore studying electrical and computer engineering. Come join the club!</p>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}