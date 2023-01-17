import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderSt = styled.header`
  height: 50px;
  width: 1400px;
  margin: 0 auto;
`;

export const Section = styled.section`
  -webkit-box-shadow: 0px 10px 4px -7px rgba(0, 0, 0, 0.48);
  -moz-box-shadow: 0px 10px 4px -7px rgba(0, 0, 0, 0.48);
  box-shadow: 0px 10px 4px -7px rgba(0, 0, 0, 0.48);
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 120px;
`;

export const NavLinkSt = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-size: 18px;
  font-weight: 600;

  &.active {
    opacity: 0.5;
  }
`;
