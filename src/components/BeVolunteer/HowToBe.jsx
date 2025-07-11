import styled from 'styled-components';
import { colors } from '../../constants/Colors';
import Iosmockup from "../../assets/Be Volunteer/Ios mockup.png";
import BlueStar from "../../assets/Be Volunteer/blue star.png";
import SmallStar from "../../assets/Be Volunteer/yellow small star.png"
import BigStar from "../../assets/Be Volunteer/yellow big star.png";
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const HowToBe = () => {
  return (
    <Div>
      <div className="content">
        <div className="title">
          <h2>How to Be A <br /> <span>VOLUNTEER?</span></h2>

          <div className="small-star1">
            <img src={SmallStar} alt="Small Star 1" />
          </div>

          <div className="small-star2">
            <img src={SmallStar} alt="Small Star 2" />
          </div>
        </div>

        
        <ul>
          <li>Download our app. </li>
          <li>Sign up as a Volunteer.</li>
          <li>Wait for us to notify you when someone asks for help.</li>
        </ul>

        <p className='sales'>Needs no charges and it’s completely free.</p>

        <div className="installs">
          <div className="google-play">
            <div className="icon-container">
              <FaGooglePlay size={36} />
            </div>
            <div className="text-container">
              <p>GET IT ON</p>
              <h3>Google Play</h3>
            </div>
          </div>

          <div className="app-store">
            <div className="icon-container">
              <FaApple size={40} />
            </div>
            <div className="text-container">
              <p>Download on the</p>
              <h3>App Store</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="images">
        <div className="blue-star">
          <img src={BlueStar} alt="Blue Star" />
        </div>

        <img className='ios-mockup' src={Iosmockup} alt="iOS Mockup" />

        <div className="big-star">
          <img src={BigStar} alt="Big Star" />
        </div>
      </div>
    </Div>
  );
}

export default HowToBe;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 60px;
  margin: 100px 0 200px;

  .content {
    .title {
      color: ${colors.mainColor};
      position: relative;
      margin-bottom: 50px;
      width: fit-content;

      h2 {
        font-size: 50px;
      }

      span {
        font-size: 64px;
      }

      .small-star1 {
        position: absolute;
        top: -8px;
        right: 34%;
        rotate: -20deg;
      }

      .small-star2 {
        position: absolute;
        bottom: 10px;
        left: -20px;
      }

      img {
        width: 50px;
        height: 50px;
      }
    }

    ul {
      list-style: decimal;
      margin: 0px 0 60px 40px;

      li {
        font-size: 34px;
        margin-bottom: 50px;
      }
    }

    .sales {
      color: ${colors.mainColor};
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 75px;
    }


    .installs {
      display: flex;
      justify-content: center;
      gap: 100px;

      .google-play, .app-store {
        display: flex;
        align-items: center;
        background-color: ${colors.mainColor};
        color: ${colors.white500};
        padding: 7px 20px;
        border-radius: 10px;
        cursor: pointer;

        .icon-container {
          margin-right: 15px;
        }

        .text-container {
          p {
            margin: 0 0 5px;
            font-size: 14px;
          }
          h3 {
            margin: 0;
            font-size: 24px;
            font-weight: bold;
          }
        }
      }
    }
  }


  .images {
    text-align: right;
    position: relative;

    .ios-mockup {
      max-width: 94%;
    }

    .blue-star {
      position: absolute;
      top: -100px;
      right: -200px;
      z-index: -1;
    }

    .big-star {
      position: absolute;
      bottom: -100px;
      left: -200px;
    }
  }
`;