import styled from "styled-components";

export const ContainerContent = styled.div`
background-color: #f2f2f2;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
overflow: scroll;
`
export const ContainerButtons = styled.div`
background-color: #f2f2f2;
height: 100%;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`
export const SaveButton = styled.button`
background-color: #95b75d;
border: 1px solid #95b75d;
height: 30px;
width: 40%;
color: white;
`
export const CancelButton = styled.button`
background-color: #fe970a;
border: 1px solid #fe970a;
height: 30px;
width: 40%;
color: white;
`