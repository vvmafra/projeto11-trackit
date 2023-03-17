import styled from "styled-components"
import Header from "../components/Header"
import Bottom from "../components/Bottom"
import NewHabit from "../components/NewHabit"

export default function Habits() {

    return(
        <>
        <Header data-test="header"/>
        <CoreHabits>
            <ContainerTop>
                <p>Meus hábitos</p>
                <button>+</button>
            </ContainerTop>
            <NewHabit/>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </CoreHabits>
        <Bottom/>
        </>
    )
}

const CoreHabits = styled.div`
    background-color: #DBDBDB;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        padding: 30px 40px;
    }
`

const ContainerTop = styled.div`
    box-sizing: border-box;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 90px;
    padding-left: 40px;
    padding-right: 40px;
    font-family: 'Lexend Deca', sans-serif;
    color: #126BA5;
    font-size: 23px;
    margin-bottom: 20px;
    p {
        padding: 0px 0px;
    }

    button {
        width: 40px;
        height: 35px;
        background-color: #52B6FF;
        color: white;
        border-radius: 5px;
        font-size: 27px;
        border: none;
    }
`