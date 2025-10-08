"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function OfficeHoursPage() {
    return (
        <div className="Container">
            <Header />
            <main className="MainContent">
                <div className="Section">
                    <h1 className="Head">Office Hours</h1>
                    <p className="Text">Need help or advice with anything 3D printing related? Schedule office hours by sending an email to <a href="mailto:jlevin23@uw.edu" className="Link">jlevin23@uw.edu</a>.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
} 