import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <article className="post-card">
      <h3>{post.title}</h3>
      <p>{post.body.slice(0, 120)}...</p>
      <div className="button-group">
        <Link to={`/posts/${post.id}`} className="button-link">
          Read details
        </Link>
      </div>
    </article>
  );
}

export default PostCard;
