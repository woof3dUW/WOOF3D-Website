import { useState } from "react";
import "./Sidebar.css";
import { useRouter } from 'next/navigation'; 

export default function Sidebar() {
    const [visible, setVisible] = useState(false);
    const router = useRouter();

    return (
        <>
            <div className="Dim" style={visible ? {opacity: "75%", display: "block"} : {width: "0px", display: "none"}}></div>
            <div className="Sidebar" style={visible ? {width: "75%"} : {width: "0px"}}>
                <div className="Close" onClick={() => setVisible(false)}>&times;</div>
                <div className="SideNavItem" onClick={() => router.push("/printers")}>Printers</div>
                {/* <div className="SideNavItem" onClick={() => router.push("/workshops")}>Workshops</div> */}
                <div className="SideNavItem" onClick={() => router.push("/projects")}>Projects</div>
                <div className="SideNavItem" onClick={() => router.push("/officers")}>Officers</div>
                <div className="SideNavItem" onClick={() => router.push("/officehours")}>Office Hours</div>
                <div className="SideNavItem" onClick={() => router.push("/filament")}>Filament</div>
            </div>
            <div  className="ThreeBars Unselectable" onClick={() => setVisible(true)}>&#9776;</div>
        </>
    );
}