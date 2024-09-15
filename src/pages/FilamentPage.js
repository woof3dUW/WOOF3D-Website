import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./Page.css";

export const FilamentPage = () => {
    return (
        <div className="Container">
            <Header/>
            <main className="MainContent">
                <div className="Section">
                    <h1 className="Head">Filament Checkout</h1>
                    <div className="ButtonDiv"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdsVsz2Kro94-VpnYosUNd5y-Uj26H-qXaRmu570BNp1QZUEQ/viewform?pli=1&pli=1" className="Button" target="_blank" rel="noreferrer noopener">Checkout Form</a></div>
                    <p className="Text">All members who have paid the club fee have access to all of the club's filament.
                        However, members can check out a maximum of two filament rolls at a time. 
                    </p>
                    <p className="Text">Haven't paid the club fee yet? <a href="https://docs.google.com/forms/d/e/1FAIpQLSf8yugFeTvsDFzVgzXpk7UOm4lbAYiHEVELpiI2eQCwVMb2QQ/viewform?usp=sf_link" className="Link" target="_blank" rel="noreferrer noopener">Here</a> is 
                    the fee payment form, which puts your name on the list of paying members. To pay the fee, talk to an officer. Fees can be paid either through PayPal or with cash.
                    </p>
                </div>
                <div className="Section">
                    <h1 className="Head">Availability</h1>
                    <div><iframe className="Embed" title="filamentAvailability" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRWhR-g-NR1x7a7eRMpkzz9RuNA5HcMRO5s8k563ZIjT3f892DjTYb63KUA0d_n-mIB2HGDSUsmLGfA/pubhtml?gid=0&amp;single=true&amp;widget=false&amp;headers=false&amp;chrome=false&amp;range=A:J"></iframe></div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}