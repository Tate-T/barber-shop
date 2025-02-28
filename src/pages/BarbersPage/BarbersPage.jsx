import { Header } from '../../components/Header/Header.jsx';
import { Barbers } from '../../components/Barbers/Barbers.jsx';
import { Footer } from "../../components/Footer/Footer.jsx";

function BarbersPage() {
    return(
        <>
            <Header/>
            <main>
                <Barbers/>
            </main>
            <Footer/>
        </>
    )
}

export default BarbersPage
