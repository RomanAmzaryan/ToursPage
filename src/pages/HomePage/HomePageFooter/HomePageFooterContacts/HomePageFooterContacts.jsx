import "./HomePageFooterContacts.css"


const HomePageFooterContacts = () => {
    return (
        <div className="footer-contacts">
            <div className="contacts-header">
                <h1>Contacts</h1>
            </div>
            <div className="contacts-info">
                <div className="contacts-address">
                    <img src="/png/adress-icon.png" alt="" />
                    <p>Flat 20, Reynolds Neck, North <br />
                        Helenaville, FV77 8WS
                    </p>
                </div>
                <div className="contacts-phone">
                    <img src="/png/phone-icon.png" alt="" />
                    <p>+305 587-3407</p>
                </div>
                <div className="contacts-email">
                    <img src="/png/email-icon.png" alt="" />
                    <p>info@travio.com</p>
                </div>
            </div>
        </div>
    )
}



export default HomePageFooterContacts;