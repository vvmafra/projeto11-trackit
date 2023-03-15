import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    input {
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        color: #666666;
        box-sizing: border-box;
        padding: 10px;
    }

    input::placeholder {
        color: #DBDBDB;
    }


`

export default GlobalStyle