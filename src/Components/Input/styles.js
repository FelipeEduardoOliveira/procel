import styled  from "styled-components";



export const ContainerInput = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin: 10px 0px;
width: 100%;
background-color: white;
border: 1px solid ;
height: 40px;
border-radius: 10px;
`

export const InputMain = styled.input`
border: none;
outline: none;
padding-left: 20px;
font-size: 23px;
width: 100%;
`
export const Imagem = styled.img`
width: 25px;
padding-right: 10px;
`

export const ConntainerNewInput = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 100%;
`
export const MySpan = styled.span`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: ${props => props.error ? '#ff4646' : '#fff' };

`

export const MyNewInput = styled.input`
 font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid ${props => props.error ? '#ff4646' : '#fff' };
  outline: 0;
  font-size: 1.3rem;
  color: #fff;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  /* &&:invalid{
    border-bottom: 2px solid #ff4646 
  } */

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~${MySpan} {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  :focus{
    ~${MySpan} {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #fff ;
    font-weight:700;    
  }
  padding-bottom: 6px;  
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, #fff, #9b9b9b );
  /* border-image: linear-gradient(to right, #11998e ,#38ef7d); */
  border-image-slice: 1;
  }

`


