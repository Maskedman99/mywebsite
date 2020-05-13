import React from 'react';
import {Link} from 'react-router-dom';

//import ArticlePage from '../components/ArticlePage';
import '../css/ArticleCard.css';

const ArticleCard = ({heading, tags, id}) => {
  return (
    <Link to={`/articles/${id}`} className="ArticleCard-cont">
      <div className="ArticleCard-container">
        <div className="ArticleCard-title">{heading}</div>
        {tags.map(item => (
          <div className="ArticleCard-tag">{item}</div>
        ))}
      </div>
    </Link>
  );
};

export default ArticleCard;
