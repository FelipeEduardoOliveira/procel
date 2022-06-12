import styled from "styled-components";

export const TextAreaContainerMain = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-bottom: 10px;

`

export const LabelTextArea = styled.label`
    color: #333;
    font-weight: 600;
    font-size: 13px;
    font-family: Arial,Helvetica,sans-serif;
    padding-bottom: 8px;
`

export const TextAreaContainer = styled.textarea`
:invalid{
    border: 1px solid #c00e0e;
}
border: 1px solid #D5D5D5;
    padding: 10px 0px;
    padding-left: 10px;
    border-radius: 5px;
    outline: none;
    `