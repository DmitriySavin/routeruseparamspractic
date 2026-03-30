import { Box } from "./Box";
import { useState, useEffect } from "react";
import { getInvoces } from "../data";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";


const NavItem = styled(NavLink)`
  padding: ${(p) => p.theme.space[3]}px;
  text-decoration: none;
  color: ${(p) => p.theme.colors.text};
  border-radius: 8px;

  &.active {
    background-color: ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.colors.white};
  }

  :hover:not(.active) {
    color: ${(p) => p.theme.colors.primary};
  }
`;

 const Invoces = () => {
  const [invoces, setInvoces] = useState([]);

  useEffect(() => {
    getInvoces().then(setInvoces);
  }, []);

  return (
    <Box display="flex">
      <Box
        as="aside"
        display="flex"
        flexDirection="column"
        p={3}
        borderRight="1px solid black"
      >
        {invoces.map(({ id }) => (
          <NavItem to={id} key={id}>
            {id}
          </NavItem>
        ))}
          </Box>
          <Outlet />
    </Box>
  );
};


export default Invoces