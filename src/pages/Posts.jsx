import { useMemo, useState } from 'react';
import useFetch from '../hooks/useFetch.js';
import PostCard from '../components/PostCard.jsx';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import ErrorMessage from '../components/ErrorMessage.jsx';

function Posts() {
  const [search, setSearch] = useState('');
  const { data: posts, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  const filteredPosts = useMemo(() => {
    if (!Array.isArray(posts)) return [];
    return posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.body.toLowerCase().includes(search.toLowerCase())
    );
  }, [posts, search]);

  const handleRetry = () => window.location.reload();

  if (loading) return <LoadingSpinner text="Loading posts..." />;
  if (error) return <ErrorMessage message={error} onRetry={handleRetry} />;

  return (
    <div>
      <h1 className="page-title">Posts</h1>
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          placeholder="Search posts by title or body"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredPosts.length === 0 ? (
        <p>No posts match your search.</p>
      ) : (
        <div className="post-list">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Posts;
