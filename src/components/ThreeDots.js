import { ThreeDots } from "react-loader-spinner"

export default function Loading(){
    return(
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
    )


}