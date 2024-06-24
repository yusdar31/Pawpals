// src/pages/ArtikelSatu.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { database } from '../firebase';
import { ref, get } from 'firebase/database';

const ArtikelSatu = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const articleRef = ref(database, `articles/${id}`);
      const snapshot = await get(articleRef);
      if (snapshot.exists()) {
        setArticle(snapshot.val());
      }
    };
    fetchArticle();
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div style={{ width: '100%', maxWidth: '1181px', margin: '0 auto', padding: '20px' }}>
      <img 
        src={article.img} 
        alt="Artikel" 
        style={{ width: '100%', height: '577px', objectFit: 'cover' }} 
      />
      <div style={{ marginTop: '60px' }}>
        <h1 style={{ marginBottom: '20px' }}>{article.title}</h1>
        {article.paragraphs && article.paragraphs.map((paragraph, index) => (
          <p key={index} style={{ marginBottom: '15px', lineHeight: '1.6' }}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default ArtikelSatu;
