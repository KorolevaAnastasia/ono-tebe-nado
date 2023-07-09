import "./Lots.css"
import Card from "../Card/Card";

export default function Lots(){
    const cards = [
        {
            id: 1,
            title: "Фильм режиссёра, который  бросил киношколу",
            description: "Не просто бросил, а ушёл с первой лекции. Какой была бы ваша ставка, если бы вы не знали, что режиссёр — Пол Томас Андерсон?",
            imgClass: 'card_type_film'
        },
        {
            id: 2,
            title: "Книга, где описан один скучный день из жизни рекламного агента",
            description: "Объёмом почти в тысячу страниц. Иногда без знаков препинания и с переходами на древнеанглийский. В ней одновременно рассказывается о 16 июня 1904 года и об истории литературы, начиная с античных времён. И это всё накладывается на эпическую поэму Гомера. Сколько бы вы поставили на «Улисса» Джеймса Джойса?",
            imgClass: 'card_type_book'
        },
        {
            id: 3,
            title: "Картина, которую повторит даже 5-летний сын маминой подруги",
            description: "Ну действительно, там линия, тут кружочек, а здесь и вовсе что-то похожее на инфузорию-туфельку. Никаких полей, лесов, котиков… Сколько бы вы на такое поставили, если бы не знали, что это — одна из революционных работ Кандинского?",
            imgClass: 'card_type_picture'
        }
    ]
    return (
        <section className="lots" id="lots">
           <h2 className="lots__heading">Лоты</h2>
            <ul className="lots__card-list">
                {cards.map((card) => (
                    <Card
                    key={card.id}
                    title={card.title}
                    description={card.description}
                    imgClass={card.imgClass}
                    />
                ))}
            </ul>
            <span className="more">посмотреть больше</span>
        </section>
    );
}
