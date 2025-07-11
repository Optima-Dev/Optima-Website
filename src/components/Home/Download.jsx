import styled from "styled-components";
import { colors } from '../../constants/Colors';
import IosMockup from "../../assets/Home/iOS Icon Mockup.png";
import FadeYellowLogo from "../../assets/Home/fade-yellow-logo.png";
import { FaApple, FaGooglePlay } from "react-icons/fa";


const Download = () => {
  return (
    <Div>
      <div>
        <div className="title">
          <p>Do not miss the <br /> opportunity to try our app!</p>
        </div>

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

      <div className="image-container">
        <img src={IosMockup} alt="mobile mockup" className="mockup" />

        <img src={FadeYellowLogo} alt="logo" />
      </div>
    </Div>
  );
}

export default Download;

const Div = styled.div`
  background-color: white;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  padding: 0 50px;
  margin: 100px 0 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  .title {
    margin-bottom: 40px;
  
    p {
      color: black;
      font-size: 36px;
      font-weight: bold;
      margin: 0;
    }
  }
  
  .installs {
    display: flex;
    gap: 15px;

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

  .image-container {
    position: relative;
  
    .mockup {
      position: absolute;
      left: -120%;
      bottom: 0;
    }
  }
`;