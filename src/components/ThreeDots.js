import { ThreeDots } from "react-loader-spinner"
import styled from "styled-components"

export default function Loading(){
    return(
        <StyledDiv>
        <ThreeDots
            width="80"
            heigth="80"
            radius="9"
            arial-label="three-dots-loading"
            wrapperStyke={{}}
            wrapperClassName=""
            color="#FFFFFF"
            visible={true}
            text-align="center"
            />
        </StyledDiv>
    )


}

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`