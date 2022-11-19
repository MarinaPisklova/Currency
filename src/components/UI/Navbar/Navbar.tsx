import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  text-shadow:
    1px 1px white,
    2px 2px #4172e7;
  color: #333;
`

const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  &:hover {
    color: #4172e7;
    text-decoration: none; 
  }
  &.active {
    color: #4172e7;
  }
  &.active:after {
    content: '';
    display: block;
    height: 3px;
    background: #4172e7;
  }
`

const StyledLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`

const StyledNavbar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 15%);
  z-index: 10;
`

function Navbar() {
  return (
    <StyledNavbar>
      <H1>CurrenciesConverter</H1>
      <StyledLinks>
        <StyledLink to="/converter">Конвертер</StyledLink>
        <StyledLink to="/currency">Курсы валют</StyledLink>
      </StyledLinks>
    </StyledNavbar>
  )
}

export default Navbar;