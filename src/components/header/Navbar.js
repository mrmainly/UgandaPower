import React from "react";
import styled from "styled-components";
import { Text } from "../../styled";
import { Link, BrowserRouter as Router } from "react-router-dom";
const NavbarMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;
const NavbarList = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
`;
const Logo = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #000000;
  margin-right: 400px;
  margin-left: 20px;
`;

const Navbar = () => {
  return (
    <NavbarMain>
      <Logo>InEducation</Logo>
      <NavbarList>
        <Link to="/Courses">Курсы</Link>
        <Link to="/MyCourses">Мои курсы</Link>
        <Link to="/LogOut">Войти</Link>
      </NavbarList>
    </NavbarMain>
  );
};

export default Navbar;
