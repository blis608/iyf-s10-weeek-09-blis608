import { useState } from 'react';
import useForm from '../hooks/useForm.js';
import { Button } from '../components/shared/index.js';
import ErrorMessage from '../components/ErrorMessage.jsx';

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Title is required';
  }
  if (!values.body) {
    errors.body = 'Body is required';
  }
  if (!values.author) {
    errors.author = 'Author is required';
  }
  return errors;
};

function CreatePost() {
  const [submitted, setSubmitted] = useState(false);
  const { values, errors, touched, handleChange, handleBlur, reset } =
    useForm(
      { title: '', body: '', author: '' },
      validate
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setSubmitted(true);
    reset();
  };

  return (
    <div>
      <h1 className="page-title">Create Post</h1>
      <p className="page-note">
        This form demonstrates custom hook validation and local form state.
      </p>

      {submitted && (
        <ErrorMessage
          message="Your post was created locally. Refresh to submit another one."
        />
      )}

      <form onSubmit={handleSubmit} className="section-grid">
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.title && errors.title && (
            <p className="error-text">{errors.title}</p>
          )}
        </div>

        <div>
          <label htmlFor="author">Author</label>
          <input
            id="author"
            name="author"
            value={values.author}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.author && errors.author && (
            <p className="error-text">{errors.author}</p>
          )}
        </div>

        <div>
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            name="body"
            rows="6"
            value={values.body}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.body && errors.body && (
            <p className="error-text">{errors.body}</p>
          )}
        </div>

        <Button type="submit" variant="primary">
          Create Post
        </Button>
      </form>
    </div>
  );
}

export default CreatePost;
