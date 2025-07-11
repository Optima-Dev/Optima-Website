import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/Colors';
import YellowStar from "../../assets/Home/introduce star1.png";
import WhiteStar from "../../assets/Home/introduce star white.png";
import IntroduceStar from "../../assets/Home/introduce 3.png";

const Introduce = () => {
  return (
    <Div>
      <h2>
        <span>OPTIMA</span> {" "}
        introduces you to a new <br />
        world where we created ..
      </h2>

      <div className="container">
        <div>
          <div className="image-container1">
            <img src={YellowStar} alt="star" />
          </div>
          <p>A fully developed app and ready to be used.</p>
        </div>

        <div>
          <div className="image-container2">
            <img src={WhiteStar} alt="star" />
          </div>
          <p>Excellent navigation also consideration all the UX principles.</p>
        </div>

        <div>
          <div className="image-container3">
            <img src={IntroduceStar} alt="star" />
          </div>
          <p>Completely free to use services with no payment.</p>
        </div>
      </div>
    </Div>
  );
}

export default Introduce;

const Div = styled.div`
  margin: 100px 0;

  h2 {
    color: black;
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    line-height: 1.2;
    margin-bottom: 50px;

    span {
      color: ${colors.mainColor};
    }
  }

  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 100px;

    > div {
      position: relative;
      background-color: ${colors.mainColor};
      padding: 80px 50px;
      border-radius: 40px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 250px;
        background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.9));
        border-radius: 0 0 40px 40px;
      }

      p {
        z-index: 2;
        text-align: center;
        color: ${colors.white500};
        font-size: 36px;
        line-height: 1.4;
        margin-top: 50px;
        font-weight: 500;
      }
    }

    .image-container1 {
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 1;

      img {
        width: 360px;
        opacity: 0.8;
      }
    }

    .image-container2 {
      position: absolute;
      bottom: 0px;
      right: 0px;
      z-index: 1;

      img {
        width: 300px;
        opacity: 0.8;
      }
    }

    .image-container3 {
      position: absolute;
      top: 20px;
      left: 80px;
      z-index: 1;

      img {
        max-width: 300px;
        opacity: 0.8;
      }
    }
  }
`;