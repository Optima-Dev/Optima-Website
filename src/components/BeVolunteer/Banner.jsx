import styled from 'styled-components';
import { colors } from '../../constants/Colors';
import BannerImage from "../../assets/Be Volunteer/banner.png";

const Banner = () => {
  return (
    <Div>
      <h1>BE A VOLUNTEER</h1>

      <div className="image-container">
        <img src={BannerImage} alt="Be a Volunteer Banner" />

        <p>
          Optima offers you a safe way to volunteer and help 
          the society with your time and sight ability.  
        </p>
      </div>
    </Div>
  );
}

export default Banner;

const Div = styled.div`

  h1 {
    margin-top: 160px;
    color: white;
    text-align: center;
    font-size: 150px;
    font-weight: 600;
  }

  .image-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: -120px;
    margin-bottom: 180px;

    p {
      color: ${colors.black600};
      text-align: center;
      font-size: 32px;
      max-width: 700px;
      line-height: 1.5;
      font-weight: 500;
    }
  }
`;