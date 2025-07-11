import styled from "styled-components";
import Banner from "../components/BeVolunteer/Banner";
import { colors } from "../constants/Colors";
import HowToBe from "../components/BeVolunteer/HowToBe";
import WhyImportant from "../components/BeVolunteer/WhyImportant";
import { useEffect } from "react";

const BeAVolunteer = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <Div>
      <div className="bg"></div>
      <Banner />
      <HowToBe />
      <WhyImportant />
    </Div>
  );
}

export default BeAVolunteer;

const Div = styled.div`
  padding: 0 15px;
  margin: 0 auto;

  @media (min-width: 576px) { max-width: 540px }
  @media (min-width: 768px) { max-width: 720px }
  @media (min-width: 992px) { max-width: 960px }
  @media (min-width: 1200px) { max-width: 1140px }
  @media (min-width: 1400px) { max-width: 1320px }
  @media (min-width: 1600px) { max-width: 1440px }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 600px;
    background-color: ${colors.mainColor};
    z-index: -1;
  }
`;