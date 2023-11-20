import {useLocation, useNavigate } from "react-router-dom";
import './Cabecalho.scss'

export default function Cabecalho() {

    const rotaAtual = useLocation();
    const navigate = useNavigate();

    const obJUser = JSON.parse(sessionStorage.getItem("data-user"));

    const handleLogout = () => {
        sessionStorage.removeItem("token-user");
        sessionStorage.removeItem("data-user");
        navigate("/login");
    }

    return (
        <>
            <header className="cabecalho">
                Cabecalho
                <div>
                    <button onClick={handleLogout} className={sessionStorage.getItem("token-user") ? "btnLogout" : "btn"}>Logout</button>
                </div>
                <div className="welcome">
                    <p>{obJUser != null ? `Olá ${obJUser.nome}` : ""}</p>
                    <p>{obJUser != null ? obJUser.email : ""}</p>
                </div>
            </header>
        </>
    );
}
