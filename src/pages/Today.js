import styled from "styled-components"
import Header from "../components/Header"
import Bottom from "../components/Bottom"

export default function Today() {

    return (
        <>
            <Header />

            <CoreToday>
                <p>Segunda, 15/03</p>

                <FinishedHabits>
                    Nenhum hábito concluído ainda
                </FinishedHabits>

                <ListHabits>

                    <Habit>
                        <Text>
                            <p>Let 1 capitulo de livro</p>

                            <span>Sequência atual: 4 dias</span>
                            <span>Seu recorde: 3 dias</span>
                        </Text>

                        <ion-icon name="checkbox"></ion-icon>
                    </Habit>

                </ListHabits>

            </CoreToday>

            <Bottom />
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

const ListHabits = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
`

const Habit = styled.div`
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    box-sizing: border-box;
    
    p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        color: #666666;
        font-size: 20px;
        padding-top: 0px;
        padding-left: 0px;
        padding-bottom: 15px;
    }

    span {
        font-family: 'Lexend Deca', sans-serif;
        color: #666666;
        font-size: 13px;
    }

    ion-icon {
        width: 69px;
        height: 69px;
        color: #EBEBEB;
    }
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
`