import styled from "styled-components";
import personLogo from "../images/person-logo.jpg";
import { useContext } from "react"
import DataContext from "../DataContext"


export default function Header() {
    const { image } = useContext(DataContext)

    return (
        <div data-test="header">
        <HeaderContainer>
            <p>TrackIt</p>
            <img src={image} />
        </HeaderContainer>
        </div>
    )
}

const HeaderContainer = styled.div`
    position: fixed;
    width: 100vw;
    top: 0;
    left: 0;
    background-color: #126BA5;
    height: 70px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 18px;

    img {
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }

    p {
        font-family: 'Playball', cursive;
        font-size: 39px;
        color: white;
    }
`