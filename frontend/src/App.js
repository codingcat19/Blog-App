import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div style={{ padding: 50, textAlign: 'center' }}>Loading posts...</div>;
  }

  return (
    <div className="App" style={{ padding: 20, maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ color: '#333', textAlign: 'center' }}>Blog Posts Dashboard</h1>
      
      {posts.length === 0 ? (
        <div style={{ textAlign: 'center', color: '#666', marginTop: 50 }}>
          <h3>No posts yet!</h3>
          <p>Backend API running at backend:5000</p>
        </div>
      ) : (
        posts.map(post => (
          <div key={post._id} style={{
            border: '1px solid #ddd',
            borderRadius: 8,
            padding: 20,
            margin: 15,
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#2c3e50', marginBottom: 10 }}>{post.title}</h3>
            <p style={{ color: '#7f8c8d', lineHeight: 1.6 }}>{post.content}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
