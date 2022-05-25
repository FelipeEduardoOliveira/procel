import styled from "styled-components";


export const ContainerHeaderTitle = styled.div`
display: flex;
align-items: center;
height: 100%;
background-color: #f2f2f2;
`

export const ContainerHeaderLetter = styled.h1`
font-weight: 600;
letter-spacing: 1px;
text-transform: lowercase;
::first-letter{
    
text-transform: capitalize;
}
`