import React from 'react';
import styled from 'styled-components';
import AimStart from "../../assets/about/aim.png"
import { colors } from '../../constants/Colors';
import Shadow1 from "../../assets/about/shadow1.png";
import Shadow2 from "../../assets/about/shadow2.png";
import Shadow3 from "../../assets/about/shadow3.png";
import Shadow4 from "../../assets/about/shadow4.png";


const AimTo = () => {
  return (
    <Div>

      <div className="bg"></div>

      <div className="img">
        <img src={AimStart} alt="star" />
      </div>

      <h2><span>OPTIMA</span>’s Aim is to </h2>

      <div className='container'>
        <div>
          <div className="shadow1">
            <img src={Shadow1} alt="" />
          </div>
          <h3>1. Empower the Blind Community : </h3>
          <p>
            Help visually impaired individuals navigate
            daily life with confidence and independence.
          </p>
        </div>

        <div>
          <div className="shadow2">
            <img src={Shadow2} alt="" />
          </div>
          <h3>2. Raise Awareness :</h3>
          <p>
            Highlight the importance of inclusion and the 
            positive impact of volunteering in society.
          </p>
        </div>

        <div>
          <div className="shadow3">
            <img src={Shadow3} alt="" />
          </div>
          <h3>3. Create a Supportive Network :</h3>
          <p>
              Connect people in need with caring volunteers
              who are ready to assist.
          </p>
        </div>

        <div>
          <div className="shadow4">
            <img src={Shadow4} alt="" />
          </div>
          <h3>4. Leverage Technology for Good :</h3>
          <p>
            Use smart, accessible tools like AI and voice 
            control to offer practical, real-time help.
          </p>
        </div>
      </div>
      
    </Div>
  );
}

export default AimTo;

const Div = styled.div`
  padding: 10px 0 80px;

  .bg {
    position: absolute;
    left: 0;
    background-color: #f5f5f5;
    width: 2000px;
    height: 750px;
    z-index: -1;
  }

  .img {
    position: absolute;
    right: 0;
    margin-top: -150px;
    height: 300px;
    z-index: -1;
  }

  h2 {
    text-align: center;
    font-size: 50px;
    margin: 80px 0 60px;

    span {
      color: ${colors.mainColor};
    }
  }


  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 40px;
    padding: 0 50px;
    margin-bottom: 50px;
    
    div {
      background-color: white;
      padding: 40px 50px;
      border-radius: 10px;
      position: relative;
      overflow: hidden;
      z-index: 1;

      > div {
        position: absolute;
        z-index: -1;

        &.shadow1 {
          right: -50px;
          bottom: -50px;
        }

        &.shadow2 {
          left: -50px;
          bottom: -50px;
        }
        
        &.shadow3 {
          right: -50px;
          top: -50px;
        }

        &.shadow4 {
          top: -50px;
          left: -50px;
        }
      }


      h3 {
        font-size: 34px;
        color: ${colors.mainColor};
        margin-bottom: 10px;
      }

      p {
        color: #787878;
        font-size: 24px;
        line-height: 1.5;
      }
    }
  }
`;