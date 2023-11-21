import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { IoMdMail as Email} from "react-icons/io";
import { IoIosLock as Senha} from "react-icons/io";

import './Login.scss'

export default function Login() {

    const navigate = useNavigate();

    const [usuario, setUsuario] = useState({
        email: "",
        senha: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let users;
        let user;
        try {
            const response = await fetch("http://localhost:5000/usuarios");
            users = await response.json();

        } catch (error) {
            alert("Ocorreu um erro no processamento da sua solicitação!");
        }
        for (let x = 0; x < users.length; x++) {
            user = users[x];
            if (user.email == usuario.email && user.senha == usuario.senha) {
                alert("Login realizado com SUCESSO!")

                const tokenUser = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
                console.log(tokenUser);

                sessionStorage.setItem("token-user", tokenUser);
                sessionStorage.setItem("data-user", JSON.stringify(user));

                navigate("/");
                return;
            }
        }

        alert("Login ou senha incorretos!")
        setUsuario({
            email: "",
            senha: ""
        });
    }

    return (
        <div className="login-container">
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                        <div className="input-box">
                            <input type="email" name="email" id="idEmail" placeholder="Email" value={usuario.email} onChange={handleChange} />
                            <Email className="icon"/>
                        </div>
                        <div className="input-box">
                            <input type="password" name="senha" id="idSenha" placeholder="Senha" value={usuario.senha} onChange={handleChange} />
                            <Senha className="icon"/>
                        </div>
                        <div>
                            <button className="btn">LOGIN</button>
                        </div>
                </form>
            </div>
        </div>
    )
}
