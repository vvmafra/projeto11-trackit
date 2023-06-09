import styled from "styled-components"
import Header from "../components/Header"
import Bottom from "../components/Bottom"

export default function Historic() {

    return(
        <>
        <Header data-test="header"/>

        <CoreHistoric>
        <p>Histórico</p>
        <span>Em breve você poderá ver o histórico dos seus hábitos aqui!</span>
        </CoreHistoric>
                


        <Bottom data-test="menu">
        </Bottom>
        </>
    )
}

const CoreHistoric = styled.div`
     background-color: #DBDBDB;
    height: 100vh;
    display: flex;
    flex-direction: column;

    p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        color: #126BA5;
        font-size: 23px;
        padding-top: 100px;
        padding-left: 40px;
    }

    span {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        color: #666666;
        padding-left: 40px;
        margin-top: 20px;
    }
`