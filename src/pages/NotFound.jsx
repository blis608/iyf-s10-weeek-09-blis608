import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1 className="page-title">Page not found</h1>
      <p>We couldn't locate the page you're looking for.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default NotFound;
