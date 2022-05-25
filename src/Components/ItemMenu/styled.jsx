import styled from "styled-components";

export const ContainerItemMenu = styled.div`
border-bottom: 1px solid #17191e;
padding-left: 10px;
padding-bottom: 5px;
padding-top: 5px;
&:hover{
    #Paragraph{
        color: #ffffff;
        cursor: pointer;

        &:active{
            color: #ffffffbc;
        }
    }
    
}
`
export const Paragraph = styled.p`
color: #1b1e24;
font-size: 16px;
font-weight: 600;
`