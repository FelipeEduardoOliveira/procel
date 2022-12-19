import styled from "styled-components";

export const ContainerItemMenu = styled.div`

border-bottom: 1px solid #ffffff;
padding: 20px 0;
padding-left: 10px;
&:hover{
    background-color: #000000ac;
    #Paragraph{
        color: #dfdbdb;
        cursor: pointer;

        &:active{
            color: #ffffffbc;
        }
    }
    
}
`

export const TitleContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
export const Paragraph = styled.p`
color: #ffffff;
font-size: 16px;
font-weight: 600;
padding: 5px 0;
cursor: pointer;
`
export const SubmenuList = styled.div`

ul p{
    border-bottom: 1px solid #bebebe;
    padding-left: 10px;
    cursor: pointer;
}
`