import styled from "styled-components";
import { colors } from '../../constants/Colors';
import Star from "../../assets/Home/Star 1.png"


const Experience = () => {
  return (
    <Div>
      <div>
        <h2>2.2 BN</h2>
        <p>Vision impairment or blindness.</p>
      </div>

      <div className="img-container">
        <img src={Star} alt="star" />
      </div>

      <div>
        <h2>780K</h2>
        <p>Able to use an application.</p>
      </div>

      <div className="img-container">
        <img src={Star} alt="star" />
      </div>

      <div>
        <h2>160K</h2>
        <p>Ready to use our app.</p>
      </div>
    </Div>
  );
}

export default Experience;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 40px 0 50px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: -5px;
    right: -400px;
    width: 100%;
    height: 4px;
    border-radius: 5px;
    background-color: ${colors.secondryColor};
    z-index: -1;
  }

  &:after {
    content: '';
    position: absolute;
    top: -5px;
    right: calc(100% - 402px);
    width: 20px;
    height: 20px;
    transform: translateY(-50%);
    border-radius: 50%;
    background-color: ${colors.secondryColor};
  }

  h2 {
    font-size: 50px;
    color: ${colors.mainColor};
  }

  p {
    color: ${colors.black400};
    font-size: 20px;
    line-height: 1.5;
  }

  .img-container {
    margin: 30px 40px 0 0;
    img {
      width: 120%;
    }
  }
`;
