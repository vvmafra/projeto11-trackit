import styled from "styled-components"
import CompleteLogo from "../images/logo-completa.svg"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import Loading from "../components/ThreeDots"


export default function Register() {
    const [disable, setDisable] = useState(false)
    const navigate = useNavigate()
    const [form, setForm] = useState({ email: "", name: "", image: "", password: "" })

    function handleChange(event) {
        setForm({...form, [event.target.name]: event.target.value})
      }
    
      function register(e) {
        e.preventDefault()
    
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
        const body = {...form}
    
        const promise = axios.post(URL, body)
        promise.then(res => navigate("/"))
        promise.catch(err => {
            alert(err.response.data.message)
            setDisable(disable)
        })
        setDisable(!disable)

      }


    return(
        <RegisterContainer>
            <img src={CompleteLogo}></img>

            <InputsContainer>
                <form onSubmit={register}>
                    <Input
                    type="text"
                    placeholder="email"
                    name={"email"}
                    value={form.email}
                    onChange={handleChange}
                    required
                    disabled={disable}
                    data-test="email-input"
                    />

                    <Input
                    type="password"
                    placeholder="senha"
                    name={"password"}
                    value={form.password}
                    onChange={handleChange}
                    required
                    disabled={disable}
                    data-test="password-input"
                    />

                    <Input 
                    type="text"
                    placeholder="nome"
                    name={"name"}
                    value={form.name}
                    onChange={handleChange}
                    required
                    disabled={disable}
                    data-test="user-name-input"
                    />

                    <Input 
                    type="text"
                    placeholder="foto"
                    name={"image"}
                    value={form.image}
                    onChange={handleChange}
                    required
                    disabled={disable}
                    data-test="user-image-input"
                    />

                    <button type="submit"
                    disabled={disable}
                    data-test="signup-btn">
                        {disable ? <Loading/> : "Cadastrar"}
                    </button>
                </form>
            </InputsContainer>

            <Link to="/"
            data-test="login-link">
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
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const Input = styled.input`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    color: #666666;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`