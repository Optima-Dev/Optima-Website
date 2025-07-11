import styled from 'styled-components';
import { colors } from '../../constants/Colors';
import BannerImage from "../../assets/contact/banner.png";

const Banner = () => {
  return (
    <Div>
      <h1>Contact <br /> <span>Us</span></h1>
      <div className="bg">
        <img src={BannerImage} alt="banner" />
      </div>
    </Div>
  );
}

export default Banner;

const Div = styled.div`
  padding: 50px 0;
  margin-bottom: 400px;

  .bg {
    position: absolute;
    left: 0;
    top: -10px;
    right: 0;
    height: 700px;
    z-index: -2;
    img {
      width: 100%;
      height: 100%;
    }
  }

  h1 {
    margin-top: 20px;
    margin-left: 100px;
    width: fit-content;
    color: ${colors.mainColor};
    font-size: 150px;
    position: relative;
    
    span {
      position: absolute;
      bottom: -140px;
      right: -30px;
      z-index: -3;
    }
  }
`;