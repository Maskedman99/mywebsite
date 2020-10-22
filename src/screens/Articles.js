import ArticleCard from '../components/ArticleCard';
import articleData from '../assets/ArticleData.json';
import '../css/Article.css';

const Article = () => {
  return (
    <div className="Article-container">
      {articleData.map((item, key) => (
        <ArticleCard heading={item.heading} tags={item.tags} id={key} />
      ))}
    </div>
  );
};

export default Article;
