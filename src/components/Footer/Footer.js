import Navigate from "../Navigate/Navigate";
import Contacts from "../Contacts/Contacts";
import Socials from "../Socials/Socials";
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <Contacts/>
            <Navigate isFooter={true}/>
            <Socials/>
        </footer>
    )
}
