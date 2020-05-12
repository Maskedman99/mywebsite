import React from 'react';

//import ArticlePage from '../components/ArticlePage';
import '../css/ArticleCard.css';

const ArticleCard = ({heading, url, tags}) => {
  return (
    <div className="ArticleCard-container">
      <div className="ArticleCard-title">{heading}</div>
      {tags.map(item => (
        <div className="ArticleCard-tag">{item}</div>
      ))}
    </div>
  );
};

export default ArticleCard;
