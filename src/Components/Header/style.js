import styled from "styled-components";

const ContainerHeader = styled.div`
  background-color: #fff;
  min-height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  margin: 0 20px;
  margin-top: 20px;
`;

const IconNavigate = styled.img`
  width: 30px;
  cursor: pointer;
`;
const UserContainerActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const ItemList = styled.div`
  padding: 0 10px;
`;
const ContainerNotification = styled.div`
  position: relative;
  padding: 5px 0;
`;
const BulletNotification = styled.div`
  width: 10px;
  height: 10px;
  position: absolute;
  right: 0;
  top: 10px;
  border-radius: 100%;
  background-color: red;
  display: ${(props) => (props.hasNotification ? "block" : "none")};
`;
const AvatarListMenu = styled.div`
  background-color: white;
  width: 130px;
  height: 170px;
  position: absolute;
  top: 85px;
  right: 30px;
  border: 1px solid black;
  cursor: default;
  display: ${props => props.showAvatarMenu ? 'flex' : 'none'};
  flex-direction: row;
  padding: 20px;
`;
const ItemAvatarListMenu = styled.li`
margin: 10px 0;
/* width: 100%; */
cursor: pointer;
font-size: 17px;
:hover{
  background-color: gold;

}
`

const ContainerAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin-left: 20px;
  background-color: springgreen;
  cursor: pointer;
  background-image: url(${(props) => props.Avatar_Icon});
  background-position: center;
  background-size: cover;
`;



export {
  ContainerHeader,
  IconNavigate,
  UserContainerActions,
  ItemList,
  ContainerNotification,
  BulletNotification,
  ContainerAvatar,
  AvatarListMenu,
  ItemAvatarListMenu
};
