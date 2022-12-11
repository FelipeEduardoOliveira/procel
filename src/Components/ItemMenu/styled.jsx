import styled from "styled-components";

export const ContainerItemMenu = styled.div`
border-bottom: 1px solid #ffffff;

padding-left: 10px;
padding-bottom: 5px;
padding-top: 5px;
&:hover{
    #Paragraph{
        color: #dfdbdb;
        cursor: pointer;

        &:active{
            color: #ffffffbc;
        }
    }
    
}
`
export const Paragraph = styled.p`
color: #ffffff;
font-size: 16px;
font-weight: 600;
padding: 5px 0;
`