function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-message">
      <span>⚠️</span>
      <div>
        <p>{message}</p>
        {onRetry && (
          <button type="button" onClick={onRetry}>
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}

export default ErrorMessage;
