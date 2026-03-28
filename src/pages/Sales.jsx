import { Box } from "../components/Box";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const navItems = [
  { href: "analytics", text: "Analytics" },
  { href: "invoces", text: "Invoces" },
  { href: "deposits", text: "Deposits" },
];

const NavItem = styled(NavLink)`
  padding: ${(p) => p.theme.space[2]}px;
  color: ${(p) => p.theme.colors.text};
  text-decoration: none;

  &.active {
    color: ${(p) => p.theme.colors.primary};
  }
`;

export const Sales = () => {
  return (
    <Box as="main" display="flex" flexDirection="column">
      <Box as="header" borderBottom="1px solid red" p={4}>
        <Box as="ul" display="flex">
          {navItems.map(({ href, text }) => (
            <NavItem to={href} key={href}>
              {text}
            </NavItem>
          ))}
        </Box>
      </Box>
      <Outlet />
    </Box>
  );
};
