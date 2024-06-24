// src/pages/AdminPage.jsx
import React, { useState } from 'react';
import { database, storage } from '../firebase'; // Pastikan Anda telah mengimpor storage dari konfigurasi firebase
import { ref as dbRef, push, set } from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

const AdminPage = () => {
  const [title, setTitle] = useState('');
  const [imgFile, setImgFile] = useState(null);
  const [summary, setSummary] = useState('');
  const [paragraphs, setParagraphs] = useState(['']);

  const handleParagraphChange = (index, value) => {
    const newParagraphs = [...paragraphs];
    newParagraphs[index] = value;
    setParagraphs(newParagraphs);
  };

  const addParagraphField = () => {
    setParagraphs([...paragraphs, '']);
  };

  const handleFileChange = (e) => {
    setImgFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imgFile) {
      alert('Please select an image file first!');
      return;
    }

    try {
      // Upload the image file to Firebase Storage
      const imageRef = storageRef(storage, `images/${imgFile.name}`);
      await uploadBytes(imageRef, imgFile);
      const imgUrl = await getDownloadURL(imageRef);

      // Save the article data to Firebase Realtime Database
      const newArticleRef = push(dbRef(database, 'articles'));
      await set(newArticleRef, {
        title,
        img: imgUrl,
        summary,
        paragraphs
      });

      // Reset form fields
      setTitle('');
      setImgFile(null);
      setSummary('');
      setParagraphs(['']);
      alert('Article added successfully');
    } catch (err) {
      console.error('Error adding document: ', err);
      alert('Error adding article');
    }
  };

  return (
    <div>
      <h1 className="h3 mb-4 text-gray-800">Add New Article</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="form-group">
          <input type="file" className="form-control" onChange={handleFileChange} required />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Summary" value={summary} onChange={(e) => setSummary(e.target.value)} required />
        </div>
        {paragraphs.map((paragraph, index) => (
          <div key={index} className="form-group">
            <textarea
              className="form-control"
              placeholder={`Paragraph ${index + 1}`}
              value={paragraph}
              onChange={(e) => handleParagraphChange(index, e.target.value)}
              required
            />
          </div>
        ))}
        <button type="button" className="btn btn-secondary" onClick={addParagraphField}>
          Add Paragraph
        </button>
        <button type="submit" className="btn btn-primary">Add Article</button>
      </form>
    </div>
  );
};

export default AdminPage;
