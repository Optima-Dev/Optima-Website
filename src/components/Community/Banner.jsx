import styled from 'styled-components';
import { useState } from 'react';
import BannerImage from "../../assets/community/banner.png"
import { colors } from '../../constants/Colors';
import Article from "../../assets/community/article.png"
import { Link } from 'react-router-dom';

const Banner = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const articles = [
    { id: 1, category: "News", headline: "ARTICLE HEADLINE", subTitle: "Article sub-title" },
    { id: 2, category: "Updates", headline: "ARTICLE HEADLINE", subTitle: "Article sub-title" },
    { id: 3, category: "How to", headline: "ARTICLE HEADLINE", subTitle: "Article sub-title" },
    { id: 4, category: "News", headline: "ARTICLE HEADLINE",  subTitle: "Article sub-title" },
    { id: 5, category: "Updates", headline: "ARTICLE HEADLINE", subTitle: "Article sub-title" },
    { id: 6, category: "How to", headline: "ARTICLE HEADLINE", subTitle: "Article sub-title" },
    { id: 7, category: "News", headline: "ARTICLE HEADLINE", subTitle: "Article sub-title" },
    { id: 8, category: "Updates", headline: "ARTICLE HEADLINE", subTitle: "Article sub-title" },
    { id: 9, category: "How to", headline: "ARTICLE HEADLINE", subTitle: "Article sub-title" }
  ];

  const categories = ['All', 'Updates', 'News', 'How to'];

  const filteredArticles = activeCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <Div>
      <div className="banner">
        <div className="bg">
          <img src={BannerImage} alt="banner image" />
        </div>
        <h1>Community</h1>
        <p>
          Optima offers you a good way to be always updated with many
          topics that may concern you as a user of our application.
        </p>
      </div>

      <div className="community">
        <ul>
          {categories.map((category) => (
            <li 
              key={category}
              className={activeCategory === category ? 'active' : ''}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>

        <div className="articles">
          {filteredArticles.map((article) => (
            <div className="article" key={article.id}>
              <img src={Article} alt="article" />
              <div className="info">
                <span>{article.category}</span>
                <h3>{article.headline}</h3>
                <p>{article.subTitle}</p>
                <Link to={`/article/${article.category}`} className='read-more'>
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <button className='more'>Click For More Articles</button>
      </div>
    </Div>
  );
}

export default Banner;

const Div = styled.div`

  .bg {
    position: absolute;
    top: -10px;
    right: 0px;
    height: 700px;
    z-index: -2;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .banner {
    padding: 0 0 30px;
  
    h1 {
      font-size: 140px;
      padding-top: 80px;
      text-align: center;
      color: ${colors.mainColor};
      margin-bottom: 50px;
    }
  
    p {
      color: ${colors.black600};
      line-height: 1.5;
      font-size: 40px;
      width: 70%;
      margin-bottom: 50px;
    }
  }

  .community {
    ul {
      display: flex;
      gap: 30px;
      margin-bottom: 50px;

      li {
        cursor: pointer;
        color: ${colors.mainColor};
        font-size: 24px;
        font-weight: bold;
        transition: color 0.3s;
        border: 3px solid ${colors.mainColor};
        border-radius: 10px;
        padding: 8px 30px;

        &:hover, &.active {
          color: ${colors.white500};
          background-color: ${colors.mainColor};
        }
      }
    }

    .articles {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 30px;
      margin-bottom: 50px;
      transition: all 0.3s ease-in-out;

      .article {
        background-color: #f5f5f5;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s, opacity 0.3s ease-in-out;
        opacity: 1;
        animation: fadeIn 0.5s ease-in-out;

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
            display: inline-block;
            padding: 10px 30px;
            background-color: #e7e7e7;
            color: ${colors.mainColor};
            cursor: pointer;
            border: none;
            border-radius: 5px;
            font-size: 18px;
            margin-top: 16px;
            font-weight: bold;
            text-decoration: none;
            transition: all 0.3s ease;

            &:hover {
              background-color: ${colors.mainColor};
              color: ${colors.secondryColor};
            }
          }
        }
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    button.more {
      display: block;
      margin: 30px auto;
      border: 3px solid ${colors.mainColor};
      padding: 14px 50px;
      border-radius: 10px;
      background-color: ${colors.white500};
      font-size: 24px;
      color: ${colors.mainColor};
      cursor: pointer;
      font-weight: bold;

      &:hover {
        background-color: ${colors.mainColor};
        color: ${colors.white500};
        transition: all 0.5s ease;
      }
    }
  }

`;