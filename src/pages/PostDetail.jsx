import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import ErrorMessage from '../components/ErrorMessage.jsx';

function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        if (!response.ok) {
          throw new Error('Failed to load post');
        }
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [postId]);

  if (loading) return <LoadingSpinner text="Loading post details..." />;
  if (error) return <ErrorMessage message={error} onRetry={() => window.location.reload()} />;
  if (!post) return <p>Post not found.</p>;

  return (
    <article>
      <Link to="/posts">← Back to Posts</Link>
      <h1 className="page-title">{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}

export default PostDetail;
