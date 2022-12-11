import styled from "styled-components";


export const ContainerDashboard = styled.div`

display: flex;
flex-direction: row;
`
export const LeftContainer = styled.div`
width: ${props => props.openMenuList ? '280px' : '0px'};
height: 100vh;
background-color: aqua;
transition: all 0.5s ease;

`
export const RightContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`
export const AplicationHeader = styled.div`
/* grid-area: 1 / 2 / 2 / 12; */
`
export const AplicationSidebarMenu = styled.div`
/* grid-area: 1 / 1 / 6 / 2;
height: 100vh; */
`
export const AplicationSectionDashboard = styled.div`
padding: 20px;
`

