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
width: 100%;
@media(max-width: 645px){
    width: 100%;
}
`
export const FilterContainerInputSepareted = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
`
export const FilterContainerInputSepareted__div = styled.div`
display: flex;
width: ${props => props.width ? props.width : '48%'};

`
export const CheckboxContentInput = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
margin-top: -5px;
padding: 0 20px;
`

