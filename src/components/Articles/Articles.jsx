import React from 'react';
import { Link } from 'react-router-dom';
import articles from '../../article-content';

export default function Articles() {
  return (
    <>
      {
        articles.map(({ id, name, title, content }) => (
          <> 
            <Link key={ name } className="article-list-item" to={`/article/${ id }`}>
              <h3>{ title }</h3>
              <p>{ content[0].substring(0, 150)}...</p>
            </Link>
          </>
        ))   
      }
    </>
  );  
}
