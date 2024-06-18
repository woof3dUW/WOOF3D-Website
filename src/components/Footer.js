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
                    <div>woof3d@uw.edu</div>
                    <div>4200 Whitman Ct NE, Seattle, WA 98195</div>
                    <a href="https://discord.gg/neKV9u38PV" className="DiscordLink" target="_blank" rel="noreferrer noopener">discord.gg/neKV9u38PV</a>
                </div>
            </footer>
        </>
    )
}