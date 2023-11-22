import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import "./Cadastro.scss"

export default function Cadastro() {

    const navigate = useNavigate();

    const [msgStatus, setMsgStatus] = useState("");
    
    const [usuario,setUsuario] = useState({
        nome:"",
        email: "",
        senha: ""
    })

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setUsuario({...usuario,[name]:value});
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/usuarios",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(usuario)
            });

            if(response.ok){
                setUsuario({
                    nome:"",
                    email:"",
                    senha:""
                });

                setMsgStatus("Cadastro realizado com sucesso!");

                setTimeout(()=>{
                    navigate("/login");
                },5000);

            }
            
        } catch (error) {
            console.error(error);
            setMsgStatus("Ocorreu um erro ao tentar realizar o registro!");
        }

    }

  return (
    <div>
        <h2>{msgStatus}</h2>

        <div className="cadastro-container">
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <h1>Cadastrar</h1>
                        <div className="input-box">
                            <input type="text" name="nome" id="idNome" placeholder="Digite seu nome." value={usuario.nome} onChange={handleChange}/>
                        </div>
                      <div className="input-box">
                            <input type="email" name="email" id="idEmail" placeholder="Digite seu email." value={usuario.email} onChange={handleChange}/>
                        </div>
                      <div className="input-box">
                            <input type="password" name="senha" id="idSenha" placeholder="Digite sua senha." value={usuario.senha} onChange={handleChange}/>
                        </div>
                        <div>
                            <button className="btn">CADASTRAR</button>
                        </div>
                        <div className="login">
                            <p>Se você já é registrado. <Link to="/login">CLIQUE AQUI</Link></p>
                        </div>
                </form>
            </div>
          </div>
    </div>
  )
}
