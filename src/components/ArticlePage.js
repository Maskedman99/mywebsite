import React, {useEffect, useState} from 'react';
import marked from 'marked';
import DOMPurify from 'dompurify';
import axios from 'axios';

const ArticlePage = ({url}) => {
  const [data, setData] = useState('');

  useEffect(() => {
    axios
      .get(url)
      .then(response => setData(response.data))
      .catch(e => alert('Error', e.message));
  }, [url]);

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(marked(data))
        }}
      />
    </div>
  );
};

export default ArticlePage;
