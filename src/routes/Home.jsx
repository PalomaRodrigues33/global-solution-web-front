import Informacoes from "../components/Informacoes/Informacoes"
import Introducao from "../components/Introducao/Introducao"
import Vantagens from "../components/Vantagens/Vantagens"

export default function Home() {

    if (sessionStorage.getItem("token-user")) {
        return (
            <div>
                <Introducao />
                <Informacoes />
                <Vantagens />
            </div>
        )
    } else {
        window.location = "/login";

    }
}