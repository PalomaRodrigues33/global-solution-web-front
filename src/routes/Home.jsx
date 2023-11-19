import Informacoes from "../components/Informacoes/Informacoes"
import Introducao from "../components/Introducao/Introducao"
import Vantagens from "../components/Vantagens/Vantagens"

function Home() {

    return (
        <>
            <div>
                <Introducao/>
                <Informacoes/>
                <Vantagens/>
            </div>
        </>
    )
}

export default Home