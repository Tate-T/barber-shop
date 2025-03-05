import { Header } from '../../components/Header/Header.jsx';
import { Footer } from "../../components/Footer/Footer.jsx";
import { Hero } from '../../components/Hero/Hero.jsx';
import { About } from '../../components/About/About.jsx';
function AboutPage() {

    return (
        <>
            <Header />
            <Hero />
            <main>
                <About />
            </main>
            <Footer />
        </>
    )
}
export default AboutPage;