
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./Page.css";
import vash from "./images/vash.jpg";
import joshua from "./images/joshua.jpg";
import rory from "./images/rory.png";
import giang from "./images/giang.jpg";
import nathan from "./images/nathan.jpg";
import duy from "./images/duy.png";
import kyle from "./images/kyle.jpeg";
import marcus from "./images/marcus.jpeg";

export const OfficersPage = () => {
    function scrollToTop() {
        window.scrollTo(0,0);
    }
    
    const officers = [
        {
            name: "Nathan Bursch", role: "President", picture: nathan, bio: `My name is Nathan; I’m a senior in Mechanical Engineering: Mechatronics. 
            This is my fourth year in Woof3D and my first year as club president. I spend most of my free time 3D modeling or 3D printing, 
            so if you have any questions about these topics, feel free to reach out!`
        },
        {
            name: "Duy", role: "Project Manager", picture: duy, bio: `I'm Duy a Senior in Mechanical Engineering with interest in specifically medical engineering. 
            I've worked in research and industry in the fields of medicine and aerospace respectively. My experiences lie all over the engineering world so feel free to 
            reach out for help! If I can't help you, I guarantee that I can find someone who can.`
        },
        {
            name: "Kyle Wong", role: "Treasurer / Social Media Manager", picture: kyle, bio: `Hello everyone I'm Kyle, treasurer of WOOF3D for this year. 
            I am a senior studying mechanical engineering. Last year I was a part of the Illumination team project designing and creating lighting solutions. 
            A few of my hobbies include skating, cars and going to the gym.`
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
            name: "Rory Barger", role: "Workspace Manager", picture: rory, bio: `My name is Rory Barger and I am a Workspace Manager for Woof 3D. This is my 3rd year at Woof 3D, 
            and I previously was an Education Officer last year. I am a senior Mechanical Engineering student with a specialization in Biomechanics, 
            and I am interested in working with medical devices, manufacturing, and innovation. I enjoy the process and potential of 3D printing, as the options are limitless.`
        },
        {
            name: "Marcus Drienyovszky", role: "Education Co-Lead", picture: marcus, bio: `Hey! I'm Marcus, a Junior studying Mechanical Engineering. This is my third year in WOOF3D, 
            and my second year as an officer. I am excited to help create and lead workshops this year and learn a lot in the process! 
`
        },
        {
            name: "Joshua Levin", role: "Education Co-Lead", picture: joshua, bio: `Hi, I'm Joshua Levin. I'm a sophomore studying electrical and computer engineering. 
            Come join the club!`
        },
    ]
    
    return (
        <div className="Container">
            <Header/>
            <main className="MainContent" onLoad={scrollToTop()}>
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