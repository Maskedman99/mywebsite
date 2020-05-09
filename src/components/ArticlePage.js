import React, {useEffect, useState} from 'react';
import marked from 'marked';
import DOMPurify from 'dompurify';
import axios from 'axios';
import hljs from 'highlight.js/lib/core';
import r from 'highlight.js/lib/languages/r';

import 'highlight.js/styles/dracula.css';
import '../css/ArticlePage.css';

hljs.registerLanguage('r', r);

const ArticlePage = ({url}) => {
  const [data, setData] = useState('');
  let options = {
    highlight: code => hljs.highlight('r', code).value
  };

  useEffect(() => {
    axios
      .get(url)
      .then(response => setData(response.data))
      .catch(e => alert(e));
  }, [url]);

  return (
    <div className="Article-container">
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
