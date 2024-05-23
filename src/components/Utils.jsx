import '../styles/form.css';

export function BuildInputField({ labelName, type, id }) {
  return (
    <>
      <div className="input-line">
        <label htmlFor={id}>{labelName}: </label>
        <input id={id} type={type} />
      </div>
    </>
  );
}

export function BuildButton({ name }) {
  return <button>{name}</button>;
}
