import React from 'react';

import ArticlePage from '../components/ArticlePage';

const Article = () => {
  return (
    <div style={{display: 'flex', flex: 1}}>
      <ArticlePage url={'https://raw.githubusercontent.com/Maskedman99/Iris-Flowers/master/1.md'}/>
    </div>
  );
};

export default Article;
