import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/?rest_route=/wp/v2/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Slug</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
      {posts && posts.map(post => (
        <tr key={post.id}>
          <td>{post.slug}</td>
          <td>{post.title.rendered}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}

export default App;
