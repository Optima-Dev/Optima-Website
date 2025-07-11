import styled from 'styled-components';
import { colors } from '../../constants/Colors';
import { Link } from 'react-router-dom';


const JoinUs = () => {
  return (
    <Div>
      
      <div className="container">
        <div className="info">
          <h2>
            Wanna help the world around you ?
            <br />
            <span>BE A VOLUNTEER !!</span>
          </h2>

          <p>
            Be the reason someone feels seen, heard, and supported 
            join Optima as a volunteer and help change lives.
          </p>
        </div>

        <div className="btn">
          <button>
            <Link to="/be-a-volunteer">Join Us Now</Link>
          </button>
        </div>
      </div>
      
    </Div>
  );
}

export default JoinUs;

const Div = styled.div`
  margin: 100px 0;

  .container { 
    position: relative;
    width: 60%;
    margin: 0 auto;
    padding: 50px;
    border: 5px solid ${colors.mainColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    border-radius: 20px;

    .info {
      h2 {
        text-align: left;
        font-size: 30px;
        line-height: 1.5;
        margin-bottom: 10px;

        span {
          font-size: 40px;
          color: ${colors.mainColor};
        }
      }

      p {
        color: #676767;
        line-height: 1.2;
        font-size: 20px;
      }
    }

    .btn {
      background-color: ${colors.mainColor};
      border-radius: 10px;
      
      button {
        width: 200px;
        padding: 20px 30px;
        background-color: transparent;
        transition: all 0.3s ease;
        color: ${colors.white500};
        font-size: 20px;
        border: none;
        cursor: pointer;

        &:hover {
          color: ${colors.secondryColor};
        }

        a {
          text-decoration: none;
          color: inherit;
        }
      }

    }
  }

  .container:before {
    content: '';
    position: absolute;
    background-color: white;
    width: 60%;
    top: 0px;
    left: 50%;
    height: 10px;
    transform: translate(-50%, -50%);
  }

  .container:after {
    content: '';
    position: absolute;
    background-color: white;
    width: 60%;
    bottom: -10px;
    left: 50%;
    height: 10px;
    transform: translate(-50%, -50%);
  }
`;