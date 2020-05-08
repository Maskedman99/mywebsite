import React from 'react';
import marked from 'marked';
import DOMPurify from 'dompurify'

const Article = () => {
        return(
            <div>
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked('# Marked in the browser\n\nRendered by **marked**.'))}} />
            </div>
        );
    }

export default Article;