import styled from "styled-components"
import Header from "../components/Header"
import Bottom from "../components/Bottom"

export default function Today() {

    return(
        <>
        <Header/>
        
        <CoreToday>
            <p>
                Segunda, 15/03
            </p>
            <FinishedHabits>
                Nenhum hábito concluído ainda
            </FinishedHabits>
        
        </CoreToday>

        <Bottom/>
        </>
    )
}

const CoreToday = styled.div`
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
`

const FinishedHabits = styled.div`
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        color: #BABABA;
        padding-top: 10px;
        padding-left: 40px;
`