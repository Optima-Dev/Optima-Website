import styled from 'styled-components';
import Banner from '../components/Community/banner';
import Download from '../components/Home/Download';
import { useEffect } from 'react';

const Community = () => {
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
      <div className="mg"></div>
      <Download />
    </Div>
  );
}

export default Community;

const Div = styled.div`
  padding: 0 15px;
  margin: 0 auto;

  @media (min-width: 576px) { max-width: 540px }
  @media (min-width: 768px) { max-width: 720px }
  @media (min-width: 992px) { max-width: 960px }
  @media (min-width: 1200px) { max-width: 1140px }
  @media (min-width: 1400px) { max-width: 1320px }
  @media (min-width: 1600px) { max-width: 1440px }

  .mg {
    height: 75px;
  }
`;
