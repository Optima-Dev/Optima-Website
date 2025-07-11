import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/Colors';
import BannerImage from '../../assets/about/banner.png';

const Banner = () => {
  return (
    <Div>
      <div className="bg">
        <img src={BannerImage} alt="banner image" />
      </div>
      <h1>About <br /> <span>Us</span></h1>
      <p>
        Optima is a mobile and web-based platform created to empower
        individuals with vision impairments by offering real-time support 
        through cutting-edge technology and compassionate human connection. 
        Our mission is to build a supportive, inclusive community where no one 
        feels left out due to their disability.
      </p>

      <p className='bottom'>
        Driven by empathy and innovation, we provide features like secure video
        calling with volunteers, AI-generated photo descriptions, and full voice-
        command navigation , all completely free.
        <br />
        Our team believes that accessibility is a right, not a luxury, and we’re 
        committed to ensuring everyone can live more independently and safely.
      </p>
    </Div>
  );
}

export default Banner;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding-bottom: 60px;
  
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 700px;
    z-index: -1;
    img {
      width: 100%;
      height: 100%;
    }
  }

  h1 {
    color: ${colors.mainColor};
    font-size: 100px;
    text-align: right;
    position: relative;
    margin-bottom: 0px;

    span {
      position: absolute;
      bottom: -100px;
      right: 0;
    }
  }

  p {
    width: 70%;
    color: #212121;
    font-size: 26px;
    line-height: 1.3;
  }

  p.bottom {
    width: 60%;
    margin-left: auto;
    text-align: left;
  }
`;