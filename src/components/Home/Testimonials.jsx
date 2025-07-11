import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/Colors';
import logo from "../../assets/Home/test-logo.png";
import test from "../../assets/Home/test.png";
import star from "../../assets/Home/Star 10.png"


const Testimonials = () => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <Div>
      <div className="bg"></div>
      <div className="image-container">
        <div className="img">
          <img src={logo} alt="logo" />
        </div>
      </div>
      
      <h2>What Our Users <br /> <span>SAY ABOUT US</span></h2>

      <div 
        className="testimonial"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div>
          <div className="img-container">
            <img src={test} alt="testimonial image" />
          </div>

          <div className="info">
            <p>
              Optima is a smart application that helps blind 
              people with daily life basis. With features like 
              secure video calls, voice command controls, and 
              AI-powered photo descriptions, Optima connects.
            </p>

            <div className="personal">
              <div className="information">
                <h4>Darrel Adams</h4>
                <p>Darrel14@yahoo.com</p>
              </div>

              <div className="rating">
                <span>5</span>
                <img src={star} alt="star" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="img-container">
            <img src={test} alt="testimonial image" />
          </div>

          <div className="info">
            <p>
              Using Optima has been life-changing! The voice commands 
              are incredibly responsive, and the AI descriptions help 
              me understand my surroundings better than ever before.
            </p>

            <div className="personal">
              <div className="information">
                <h4>Sarah Johnson</h4>
                <p>sarah.j@gmail.com</p>
              </div>

              <div className="rating">
                <span>5</span>
                <img src={star} alt="star" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="img-container">
            <img src={test} alt="testimonial image" />
          </div>

          <div className="info">
            <p>
              The secure video calls feature in Optima gives me 
              confidence to connect with family and friends. 
              It's intuitive and works flawlessly every time.
            </p>

            <div className="personal">
              <div className="information">
                <h4>Michael Chen</h4>
                <p>mchen.dev@outlook.com</p>
              </div>

              <div className="rating">
                <span>4</span>
                <img src={star} alt="star" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="img-container">
            <img src={test} alt="testimonial image" />
          </div>

          <div className="info">
            <p>
              Optima's photo description feature is amazing! 
              It helps me navigate through my daily activities 
              with ease and independence. Highly recommended!
            </p>

            <div className="personal">
              <div className="information">
                <h4>Emma Rodriguez</h4>
                <p>emma.r.2024@yahoo.com</p>
              </div>

              <div className="rating">
                <span>5</span>
                <img src={star} alt="star" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="img-container">
            <img src={test} alt="testimonial image" />
          </div>

          <div className="info">
            <p>
              As a volunteer, I've seen firsthand how Optima 
              transforms lives. The community features foster 
              meaningful connections and support networks.
            </p>

            <div className="personal">
              <div className="information">
                <h4>David Thompson</h4>
                <p>d.thompson@gmail.com</p>
              </div>

              <div className="rating">
                <span>5</span>
                <img src={star} alt="star" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
}

export default Testimonials;

const Div = styled.div`
  padding: 50px 0;
  position: relative;
  
  .bg {
    background-color: #f3f3f3;
    width: 3000px;
    height: 520px;
    position: absolute;
    z-index: -1;
    left: -500px;
    top: 0;
  }
  .img {
    position: absolute;
    top: 20px;
    left: -70px;
    z-index: -1;

    img {
      max-width: 480px;
      object-fit: contain;
      opacity: 0.65;
    }
  }

  h2 {
    text-align: center;
    font-size: 40px;
    line-height: 1.2;
    margin-bottom: 40px;

    span {
      color: ${colors.mainColor};
    }
  }

  .testimonial {
    display: flex;
    gap: 40px;
    align-items: center;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding: 20px 0;
    cursor: grab;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }

    &:active {
      cursor: grabbing;
    }

    > div {
      background-color: #f6f6f6;
      border: 3px solid white;
      padding: 20px;
      border-radius: 20px;
      display: flex;
      gap: 20px;
      width: 480px;
      flex-shrink: 0;
      user-select: none;

      .info {
        p {
          color: #636363;
          font-size: 16px;
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .personal {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .information {
            h4 {
              color: ${colors.black600};
              font-size: 18px;
              margin: 0;
            }

            p {
              color: ${colors.black400};
              font-size: 14px;
              margin: 5px 0 0;
            }
          }

          .rating {
            display: flex;
            align-items: center;
            gap: 5px;

            span {
              color: ${colors.mainColor};
              font-size: 20px;
              font-weight: bold;
            }

            img {
              width: 20px;
              height: 20px;
            }
          }
        }

        .personal:before {
          content: '';
          position: absolute;
          top: 0;
          left: -15px;
          height: 100%;
          width: 3px;
          background-color: ${colors.mainColor};
        }
      }
    }
  }
`;