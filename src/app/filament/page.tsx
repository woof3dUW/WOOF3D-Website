import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function FilamentPage() {
    return (
        <div className="Container">
            <Header/>
            <main className="MainContent">
                <div className="Section">
                    <h1 className="Head">Filament Checkout</h1>
                    <div className="ButtonDiv"><a href="https://forms.gle/stgn2hyCwRNGDv6QA" className="Button" target="_blank" rel="noreferrer noopener">Checkout Form</a></div>
                    <p className="Text">All members who have paid the club fee have access to all of the club&apos;s filament.
                        However, members can check out a maximum of two filament rolls at a time. 
                    </p>
                    <p className="Text">Haven&apos;t paid the club fee yet? <a href="https://docs.google.com/forms/d/e/1FAIpQLSf8yugFeTvsDFzVgzXpk7UOm4lbAYiHEVELpiI2eQCwVMb2QQ/viewform?usp=sf_link" className="Link" target="_blank" rel="noreferrer noopener">Here</a> is 
                    the fee payment form, which puts your name on the list of paying members. To pay the fee, talk to an officer. Fees can be paid either through PayPal or with cash.
                    </p>
                </div>
                <div className="Section" >
                    <h1 className="Head">Availability</h1>
                    <iframe style={{borderRadius: 0}} className="Embed" title="filamentAvailability" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQv0E2l_nvgBviN5-IgCxDoIh71c-5BNBDJ1UoKXCiYt8OPFrF6kctSfBoLCKSxISMiDfaUOGRKjGXX/pubhtml?gid=559153624&amp;single=true&amp;widget=false&amp;headers=false&amp;chrome=false"></iframe>
                </div>
            </main>
            <Footer/>
        </div>
    );
}