import styled from "styled-components";

export const ContainerCard = styled.div`
  position: relative;
  padding: 20px;
  height: auto;
  background-color: white;
  border-radius: 7px;
  :hover{
    box-shadow: 0 0 7px 2px #34dae3;
    cursor: pointer;
  }
`;
export const HeaderCard = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid #dbdbdb;
  padding: 5px 0;
`;
export const BodyCard = styled.section`
  margin: 10px 0;
`;
export const ButtonContainerCard = styled.footer`
  margin: 5px 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlagActive = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 75px;
  height: 30px;
  background-color: green;
  border-top-right-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  `;


export const Title = styled.h1`
font-size: 26px
`
export const Description = styled.span`
color: #686868;
/* font-size: 18px; */
font-weight: 700;
`
export const Subtitle = styled.h4`
/* font-size: 19px; */
margin: 5px 0;
font-weight: 700;
color: #000;
`
export const Button =  styled.button`

`