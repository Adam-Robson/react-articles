import React from 'react';
import { useParams } from 'react-router-dom';
import articles from '../../article-content';

export default function Articles() {
  const { id } = useParams();
  const targetArticle = articles.find(article => article.id === id);
  const { name, title, content } = targetArticle;
  return (
    <>
      <h1>{ title }</h1>
      {
        content.map(
          (par) => (
            <p key={ name }>{ par }</p>
          ))    
      }
    </>
  );
}
