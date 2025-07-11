
import styled from 'styled-components';
import HomeBanner from '../../assets/Home/home-banner.png';
import { colors } from '../../constants/Colors';
import BlueShadow from "../../assets/Home/Blue Shadow.png";
import YellowShadow from "../../assets/Home/Yellow Shadow.png";


const Banner = () => {
  return (
    <Div>
      <div className="info">
        <div className="bg-yellow-shadow">
          <img src={YellowShadow} alt="Yellow Shadow" />
        </div>
        <div className="bg-blue-shadow">
          <img src={BlueShadow} alt="Blue Shadow" />
        </div>

        <h1>
          OPTIMA <br /> <span className='smart'>SMART</span> <br /> <span className='app'>APPLICATION</span>
        </h1>

        <p>
          Optima is your number one choice as a helping tool for 
          visually impaired people in all their daily tasks as a human
          being. It’s all designed carefully for all levels of blindness disability.
        </p>
      </div>

      <div className="image-container">
        <img src={HomeBanner} alt="" />
      </div>
    </Div>
  );
}

export default Banner;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  .bg-yellow-shadow {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    img {
      max-width: 100%;
    }
  }

  .bg-blue-shadow {
    position: absolute;
    top: -140px;
    right: 0;
    z-index: -1;

    img {
      max-width: 840px;
    }
  }

  h1 {
    color: ${colors.mainColor};
    font-size: 100px;
    margin-top: 100px;
    font-weight: 800;
    line-height: 1.2;
    text-transform: uppercase;
    margin-bottom: 40px;
    font-weight: 600;

    .smart {
      margin-left: 300px;
    }

    .app {
      margin-left: 150px;
    }
  }

  p {
    font-size: 24px;
    color: ${colors.black600};
    line-height: 1.3;
  }

  .image-container {
    img {
      max-width: 500px;
    }
  }
`;