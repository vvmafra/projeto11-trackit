import styled from "styled-components";
import { Link } from "react-router-dom";


export default function Bottom() {
    return (
        <BottomContainer>
            <Link to="/habitos" style={{ textDecoration: 'none' }}
            data-test="habit-link" >
                <div>
                    Hábitos
                </div>
            </Link>

            <Link to="/hoje" style={{ textDecoration: 'none' }}
            data-test="today-link">
                <span>
                    Hoje
                </span>
            </Link>

            <Link to="/historico" style={{ textDecoration: 'none' }}
            data-test="history-link">
                <div>
                    Histórico
                </div>
            </Link>

        </BottomContainer>


    )
}

const BottomContainer = styled.div`
    position: fixed;
    width: 100vw;
    bottom: 0;
    left: 0;
    background-color: #FFFFFF;
    height: 70px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 18px;
    font-family: 'Lexend Deca', sans-serif;

    div {
        color: #52B6FF;
    }
    
    span {
        color: #52B6FF; /*mudar*/
        }
`