import styled from 'styled-components';
import { colors } from '../../constants/Colors';
import logo from "../../assets/Be Volunteer/logo.png";

const WhyImportant = () => {
  return (
    <Div>
      <div className="content">
        <div className="bgr"></div>
        
        <h2>Why Volunteering is important ?</h2>

        <h3>Volunteering isn’t just about giving your time — it’s about making real change.</h3>

        <div className="logoo">
          <img src={logo} alt="logo" />
        </div>

        <p>
          When you choose to volunteer with OPTIMA, you’re not just helping someone see the world 
          differently, you’re helping them feel seen. Many visually impaired individuals face challenges in their 
          everyday lives that go unnoticed. A simple video call, a kind voice, or even a moment of guidance 
          can make an enormous difference.
          By volunteering, you’re part of something bigger. a movement built on empathy, inclusion, and human 
          connection. You’re offering independence to someone who truly needs it, and in return, you gain 
          purpose, experience, and the rewarding feeling of being there for someone who counts on you.
        </p>

        <h3>Your time can light the way. Be the voice that guides.</h3>
      </div>
    </Div>
  );
}

export default WhyImportant;

const Div = styled.div`
  padding: 80px 0;
  position: relative;
  margin-bottom: 100px;

  .bgr {
    margin-top: -100px;
    position: absolute;
    left: -1500px;
    width: 4000px;
    height: 600px;
    background-color: #f0f0f0;
    z-index: -2;
  }

  .logoo {
    position: absolute;
    left: -100px;
    top: 10%;
    z-index: -1;

    img {
      max-width: 80%;
    }
  }

  h2 {
    color: ${colors.mainColor};
    text-align: center;
    margin-bottom: 30px;
    font-size: 50px;
  }
  
  h3 {
    font-size: 30px;
    margin: 20px 0 20px;
  }

  p {
    line-height: 1.4;
    font-size: 25px;
    width: 90%;
  }
`;