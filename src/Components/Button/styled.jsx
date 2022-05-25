
import styled from "styled-components"

export const ButtonContainer = styled.button`
background-color: ${props => props.color ? props.color : 'silver'};
border: 1px solid ${props => props.color ? props.color : 'silver'};
height: 30px;
width: 40%;
margin: 0 10px;
color: ${props => props.colorLetter ? props.colorLetter : 'white'};
cursor: pointer;
`