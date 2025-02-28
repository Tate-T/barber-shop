
import { Header } from '../../components/Header/Header.jsx';
import {Hero} from '../../components/Hero/Hero.jsx'
import { About } from '../../components/About/About.jsx'
import { Prices } from '../../components/Prices/Prices.jsx';
import { Why } from "../../components/Why/Why.jsx";
import { Gallery } from '../../components/Gallery/Gallery.jsx';
import { Footer } from "../../components/Footer/Footer.jsx";
import { MobileMenu } from '../../components/MobileMenu/MobileMenu.jsx';

function MainPage() {
    
    return (
        <>
            <Header/>
            <main>
                <Hero/>
                <About/>
                <Prices/>
                <Why/>
                <Gallery/>
            </main>
            <Footer/>
            <MobileMenu/>
        </>
    )
}

export default MainPage



