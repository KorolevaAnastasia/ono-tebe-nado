import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Jambotron from "../Jambotron/Jambotron";
import About from "../About/About";
import Lots from "../Lots/Lots";

import "./Main.css";

export default function Main() {
    return (
        <>
            <Header/>
            <main className="page">
                <Jambotron/>
                <Lots/>
                <About/>
            </main>
            <Footer/>
        </>
    );
}
