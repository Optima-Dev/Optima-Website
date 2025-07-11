import styled from 'styled-components';
import { colors } from '../constants/Colors';
import WhiteLogo from "../assets/logo-white.png";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <FooterStyling>
      <div>
        <div>
          <img src={WhiteLogo} alt="Optima Logo" />
        </div>
        <ul>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/community">Community</Link>
          <Link to="/be-a-volunteer">Be A Volunteer</Link>
        </ul>
        <p>© All rights reserved to Optima 2025</p>
      </div>
    </FooterStyling>
  );
}

export default Footer;

const FooterStyling = styled.footer`
  background-color: ${colors.mainColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;

  > div {
    width: 1400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    img {
      max-width: 120px;
      object-fit: contain;
    }

    p {
      color: white;
      font-size: 22px;
      text-align: center;
      border-top: 1px solid ${colors.white500};
      padding-top: 20px;
      width: 100%;
    }
  }

  ul {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    justify-content: center;

    a {
      color: white;
      text-decoration: none;
      font-size: 22px;
      font-weight: 500;
      transition: color 0.3s ease;
      cursor: pointer;
      
      &:hover {
        color: ${colors.secondryColor};
      }
    }
  }
`;