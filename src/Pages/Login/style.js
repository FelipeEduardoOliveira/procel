import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  height: 100vh;
  /* background-image: url('https://myg3plataform.s3-sa-east-1.amazonaws.com/background.jpg'); */
  background-color: #000000db;
`;

export const ContainerLoad = styled.div`
position: absolute;
background-color: #9f9e9e66;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
`

export const FormContainer = styled.div`
 width: 400px;
 padding: 20px;
 @media (max-width: 400px) {
    width: 100%;
 }
`

export const DivisorInput = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
height: 45px;
margin: 10px 0;
color:#fff;
`

export const ForgotPassword = styled.label`
color: yellow;
text-decoration: underline;
cursor: pointer;
`

export const ContainerButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
`
export const ButtonLogin = styled.button`
cursor: pointer;
height: 100%;
    border: 1px solid yellow;
    background-color: transparent;
    color: #FFF;
    font-size: 30px;
    padding: 15px 45px;
    border-radius: 45px;

    &:hover{
      border: 1px solid #FFF;
    color: yellow;
    }
`

export const AlertContainer = styled.div`
 width: 400px;
 position: absolute;
 display: flex;
 justify-content: center;
 align-items: center;
 top: 100px;
 @media (max-width: 400px) {
    width: 90%;
 }
`

export const ImagemContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`
export const Imagem = styled.img`
 width: 400px;
 @media (max-width: 400px) {
    width: 100%;
 }
`