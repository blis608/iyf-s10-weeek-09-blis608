import { Link } from 'react-router-dom';

function Challenges() {
  return (
    <div>
      <h1 className="page-title">Daily Challenges</h1>
      <p className="page-note">
        This page connects the daily challenge work to the SocialLink app. It
        summarizes the task progress and makes the challenge notes part of the
        app experience.
      </p>

      <section className="card">
        <h3>What is included</h3>
        <ul>
          <li>React Router routing and page navigation</li>
          <li>Data fetching with hooks and loading/error handling</li>
          <li>Custom hooks for fetch, local storage, toggle, and form handling</li>
          <li>Reusable shared components in `src/components/shared/`</li>
          <li>Project summary located in `daily-challenges/README.md`</li>
        </ul>
      </section>

      <section className="card">
        <h3>Access the challenge notes</h3>
        <p>
          The detailed daily challenge notes are tracked in the repository under
          <code>daily-challenges/README.md</code>.
        </p>
        <p>
          Use the app navigation to continue exploring SocialLink, or open the
          repository file directly to review the challenge work.
        </p>
      </section>

      <div className="button-group">
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
}

export default Challenges;
