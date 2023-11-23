import { useNavigate } from 'react-router-dom';
import { VscSignOut as Sair} from "react-icons/vsc";

import './Cabecalho.scss';

export default function Cabecalho() {
    const navigate = useNavigate();

    const obJUser = JSON.parse(sessionStorage.getItem('data-user'));

    const handleLogout = () => {
        sessionStorage.removeItem('token-user');
        sessionStorage.removeItem('data-user');
        navigate('/login');
    };

    return (
        <>
            <header className="cabecalho">
                {obJUser ? (
                    <>
                        <div className="welcome">
                            <p>{`Olá ${obJUser.nome}!`}</p>
                            <p>Conectado como: {obJUser.email}</p>
                        </div>
                        <div>
                            <button onClick={handleLogout} className="btnLogout">
                                <Sair/>
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="welcome">
                        <p>Olá!</p>
                        <p>Realize o login para acessar a página principal</p>
                    </div>
                )}
            </header>
        </>
    );
}
