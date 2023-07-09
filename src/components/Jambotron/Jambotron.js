import "./Jambotron.css";

export default function Jambotron() {
    return (
        <section className="jambotron">
            <div className="overlay"></div>
            <h1 className="title">
                <p className="title__text title__text_left">оно</p>
                <p className="title__text title__text_center">тебе</p>
                <p className="title__text title__text_right">надо</p>
            </h1>
            <span className="subtitle">Аукцион вещей, в которые никто не верил</span>
            <a className="jambotron__button">Сделать ставку</a>
        </section>
    );
}
