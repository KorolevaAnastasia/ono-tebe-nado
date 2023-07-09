import "./About.css"

export default function About(){
    return (
        <section className="about" id="about">
            <div className="about__logo"/>
            <div className="about__column">
                <h2 className="about__title">Об аукционе</h2>
                <p className="about__text">Здесь вы не встретите очередное пафосное собрание невероятно дорогого антиквариата.
                    Наши лоты вообще не должны были попасть ни на один аукцион. Потому что кому нужен дневник девочки-подростка или картина,
                    которую может нарисовать даже ребёнок? Кому нужны все эти странные вещи, созданные любителями?
                </p>
                <p className="about__text">
                        Слишком сложные или, наоборот, слишком простые. Опережающие своё время. В пух и прах растерзанные критиками.
                        Непринятые и непонятые. Когда-то они казались просто неудачными. Но, несмотря на критику, кажущуюся простоту или сложность,
                        сейчас без этих лотов невозможно представить современную культуру. Когда в эти вещи не верил никто, продолжали верить их создатели.
                        И сейчас эти лоты стали культовыми.
                </p>
            </div>
        </section>
    );
}
