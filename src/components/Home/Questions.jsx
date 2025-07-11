
import styled from 'styled-components';
import { colors } from '../../constants/Colors';
import Questionss from "../../assets/Home/questions.png";
import BlueStar from "../../assets/Home/Star 4.png";
import Shadow1 from "../../assets/Home/Ques-shadow1.png";
import Shadow2 from "../../assets/Home/Ques-shadow-2.png";
import ArrowUp from "../../assets/Home/arrow-up.png";
import ArrowDown from "../../assets/Home/arrow-down.png";
import { useState } from 'react';

const Questions = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(prev => prev === index ? null : index);
  };

  return (
    <Div>

      <div className="bg1">
        <img src={Shadow1} alt="shadow 1" />
      </div>
        
      <div className="bg2">
      <img src={Shadow2} alt="shado 2" />
      </div>

      <div className="container">
        <div>
          <img src={BlueStar} alt="star" className='blue-star' />
          <h2>Frequently Asked <br />  <span>Questions ..?</span></h2>
          <div className="image-container">
            <img src={Questionss} alt="mobile mockup" />
          </div>
        </div>

        <ul>
          <li>
            <div className="title" onClick={() => toggleItem(0)}>
              <h4>What is Optima?</h4>
              <img src={openItem === 0 ? ArrowUp : ArrowDown} alt="Arrow" />
            </div>
            <div className={`answer ${openItem === 0 ? 'open' : ''}`}>
              <p>
                Optima is smart application that helps blind people with daily life basis.
                With features like secure video calls, voice command controls,
                and AI-powered photo descriptions, Optima connects users with volunteers
                and empowers them to navigate the world more safely and independently.
              </p>
            </div>
          </li>
          <li>
            <div className="title" onClick={() => toggleItem(1)}>
              <h4>How can i download the application ?</h4>
              <img src={openItem === 1 ? ArrowUp : ArrowDown} alt="Arrow" />
            </div>
            <div className={`answer ${openItem === 1 ? 'open' : ''}`}>
              <p>
                You can download Optima from the Google Play Store for Android devices or the App Store for iOS devices. Simply search for "Optima" in your device's app store and click the download button. The app is free to download and use.
              </p>
            </div>
          </li>
          <li>
            <div className="title" onClick={() => toggleItem(2)}>
              <h4>How can i apply as a volunteer ?</h4>
              <img src={openItem === 2 ? ArrowUp : ArrowDown} alt="Arrow" />
            </div>
            <div className={`answer ${openItem === 2 ? 'open' : ''}`}>
              <p>
                To become a volunteer, download the Optima app and create an account. Navigate to the "Volunteer" section and complete the application form. You'll need to verify your identity and complete a brief training module before you can start helping users.
              </p>
            </div>
          </li>
          <li>
            <div className="title" onClick={() => toggleItem(3)}>
              <h4>Do i need to pay anything ?</h4>
              <img src={openItem === 3 ? ArrowUp : ArrowDown} alt="Arrow" />
            </div>
            <div className={`answer ${openItem === 3 ? 'open' : ''}`}>
              <p>
                No, Optima is completely free for all users. There are no hidden fees, subscription costs, or premium features that require payment. Our mission is to make accessibility tools available to everyone who needs them.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </Div>
  );
}

export default Questions;

const Div = styled.div`
  padding: 50px 0;

  .bg1 {
    position: absolute;
    right: 0;
    left: 0;
    z-index: -1;
    margin-top: -30px;
  }

  .bg2 {
    position: absolute;
    right: 0;
    z-index: -1;
    margin-top: 30px;
  }

  .container {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    > div {
      position: relative;
      flex: 1;

      .blue-star {
        position: absolute;
        top: 20px;
        left: -70px;
        z-index: 1;

        img {
          max-width: 50px;
        }
      }

      h2 {
        color: ${colors.mainColor};
        font-size: 45px;
        font-weight: bold;
        line-height: 1.2;
        margin-bottom: 50px;

        span {
          font-size: 64px;
        }
      }

      .image-container {
        img {
          width: 140%;
          margin-left: -20%;
        }
      }
    }

    ul {
      flex: 1;
      list-style-type: none;
      padding-left: 0;
      margin-top: 120px;

      li {
        padding: 30px 20px;
        border: 3px solid ${colors.mainColor};
        border-radius: 20px;
        margin-bottom: 30px;

        .title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;

          h4 {
            color: ${colors.mainColor};
            font-size: 28px;
            font-weight: bold;
            margin: 0;
          }
        }

        .answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-in-out;

          &.open {
            max-height: 200px;
          }

          p {
            color: ${colors.black400};
            font-size: 22px;
            line-height: 1.5;
            margin: 20px 0 0 0;
            padding: 0;
          }
        }
      }
    }
  }
`;