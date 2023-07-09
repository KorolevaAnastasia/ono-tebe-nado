import "./Socials.css"

export default function Socials(){
    return (
        <ul className="social-list">
            <li className="social-list-item">
                <a className="social-link" href="https://www.youtube.com/">
                    <div className="social-icon social-icon_youtube"/>
                </a>
            </li>
            <li className="social-list-item">
                <a className="social-link" href="https://www.vk.com/">
                    <div className="social-icon social-icon_vk"/>
                </a>
            </li>
            <li className="social-list-item">
                <a className="social-link" href="https://ru.pinterest.com/">
                    <div className="social-icon social-icon_pinterest"/>
                </a>
            </li>
        </ul>
    );
}
