import React from 'react';
import { Link } from 'react-router-dom';
import articles from '../../article-content';

export default function Articles() {
  return (
    <>
      {
        articles.map((a) => (
          <Link key={ a.id} className="article-list-item" to={`/article/${ a.id }`}>
            <h3>{ a.title }</h3>
            <p>{ a.content[0].substring(0, 150)}...</p>
          </Link>
        ))   
      }
    </>
  );  
}
