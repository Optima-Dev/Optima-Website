import React from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import styled from 'styled-components';
import { colors } from '../../constants/Colors';

const Form = () => {
  return (
    <Div>
      <div className="container">
        <div className="form">
          <h2>Send Us A Message</h2>

          <form onClick={(e) => e.preventDefault()}>
            <input type="text" id="name" name="name" required placeholder='Full Name' />
            <input type="email" id="email" name="email" required placeholder='Email' />
            <textarea id="message" name="message" rows="5" required placeholder='Message ..'></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="details">
          <h2>Get In Touch</h2>
          <p>
            We’re here to listen, support, and connect. 
            Whether you have a question, feedback, or want to 
            become part of the Optima community, we'd love 
            to hear from you. Your voice matters.
          </p>

          <ul>
            <li>
              <div className="icon">
                <FaLocationDot />
              </div>

              <div className="info">
                <h4>Head Office</h4>
                <p>765 Beech Close, Keeblerfield 96614-3560</p>
              </div>
            </li>
            <li>
              <div className="icon">
                <BiSolidPhoneCall />
              </div>

              <div className="info">
                <h4>Head Office</h4>
                <p>765 Beech Close, Keeblerfield 96614-3560</p>
              </div>
            </li>

            <li>
              <div className="icon">
                <MdEmail />
              </div>

              <div className="info">
                <h4>Head Office</h4>
                <p>765 Beech Close, Keeblerfield 96614-3560</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Div>
  );
}

export default Form;

const Div = styled.div`
  margin: -180px auto 200px;
  padding: 20px;

  .container {
    display: flex;
    margin: 0 auto;
    max-width: 1000px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);

    .form {
      padding: 30px;
      background: #f5f5f5;
      flex: 1;

      h2 {
        color: ${colors.mainColor};
        margin-bottom: 30px;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        
        input, textarea {
          padding: 15px;
          border: 1px solid #ccc;
          border-radius: 10px;
          font-size: 16px;
          outline: none;

          &:focus {
            border: ${colors.mainColor} 2px solid;
          }
        }
        
        button {
          background-color: ${colors.mainColor};
          color: ${colors.white500};
          padding: 15px;
          outline: none;
          border-radius: 10px;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover {
            color: ${colors.secondryColor};
          }
        }
      }
    }

    .details {
      flex: 1;
      padding: 30px;
      background: white;

      h2 {
        color: ${colors.mainColor};
        margin-bottom: 20px;
        font-size: 38px;
      }

      p {
        color: #767676;
        font-size: 20px;
        line-height: 1.5;
        margin-bottom: 30px;
      }

      ul {
        li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 10px;

          .icon {
            background: ${colors.mainColor};
            border-radius: 50%;
            padding: 15px;
            font-size: 30px;
            color: ${colors.white500};
            margin-right: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .info {
            h4 {
              color: ${colors.mainColor};
              font-size: 22px;
              margin: 0;
            }

            p {
              color: ${colors.black400};
              font-size: 18px;
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
`;