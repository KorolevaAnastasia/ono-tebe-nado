import "./Card.css"

export default function Card({title, description, imgClass}){
    return (
        <>
            <li className={`card ${imgClass}`}>
                <div className="overlay"/>
                <h3 className="card__title">{title}</h3>
                <p className="card__description">{description}</p>
            </li>
        </>
    );
}
