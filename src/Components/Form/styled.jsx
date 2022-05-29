import styled from "styled-components";

export const ContainerForm = styled.div`
display: flex;
justify-content: space-between;
padding: 0 10px;

overflow-x: scroll;
::-webkit-scrollbar{
    display: none;
}
@media(max-width: 645px){
    flex-direction: column;
}
`

export const FieldContainerInput = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 48%;
@media(max-width: 645px){
    width: 100%;
}
`
export const FieldContainerDoubleInput = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
`

export const Teste = styled.div`
display: flex;
width: 45%;
`
