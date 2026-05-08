import {FaUser, FaLock} from "react-icons/fa";
import { useState } from "react";
import "./Login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        alert("Enviando os dados: " + username + " - " + password)
    };

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Acesse o sistema</h1>
            <p className="subtitle">
                Entre com suas credenciais para continuar
            </p>
            <div className="input-field">
                <input type="email" placeholder="E-mail"/>
                <FaUser className="icon"/>
            </div>

            <div className="input-field">
                <input type="password" placeholder="Senha"/>
                <FaLock className="icon"/>
            </div>

            <div className="recall-forget">
                <label className="custom-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Lembre de mim
                </label>
                <a href="a">Esqueceu a senha?</a>
            </div>

            <button>Entrar</button>

            <div className="signup-link">
                <p>
                    Não tem uma conta? <a href="a">Registrar</a>
                </p>
            </div>

        </form>
    </div>
  )
}

export default Login
