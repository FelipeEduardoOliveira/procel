import styled from "styled-components";

export const ContainerContentMain = styled.div`
background-color: #f2f2f2;
height: 100%;
display: flex;
flex-direction: column;
`
export const ContainerButtons = styled.div`
background-color: #f2f2f2;
width: 100%;
display: flex;
flex-direction: row;
justify-content: ${props => props.justifyContent ? props.justifyContent : 'space-around'};
align-items: center;
margin-bottom: 10px;

`

export const DivContainerButton = styled.div`



    display: flex;
    width: 300px;
    justify-content: ${props => props.lado ? props.lado : 'end'};



`