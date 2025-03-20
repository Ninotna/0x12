import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Zen from "../assets/icon/zen.svg";
import Swim from "../assets/icon/swim.svg";
import Bicycle from "../assets/icon/bicycle.svg";
import Dumbell from "../assets/icon/dumbell.svg";

// Styled Components
const AsideContainer = styled.aside`
  width: 120px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  position: relative;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 0;
  list-style: none;
`;

const NavItem = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  background-color: white;
  border-radius: 10px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary || "#E60000"};
  }

  &.active {
    background-color: rgb(247, 190, 198);
  }
`;

const CopyrightText = styled.p`
  color: white;
  transform: rotate(270deg);
  position: absolute;
  bottom: 105px;
  left: -17px;
  white-space: nowrap;
  font-size: 13px;
`;

export default function Aside() {
  return (
    <AsideContainer>
      <NavList>
        <NavItem to="/meditation">
          <img src={Zen} alt="Activité : relaxation" />
        </NavItem>
        <NavItem to="/swimming">
          <img src={Swim} alt="Activité : natation" />
        </NavItem>
        <NavItem to="/cycling">
          <img src={Bicycle} alt="Activité : cyclisme" />
        </NavItem>
        <NavItem to="/bodybuilding">
          <img src={Dumbell} alt="Activité : musculation" />
        </NavItem>
      </NavList>
      <CopyrightText>Copyright, SportSee 2020</CopyrightText>
    </AsideContainer>
  );
}
