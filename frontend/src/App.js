import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then(res => setPosts(res.data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <div key={post._id} style={{ border: '1px solid #ccc', margin: 10, padding: 10 }}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
