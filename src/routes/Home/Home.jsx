import Informacoes from "../../components/Informacoes/Informacoes"
import Introducao from "../../components/Introducao/Introducao"
import Vantagens from "../../components/Vantagens/Vantagens"
import './Home.scss';

export default function Home() {

    if (sessionStorage.getItem("token-user")) {
        return (
            <div className="container">
                <div className="home-container">
                    <Introducao />
                    <Informacoes />
                    <Vantagens />
                </div>
            </div>
        )
    } else {
        window.location = "/login";

    }
}