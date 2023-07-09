import "./Navigate.css";

export default function Navigate({isFooter}) {
    return (
        <nav className={`navigate ${isFooter ? 'navigate_footer' : ''}`}>
            <ul className={`navigate__list ${isFooter ? 'navigate__list_footer' : ''}`}>
                <li className="navigate__item">
                    <a className="navigate__item-link navigate__item-link_active" href="#main">главная</a>
                </li>
                <li className="navigate__item">
                    <a className="navigate__item-link" href="#lots">посмотреть лоты</a>
                </li>
                <li className="navigate__item">
                    <a className="navigate__item-link" href="#about">об аукционе</a>
                </li>
            </ul>
        </nav>
    )
}
