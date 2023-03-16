import styled from "styled-components"
import CompleteLogo from "../images/logo-completa.svg"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import Loading from "../components/ThreeDots"
import { useContext } from "react"
import DataContext from "../DataContext"
import axios from "axios"


export default function Home({ token, setToken}) {
    const [disabled, setDisabled] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const { setImage } = useContext(DataContext)

    

    function login(e){
        e.preventDefault()

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
        const body = { email, password }

        const promise = axios.post(URL, body)
        promise.then(res => {
            console.log(res.data)
            setToken(res.data.token)
            setImage(res.data.image)
            navigate("/hoje")
        })
        promise.catch(err => alert(err.responde.data.message))
    }

    if (token === "") {
        setDisabled(true)
    }


    return(
        <HomeContainer>
            <img src={CompleteLogo}></img>
            <form onSubmit={login}>
                <InputsContainer>
                    <input 
                    placeholder="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    ></input>

                    <input 
                    placeholder="senha"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    ></input>

                    <button 
                    type="submit"
                    disabled={disabled}
                    >
                        {disabled ? <Loading/> : "Entrar"}
                        </button>
                </InputsContainer>
            </form>

            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>

        </HomeContainer>


    )
}

const HomeContainer = styled.div`
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
    height: 160px;
    
    
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

const StyledForm = styled.form`



`