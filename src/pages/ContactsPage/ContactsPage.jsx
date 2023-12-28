
import AddressPhoneEmail from './AddressPhoneEmail/AddressPhoneEmail';
import ContactSection from './ContactSection/ContactSection';
import './contactsPage.css'


const ContactsPage = () => {
    return (
        <div>
            <div className="contactHeader">
                <h1 className='contactH1'>Contacts</h1>
            </div>
            <AddressPhoneEmail/>
            <ContactSection/>
          
        </div>
    )
}

export default ContactsPage;