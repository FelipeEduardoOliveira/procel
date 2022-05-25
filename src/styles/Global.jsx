import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows:  repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const Sidebar = styled.div`
  grid-area: 1 / 1 / 6 / 2;
  background-color: blue;
`;
export const Header = styled.div`
  grid-area: 1 / 2 / 2 / 6;
  background-color: gold;
  margin-left: 10px;
`;

export const Content = styled.div`
  grid-area: 2 / 2 / 6 / 6;
  background-color: red;
  margin-left: 10px;
  /* overflow: scroll; */
`;
