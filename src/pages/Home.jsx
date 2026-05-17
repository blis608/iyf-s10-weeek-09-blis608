import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch.js';
import PostCard from '../components/PostCard.jsx';
import Card from '../components/shared/Card/Card.jsx';

function Home() {
  const { data: posts, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  const recentPosts = Array.isArray(posts) ? posts.slice(0, 4) : [];

  return (
    <div>
      <h1 className="page-title">Welcome to SocialLink</h1>
      <p className="page-note">
        A multi-page React app for advanced hooks, routing, and API integration.
      </p>

      <section className="section-grid">
        <Card title="What you can do">
          <ul>
            <li>Browse recent posts</li>
            <li>View post details</li>
            <li>Create a demo post locally</li>
          </ul>
          <div className="button-group">
            <Link to="/posts">Browse Posts</Link>
            <Link to="/create">Create Post</Link>
          </div>
        </Card>

        <Card title="Recent posts">
          {loading && <p>Loading recent posts...</p>}
          {error && <p className="error-text">{error}</p>}
          {!loading && !error && (
            <div className="card-grid">
              {recentPosts.map((post) => (
                <article key={post.id} className="small-card">
                  <h3>{post.title}</h3>
                  <p>{post.body.slice(0, 80)}...</p>
                </article>
              ))}
            </div>
          )}
        </Card>
      </section>
    </div>
  );
}

export default Home;
