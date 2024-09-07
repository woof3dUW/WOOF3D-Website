import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./Page.css";

export const OfficeHoursPage = () => {
    return (
        <div className="Container">
            <Header/>
            <main className="MainContent">
                <div className="Section">
                    <h1 className="Head">Office Hours</h1>
                    <p className="Text">Need help or advice with anything 3D printing related? Stop by office hours and one of our officers will be happy to help!</p>
                    <p className="Text">Reminder: Check the club Discord for office hour cancellations before showing up.</p>
                    <iframe className="Embed" title="calendar" src="https://calendar.google.com/calendar/embed?height=700&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%23B39DDB&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=WEEK&showNav=0&showDate=0&src=N2UyZTdhZWMzZDE2MDBhMDY4YWMyNjRlN2E1OWQxMmZlNTc2ZDk5OGQ5ODFiZjUzOTY4ZTlhODk3NzQwMGYyN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23B39DDB" frameborder="0"></iframe>
                </div>
            </main>
            <Footer/>
        </div>
    );
}