import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import marked from 'marked';
import DOMPurify from 'dompurify';
import hljs from 'highlight.js/lib/core';
import r from 'highlight.js/lib/languages/r';

import Loader from '../components/Loader';

import articleData from '../assets/ArticleData.json';
import 'highlight.js/styles/dracula.css';
import '../css/ArticlePage.css';

hljs.registerLanguage('r', r);

const ArticlePage = () => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);

  let {id} = useParams();
  let options = {
    highlight: code => hljs.highlight('r', code).value
  };

  useEffect(() => {
    axios
      .get(articleData[id].url)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(e => alert(e));
  }, [id]);

  return loading ? (
    <Loader />
  ) : (
    <div className="ArticlePage-container">
      <div
        className="Article-content"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(marked(data, options))
        }}
      />
    </div>
  );
};

export default ArticlePage;
