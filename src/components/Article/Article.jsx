import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import articles from '../../article-content';
import CommentsList from '../CommentsList';

export default function Articles() {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  const { id } = useParams();
  useEffect(() => {
    const loadArticleInfo = async () => {
      const response = await axios.get(`/api/articles/${id}`);
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    };
    loadArticleInfo();
  });


  
  const targetArticle = articles.find(article => article.id === id);

  const addUpVote = async () => {
    const response = await axios.put(`/api/articles/${id}/upvote`);
    const updatedArticle = response.data;
    setArticleInfo(updatedArticle);
  };

  if (!targetArticle) {
    return <NotFound />;
  }

  const { name, title, content } = targetArticle;
  
  return (
    <>
      <h1>{ title }</h1>
      <div className="upvotes-section">
        <button onClick={ addUpVote }>upvote</button>
        <p>This article has { articleInfo.upvotes } upvote(s).</p>
      </div>
      <CommentsList comments={ articleInfo.comments } />

      {
        content.map(
          (par) => (
            <p key={ name }>{ par }</p>
          ))    
      }
    </>
  );
}
