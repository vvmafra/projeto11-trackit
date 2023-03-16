import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});


export const DataProvider = ({children}) => {
    const [image, setImage] = useState("")
    return(


        <DataContext.Provider value={{

            image, setImage
        }}>

            {children}
        </DataContext.Provider>
    )
}

export default DataContext;