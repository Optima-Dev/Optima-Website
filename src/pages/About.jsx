import React, { useEffect } from 'react';
import styled from 'styled-components';
import Banner from '../components/About/Banner';
import AimTo from '../components/About/AimTo';
import Download from '../components/Home/Download';

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <Div>
      <Banner />
      <AimTo />
      <Download />
    </Div>
  );
}

export default About;

const Div = styled.div`
  padding: 0 15px;
  margin: 0 auto;

  @media (min-width: 576px) { max-width: 540px }
  @media (min-width: 768px) { max-width: 720px }
  @media (min-width: 992px) { max-width: 960px }
  @media (min-width: 1200px) { max-width: 1140px }
  @media (min-width: 1400px) { max-width: 1320px }
  @media (min-width: 1600px) { max-width: 1440px }
`;