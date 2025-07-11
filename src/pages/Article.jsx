import styled from 'styled-components';
import BannerImage from "../assets/community/banner.png"
import { colors } from '../constants/Colors';
import { Link, useParams } from 'react-router-dom';
import ArticleImage from "../assets/community/article.png";
import ArticleBigImage from "../assets/community/Full article.png";
import LeftStar from "../assets/community/Left Star.png";
import RightStar from "../assets/community/Right Star.png";
import { useEffect } from 'react';


const Article = () => {

  // i want to get this "window.location.pathname.split('/').pop();" but in another way
  const { category } = useParams();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

    const articles = [
    { id: 1, category: "News", headline: "ARTICLE HEADLINE", subTitle: "Article sub-title" },
    { id: 2, category: "Updates", headline: "ARTICLE HEADLINE", subTitle: "Article sub-title" },
    { id: 3, category: "How to", headline: "ARTICLE HEADLINE", subTitle: "Article sub-title" },
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <Div>
      <div className="bg">
        <img src={BannerImage} alt="banner image" />
      </div>

      <div className="container">
        <div className="img-container">
          <img src={ArticleBigImage} alt="Banner" />
        </div>

        <div className="content">
          <p className="category">{ category }</p>

          <div className="info">
            <div className="img-star">
              <img src={LeftStar} alt="leftStar" />
            </div>

            <h2>
              Optima’s Vision Forward: Empowering the Blind Community with Next-Gen Tech
            </h2>

            <span>Ismailia, Egypt – June 2025</span>

            <p>
              At Optima, innovation has always been more than just code—it’s about impact. As a passionate 
              team of developers, designers, and dreamers, we’ve dedicated ourselves to building powerful, 
              inclusive solutions for the blind and visually impaired. Our flagship application has already 
              helped hundreds of users gain more independence in daily life—and now, we’re just getting
              started. This month, the Optima team is hosting a special internal meeting to map out the near
              future of the app. Our focus? Rolling out a major feature update that transforms how users 
              interact with the world around them.
            </p>
          </div>
          
          <div className="comming">
            <h3>What's Coming Next?</h3>
            <p>
              We’re listening to feedback from our community and integrating cutting-edge tech to make our app 
              even more intuitive, reliable, and empowering. While the details are still under wraps, here’s a sneak
              peek at what we’re cooking up:
            </p>

            <ul>
              <li><span>Voice Command Upgrades</span> – smoother, faster responses with smarter time response.</li>
              <li><span>Location Awareness</span> – enhanced GPS and indoor navigation to guide users safely anywhere. </li>
              <li><span>Community Connect</span> – a new feature to connect users with volunteers and support in real time.</li>
            </ul>
          </div>

          <div className="matters">
            <div className="img-star">
              <img src={RightStar} alt="rightStar" />
            </div>

            <h3>Why This Matters ?</h3>
            <p>
              Blindness doesn’t limit potential—lack of access does. At Optima, we believe technology should close 
              that gap. By working closely with real users and accessibility advocates, we're designing updates that 
              aren’t just smart—they’re human. This meeting is more than just a roadmap session. 
              It’s a milestone in our mission to build tools that see with the heart, not just the eyes.
            </p>
          </div>


          <div className="footer">
            <p>#BuildWithOptima</p>
            <p>#TechForGood</p>
            <p>#AccessibilityMatters</p>
          </div>
        </div>
      </div>


      <h2 className='article-title'>More Articles For You</h2>
      <div className="articles">

        {articles.map((article) => (
          <div className="article" key={article.id}>
            <img src={ArticleImage} alt="article" />
            <div className="info">
              <span>{article.category}</span>
              <h3>{article.headline}</h3>
              <p>{article.subTitle}</p>
              <button className='read-more'>
                <Link to={`/article/${article.category}`} onClick={scrollToTop}>Read More</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </Div>
  );
}

export default Article;

const Div = styled.div`

  padding: 0 15px;
  margin: 30px auto;

  @media (min-width: 576px) { max-width: 540px }
  @media (min-width: 768px) { max-width: 720px }
  @media (min-width: 992px) { max-width: 960px }
  @media (min-width: 1200px) { max-width: 1140px }
  @media (min-width: 1400px) { max-width: 1320px }
  @media (min-width: 1600px) { max-width: 1440px }

  .bg {
    position: absolute;
    top: -10px;
    right: 0px;
    height: 700px;
    z-index: -2;
  }


  .container {
    border-radius: 20px;
    overflow: hidden;

    .img-container {
      img {
        width: 100%;
        height: 720px;
      }
    }

    .content {
      background-color: #f5f5f5;
      padding: 30px;

      .category {
        width: fit-content;
        background-color: ${colors.mainColor};
        color: ${colors.white500};
        padding: 5px 30px 5px 60px;
        border-radius: 0 10px 10px 0;
        font-size: 22px;
        margin-left: -30px;
        font-weight: bold;
      }

      .info {
        padding: 20px 60px;
        margin: 0 0 0 110px;

        .img-star {
          position: absolute;
          left: 80px;

          img {
            margin-top: -100px;
            max-width: 580px;
          }
        }
  
        h2 {
          color: ${colors.mainColor};
          font-size: 50px;
          margin: 30px 0;
        }

        p {
          color: black;
          font-size: 22px;
          line-height: 1.2;
          margin: 20px 0;
        }
      }

      .comming {
        padding: 40px 80px;

        h3 {
          font-size: 40px;
          color: ${colors.mainColor};
          margin-bottom: 20px;
        }

        p {
          color: black;
          font-size: 30px;
          margin-bottom: 30px;
        }

        ul {
          list-style: disc;
          padding-left: 80px;

          li {
            color: black;
            font-size: 22px;
            margin-bottom: 20px;

            span {
              font-weight: bold;
            }
          }
        }
      }

      .matters {
        padding: 0px 80px;

        .img-star {
          position: absolute;
          right: 80px;

          img {
            margin-top: -220px;
            max-width: 560px;
          }
        }

        h3 {
          font-size: 40px;
          color: ${colors.mainColor};
          margin-bottom: 20px;
        }

        p {
          color: black;
          font-size: 30px;
          margin-bottom: 25px;
        }
      }

      .footer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 25px;
        margin-bottom: 20px;

        p {
          color: ${colors.mainColor};
          font-weight: bold;
          font-size: 30px;
          text-align: center;
          margin-top: 40px;
        }
      }
    }
  }



  .article-title {
    color: ${colors.mainColor};
    font-size: 50px;
    margin: 80px 0 40px;
    text-align: center;
  }

  .articles {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 30px;
    margin-bottom: 100px;


    .article {
      background-color: #f5f5f5;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s;

      &:hover {
        transform: translateY(-10px);
      }

      img {
        width: 100%;
        height: auto;
      }

      .info {
        padding: 15px 20px 20px;

        span {
          color: ${colors.white500};
          background-color: ${colors.mainColor};
          padding: 5px 30px;
          border-radius: 5px;
          font-size: 20px;
        }

        h3 {
          font-size: 24px;
          color: ${colors.black600};
          margin-bottom: 5px;
        }

        p {
          color: ${colors.black400};
          font-size: 20px;
        }

        .read-more {
          padding: 10px 30px;
          background-color: #e7e7e7;
          color: ${colors.mainColor};
          cursor: pointer;
          border: none;
          border-radius: 5px;
          font-size: 18px;
          margin-top: 16px;
          font-weight: bold;

          &:hover {
            background-color: ${colors.mainColor};
            color: ${colors.secondryColor};
            transition: all 0.3s ease;
          }

          a {
            text-decoration: none;
            color: inherit;
          }
        }
      }
    }
  }
`;
