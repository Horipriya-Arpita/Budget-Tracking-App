import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../Hooks/ThemeProvider'

const NavbarItem = ({ children , onClick}) => {
  const { theme } = useTheme();
  
  return (
    <StyledNavItem theme={theme} onClick={onClick}>
      {children}
    </StyledNavItem>
  );
};

const StyledNavItem = styled.li`
  padding: 10px 15px;
  border-radius: 30px;
  background: ${({ theme }) => theme.navbar.navItemBg};
  font-weight: 600;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.3s;
  cursor: pointer;
  list-style-type: none;

  &:hover {
    background: ${({ theme }) => theme.navbar.navItemHoverBg};
    transform: translateY(-3px);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  }
`;

export default NavbarItem;
