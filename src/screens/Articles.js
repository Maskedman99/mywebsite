import React from 'react';

import ArticleCard from '../components/ArticleCard';
import '../css/Article.css';

const Article = () => {
  return (
    <div className="Article-container">
      <ArticleCard
        heading={'Iris Flowers'}
        sourceUrl={'https://raw.githubusercontent.com/Maskedman99/Iris-Flowers/master/2.md'}
        tags={['R', 'Data-Science']}
      />
    </div>
  );
};

export default Article;
