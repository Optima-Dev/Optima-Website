import styled from 'styled-components';
import { colors } from '../../constants/Colors';
import IhoneMochup from "../../assets/Home/iPhone_Mockup.png";
import YellowStar from "../../assets/Home/Star 3.png";
import BlueStar from "../../assets/Home/Star 4.png";

const Features = () => {
  return (
    <Div>
      <div className="container">
        <div>
          <h2>Our Main <br /> <span>FEATURES ?</span></h2>

          <ul>
            <img src={YellowStar} alt="star" />

            <li>
              <h3>Secure Video Calling</h3>
              <p>Seamless video communication between volunteers and users in need, built in-house to ensure privacy and safety for both sides.</p>
            </li>
            <li>
              <h3>Voice Command Control</h3>
              <p>Hands-free interaction through voice commands, making navigation and control of the app faster, easier, and more accessible.</p>
            </li>
            <li>
              <h3>AI-Powered Photo Descriptions</h3>
              <p>An advanced AI model that provides detailed descriptions of whatever the camera captures offering clear context and support for users.</p>
            </li>
          </ul>
        </div>
        
        <div className="image-container">
          <img src={IhoneMochup} alt="iphone mockup" />
        </div>
      </div>

      <ul className='bottom-features'>
        <li>
          <h3>Notifications Asking For Help</h3>
          <p>On the volunteers app , we will send you notifications whenever someone is asking for help.</p>
        </li>
        <li>
          <h3>Easy Reach For Family And Friends</h3>
          <p>You can easily reach out for a call with your close people. </p>
        </li>
      </ul>
    </Div>
  );
}

export default Features;

const Div = styled.div`
  margin: 80px 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: black;
      font-size: 44px;
      font-weight: bold;
      line-height: 1.4;
      margin-bottom: 60px;

      span {
        color: ${colors.mainColor};
      }
    }

    ul {
      margin-left: 50px;
      position: relative;

      img {
        position: absolute;
        top: -150px;
        left: -100px;
        max-width: 700px;
        z-index: -1;
      }

      li {
        position: relative;

        h3 {
          color: ${colors.mainColor};
          font-size: 30px;
          margin-bottom: 10px;
        }

        p {
          width: 900px;
          color: black;
          font-size: 24px;
          line-height: 1.6;
        }
      }

      li:before {
        content: "";
        position: absolute;
        top: 0;
        left: -50px;
        width: 40px;
        height: 40px;
        background-image: url(${BlueStar});
        background-size: cover;
      }
    }
  }


  .bottom-features {
    margin: 15px 0 0 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    position: relative;

    li {
      position: relative;

      h3 {
        color: ${colors.mainColor};
        font-size: 30px;
        margin-bottom: 10px;
      }

      p {
        width: 700px;
        color: black;
        font-size: 24px;
        line-height: 1.6;
      }
    }

    li:before {
      content: "";
      position: absolute;
      top: 15px;
      left: -50px;
      width: 40px;
      height: 40px;
      background-image: url(${BlueStar});
      background-size: cover;
    }
  }
`;