import styled from "styled-components"
import CompleteLogo from "../images/logo-completa.svg"
import { Link } from "react-router-dom"

export default function Register() {

    return(
        <RegisterContainer>
            <img src={CompleteLogo}></img>

            <InputsContainer>
                <input placeholder="email"></input>
                <input placeholder="senha"></input>
                <input placeholder="nome"></input>
                <input placeholder="foto"></input>
                <button>Cadastrar</button>
            </InputsContainer>

            <Link to="/">
                <p>Já tem uma conta? Faça login!</p>
            </Link>

        </RegisterContainer>


    )
}

const RegisterContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-top: 70px;
        width: 180px;
        height: 180px;
    }

    p {
        margin-top: 25px;
        text-decoration-line: underline;
        color: #52B6FF;
        font-size: 14px;
        font-family: 'Lexend Deca', sans-serif;
    }
`

const InputsContainer = styled.div`
    margin-top: 33px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 275px;
    
    
    button {
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 5px;
        border: none;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 21px;
        color: #FFFFFF;
        box-sizing: border-box;
        padding: 8px;
        text-align: center;
    }

`