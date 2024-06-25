import "./Footer.css";

export const Footer = () => {
    return (
        <>
            <footer className="Footer">
                <h4 className="ContactUsText">Contact Us</h4>
                <div className="LeftText">
                    <div>Email:</div>
                    <div>Address:</div>
                    <div>Discord:</div>
                </div>
                <div className="RightText">
                    <div><a href="mailto:woof3d@uw.edu" className="Link">woof3d@uw.edu</a></div>
                    <div><a href="https://www.google.com/maps/place/McMahon+Hall+(MCM)/@47.6583482,-122.3045768,18.46z/data=!4m15!1m8!3m7!1s0x5490148dce60fa2d:0x76876ed01e536f5c!2s4200+Little+Canoe+Channel+NE,+Seattle,+WA+98105!3b1!8m2!3d47.6581145!4d-122.3041795!16s%2Fg%2F11csgyc_0d!3m5!1s0x5490148dcd92b9f7:0x15a4369ea02e2673!8m2!3d47.6582055!4d-122.3036302!16s%2Fg%2F1pp2vf72j?entry=ttu" 
                        className="Link" target="_blank" rel="noreferrer noopener">4200 Little Canoe Channel NE, Seattle, WA 98195</a></div>
                    <div><a href="https://discord.gg/neKV9u38PV" className="Link" target="_blank" rel="noreferrer noopener">discord.gg/neKV9u38PV</a></div>
                </div>
            </footer>
        </>
    )
}