import "./Header.css";
import Contacts from "../Contacts/Contacts";
import Navigate from "../Navigate/Navigate";

export default function Header() {
    return (
        <header className="header">
            <Navigate isFooter={false}/>
            <div className="header__logo"/>
            <Contacts/>
        </header>
    )
}
