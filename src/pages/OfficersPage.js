
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./Page.css";
import vash from "./images/vash.jpg"
import joshua from "./images/joshua.jpg"

export const OfficersPage = () => {
    const officers = [
        {name: "Vash Mavrinac", role: "Software Technical Lead", picture: vash,
        bio: `Hello, my name is Vash and I'm a second year majoring in Computer Science. Last year, I worked on the Illumination project. 
        I especially enjoy the artistic aspect of 3D printing, such as making figures or swords. I hope to see you at the club!`},
        {name: "Joshua Levin", role: "Education Co-Lead", picture: joshua,
        bio: `Hi, I'm Joshua Levin. I'm a sophomore studying electrical and computer engineering. Come join the club!`}
    ]
    
    return (
        <div className="Container">
            <Header/>
            <main className="MainContent">
                <h1 className="Head Center">Meet Our Officers</h1>
                {officers.map((officer, officerIndex) => (
                    <div className="Row">
                        <div className="RowSection" style={officerIndex % 2 === 0 ? {marginLeft: "auto"} : {marginRight: "auto"}}>
                            <img className="Portrait" src={officer.picture} alt={officer.name}/>
                            <div className="Name">{officer.name}</div>
                            <div className="Role">{officer.role}</div>
                            <p className="OfficerText">{officer.bio}</p>
                        </div>
                    </div>
                ))}
            </main>
            <Footer/>
        </div>
    );
}