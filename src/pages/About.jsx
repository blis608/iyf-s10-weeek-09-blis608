function About() {
  return (
    <div>
      <h1 className="page-title">About SocialLink</h1>
      <p className="page-note">
        SocialLink is an advanced React demo built to practice effects, data fetching, routing, and reusable components.
      </p>
      <div className="card">
        <h3>Key features</h3>
        <ul>
          <li>Custom hooks for fetch, local storage, toggle, and form state</li>
          <li>React Router multi-page navigation</li>
          <li>Loading and error handling components</li>
          <li>Reusable shared components and layouts</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
