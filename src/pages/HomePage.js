import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./Page.css";

export const HomePage = () => {
      return (
        <div className="Container">
            <Header/>
            <main className="MainContent">
                <div className="Banner">
                    <h1 className="BannerTextTop">Welcome to WOOF3D</h1>
                    <h1 className="BannerTextBottom">The 3D Printing Club at the University of Washington</h1>
                </div>
                <div className="Section">
                    <h1 className="Head">About the Club</h1>
                    <p className="Text">As the 3D printing club at UW, we provide a hub for anyone interested in 3D printing. 
                    Whether you're a beginner or an expert, we have something for everyone. Experience is not required, and neither is any time commitment.
                    </p>
                    <p className="Text">During Fall Quarter, we hold weekly workshops mostly aimed towards beginners. This includes everything from how to use a 
                        3D printer to how to 3D print textiles. Show up to as many as you want!
                    </p>
                    <p className="Text">During Winter and Spring Quarters we provide members with the opportunity to work on a larger 
                        scale 3D printing project with other members. Joining a team is not required, but it is a good way to get hands on 
                        experience with 3D printing and learn about hardware and software in the process. 
                        Check out the Projects tab for information on current and past projects!
                    </p>
                </div>
                <div className="Section">
                    <h1 className="Head">Cost</h1>
                    <p className="Text">Attending all workshops is completely free. There is a $25 fee to become a full fledged club member. 
                        This gives you access to unlimited filament, access to the club's printers, as well as free pizza at the end of each quarter at the club social.
                    </p>
                </div>
                <div className="Section">
                    <h1 className="Head">How to Join</h1>
                    <ol className="Text">
                        <li className="Step">Join the Discord Server</li>
                        <div className="StepDetails">This is where all communication and announcements take place. Click <a href="https://discord.gg/neKV9u38PV" className="Link" target="_blank" rel="noreferrer noopener">here</a> to join.</div>
                        <li className="Step">Fill out the Interest Form</li>
                        <div className="StepDetails">This helps us keep track of the club's scale. Click <a href="https://forms.gle/XueaaQsFAmZmDSgZ8" className="Link" target="_blank" rel="noreferrer noopener">here</a> to fill out the form.</div>
                        <li className="Step">Fill out the Fee Form (Optional)</li>
                        <div className="StepDetails">This puts your name down for paying the club fee, which gives you access to unlimited filament, access to the 
                            club printers and free pizza every quarter. Fees can be paid either through PayPal or by giving cash to an officer. Click <a href="https://discord.gg/neKV9u38PV" className="Link" target="_blank" rel="noreferrer noopener">here</a> to fill out the fee payment form.
                        </div>
                    </ol>
                </div>
                <div className="Section">
                    <h1 className="Head">Where are we?</h1>
                    <p className="Text">All club operations take place in McMahon Hall in North Campus.</p>
                    <iframe
                        title="McMahonMap"
                        width="700"
                        height="500"
                        frameborder="0"
                        referrerpolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCNgFy9uS2bSLkYBjubHqulgPEHCBnuU0w&q=4200+Little+Canoe+Channel+NE,Seattle,WA"
                        allowfullscreen>
                    </iframe>
                    <p className="Text">Workshops and other club meetings are held in the Pompeii Room on the basement floor on the North side of McMahon.</p>
                    <div className="PompeiiMapImg"/>
                    <p className="Text">The club printers and filament are in The 8 makerspace on the basement floor on the South side of McMahon</p>
                    <div className="The8MapImg"/>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
