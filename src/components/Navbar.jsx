import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { colors } from '../constants/Colors';
import styled from 'styled-components';
import Logo from '../assets/logo.png';


const Navbar = () => {

  const [style, setStyle] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('/be-a-volunteer')) {
      setStyle(true);
    } else {
      if(style) {
        setStyle(false);
      }
    }
  }, [location]);

  return (
    <Nav>
      <Ul style={style ? { boxShadow: `0 1px 20px ${colors.secondryColor}` } : {}}>
        <li>
          <NavLink to="/">
            <img src={Logo} alt="OPTIMA" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/community">Community</NavLink>
        </li>
        <li>
          <NavLink to="/be-a-volunteer" className="be-a-volunteer">Be a Volunteer</NavLink>
        </li>
      </Ul>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
  padding-top: 20px;
`;

const Ul = styled.ul`
  background-color: ${colors.mainColor};
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
  gap: 70px;
  border-radius: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }

  img {
    max-width: 140px;
  }

  a {
    text-decoration: none;
    color: ${colors.white500};
    transition: all 0.3s ease;
  }

  a:hover, a.active {
    color: ${colors.secondryColor};
  }

  .be-a-volunteer {
    padding: 8px 12px;
    color: ${colors.mainColor};
    background-color: ${colors.white500};
    border-radius: 20px;
  }

  .be-a-volunteer:hover, .be-a-volunteer.active {
    color: ${colors.mainColor};
    background-color: ${colors.secondryColor};
  }
`;