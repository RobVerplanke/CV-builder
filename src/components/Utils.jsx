import '../styles/form.css';

export function BuildInputField({
  name,
  value,
  labelName,
  type,
  id,
  onChange,
}) {
  return (
    <>
      <div className="input-line">
        <label htmlFor={id}>{labelName}: </label>
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => {
            onChange(name, e.target.value);
          }}
        />
      </div>
    </>
  );
}

export function BuildButton({ name, onClick }) {
  return (
    <button type="submit" onClick={onClick}>
      {name}
    </button>
  );
}
