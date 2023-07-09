import "./Contacts.css";

export default function Contacts() {
    return (
        <address className="contacts">
            <a className="contact contact_active" href="tel:+99995555555">+9 999 555 5555</a>
            <a className="contact contact_active" href="info@sobaka.ge">info@sobaka.ge</a>
            <p className="contact">наб. Принсенграхт 263-265, Амстердам</p>
        </address>
    )
}
