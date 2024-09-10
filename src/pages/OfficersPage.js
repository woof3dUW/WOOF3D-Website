
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./Page.css";
import vash from "./images/vash.jpg";
import joshua from "./images/joshua.jpg";
import rory from "./images/rory.png";
import giang from "./images/giang.jpg";
import rhiannon from "./images/rhiannon.jpg";

export const OfficersPage = () => {
    const officers = [
        {
            name: "Nathan Bursch", role: "President", picture: null, bio: ``
        },
        {
            name: "Duy", role: "Project Manager", picture: null, bio: ``
        },
        {
            name: "Kyle Wong", role: "Treasurer/Social Media Management", picture: null, bio: ``
        },
        {
            name: "Vash Mavrinac", role: "Software Technical Lead", picture: vash, bio: `Hello, my name is Vash and I'm a second year majoring in Computer Science. 
            Last year, I worked on the Illumination project. I especially enjoy the artistic aspect of 3D printing, such as making figures or swords. I hope to see you at the club!`
        },
        {
            name: "Giang Pham", role: "Workspace Manager", picture: giang, bio: `Hi, I'm Giang - Junior in Mechanical Engineering. I was in Drones project last year, 
            and many more this year! I'm also interested in utilizing 3D printing for cosplay props, miniature weapons, etc. See you at WOOF3D!`
        },
        {
            name: "Rory Barger", role: "Workspace Manager", picture: rory, bio: `My name is Rory Barger and I a Workspace Manager for Woof 3D. This is 3rd year being of Woof 3D, 
            and I previously was an Education Officer last year. I am a senior Mechanical Engineering student with a specialization in Biomechanics, 
            and I am interested in working with medical devices, manufacturing, and innovation. I enjoy the process and potential of 3D printing, as the options are limitless.`
        },
        {
            name: "Marcus Drienyovszky", role: "Education Co-Lead", picture: null, bio: ``
        },
        {
            name: "Joshua Levin", role: "Education Co-Lead", picture: joshua, bio: `Hi, I'm Joshua Levin. I'm a sophomore studying electrical and computer engineering. 
            Come join the club!`
        },
        {
            name: "Rhiannon Garnier", role: "Communications Director", picture: rhiannon, bio: `Hi! I’m Rhiannon and I am a sophomore in electrical and computer engineering. 
            I love sailing and definitely want to 3D print some model boats. I am looking forward to a great year with the club!`
        }
    ]
    
    return (
        <div className="Container">
            <Header/>
            <main className="MainContent">
                <h1 className="Head Center">Meet Our Officers</h1>
                {officers.map((officer, officerIndex) => (
                    <div className="Row">
                        <div className="RowSection" style={officerIndex % 2 === 0 ? {marginLeft: "auto"} : {marginRight: "auto"}}>
                            <img className="Portrait" src={officer.picture} alt={officer.name + " Image"}/>
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