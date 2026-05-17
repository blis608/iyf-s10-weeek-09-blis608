function Input({ label, error, type = 'text', placeholder, value, onChange, onBlur, name, required = false }) {
  return (
    <div>
      {label && (
        <label htmlFor={name}>
          {label} {required && <span>*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="error-text">{error}</p>}
    </div>
  );
}

export default Input;
