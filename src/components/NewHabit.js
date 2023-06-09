import { useState } from "react";
import styled from "styled-components";

export default function NewHabit() {
    const weekdays = [{dayName: "D", day: 1}, 
    {dayName: "S", day: 2},
    {dayName: "T", day: 3},
    {dayName: "Q", day: 4},
    {dayName: "Q", day: 5},
    {dayName: "S", day: 6},
    {dayName: "S", day: 7}]
    const [selectedDays, setSelectedDays] = useState([])

    console.log(selectedDays)


    function clickWeekday(day){
        setSelectedDays((prevDays) => {
            if (prevDays.includes(day)) {
            
                return prevDays.filter((prevDays) => prevDays !== day);
                
            }
            else {
                return [...prevDays, day];
            }
        })
    }

    return (
        <NewHabitContainer>
            <input placeholder="nome do hábito"></input>

            <WeekDays
                
            >
            {weekdays.map((l) => (
                <button
                key={l.day}
                onClick={() => clickWeekday(l.day)}
                selected={selectedDays.includes(l.day)}>{l.dayName}</button>
            ))}
            </WeekDays>
            <Buttons>
                <ButtonCancel>
                    Cancelar
                </ButtonCancel>

                <ButtonSave>
                    Salvar
                </ButtonSave>

            </Buttons>

            
        </NewHabitContainer>
    )
}

const NewHabitContainer = styled.div`
    background-color: #FFFFFF;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    border-radius: 5px;
`
const WeekDays = styled.div`
    display: flex;
    flex-direction: row;
    padding-right: 60px;
    padding-top: 10px;
    padding-bottom: 20px;

    button {
        width: 30px;
        height: 30px;
        background-color: ${props => props.selected ? "#CFCFCF" : "#FFFFFF"};
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        color: ${props => props.selected ? "#FFFFFF" : "#DBDBDB"}; 
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-right: 5px;
    }
`

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 110px;
`


const ButtonCancel = styled.button`
        width: 84px;
        height: 35px;
        background-color: #FFFFFF;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 16px;
        color: #52B6FF;
        border: none;
        border-radius: 5px;
        margin: 10px;
`

const ButtonSave = styled.button`
        width: 84px;
        height: 35px;
        background-color: #52B6FF;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 16px;
        color: #FFFFFF;
        border: none;
        border-radius: 5px;
        margin: 10px;
`
