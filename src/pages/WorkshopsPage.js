import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./Page.css";

export const WorkshopsPage = () => {
    function scrollToTop() {
        window.scrollTo(0,0);
    }

    const list = [
        {
            name: "Intro to 3D Printing",
            date: "Oct 9, 6-7pm",
            link: "https://docs.google.com/presentation/d/1uMVHTSTMhlI5dFhTHnME7oqV5RpubpNKpriMSyN_DPQ/edit#slide=id.g2b4e4f69af7_0_3160"
        }, 
        {
            name: "Intro to CAD",
            date: "Oct 16, 5-6pm",
            link: "https://docs.google.com/presentation/d/1_vX72TM_TvEVHDvz_rW0p670tvd_18gTHykXOToss44/edit#slide=id.g2b4e4f69af7_0_3160"
        },
        {
            name: "Design Considerations for 3D Printing",
            date: "Oct 23, 5-6pm",
            link: "https://docs.google.com/presentation/d/1qhvUFcWAe31mPEButZt8EjAxWiHJ8li0grAywC_iJCU/edit#slide=id.g1ce369c80a8_0_590"
        },
        {
            name: "Laser Engraving",
            date: "Nov 6, 5-6pm",
            link: "https://docs.google.com/presentation/d/1hr__5F74fOsgkGYntQPEfWmTKv0bvqPDeegtPCSP1lw/edit#slide=id.g295a84519b9_2_968"
        },
        {
            name: "Casting and Lithophanes",
            date: "Nov 13, 5-6pm",
            link: "https://docs.google.com/presentation/d/1K-7KEg1H4HerRnCo5hVsLkSkxm-lh5A1zgeCJ7Gslxg/edit#slide=id.p"
        },
        {
            name: "Resin Printing",
            date: "Jan",
            link: ""
        },
    ]
    
    return (
        <div className="Container">
            <Header/>
            <main className="MainContent">
                <h1 className="Head Center">Workshop Schedule</h1>
                <div style={{width:"100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                    <table>
                        <tr className="Text Data">
                            <th>Date</th>
                            <th>Name</th>
                        </tr>
                        {list.map((workshop) => (
                            <tr className="Text">
                                <td className="Data">{workshop.date}</td>
                                <td className="Data">{workshop.name} {workshop.link === "" ? "" : <a>(<a href={workshop.link} className="Link" target="_blank" rel="noreferrer noopener">slides</a>)</a>}</td>
                            </tr>
                        ))}
                    </table>
                </div>
                <div className="Section">
                    <p className="Text Center"><i>All workshops are held in the Pompeii Room in McMahon Hall</i></p>
                </div>
            </main>
            <Footer/>
        </div>
    )
}