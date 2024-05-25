import { useState } from 'react';
import AddForm from './AddForm.jsx';
import DisplayData from './DisplayData.jsx';

export default function GeneralInfo() {
  const [formStatus, setFormStatus] = useState('add');

  const [inputValues, setInputValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  function handleChange(inputName, newValue) {
    setInputValues((prevValues) => ({ ...prevValues, [inputName]: newValue }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormStatus('added');
  }

  return (
    <>
      <h2>General information</h2>
      <div className="form-container">
        {formStatus === 'add' && (
          <AddForm
            values={inputValues}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
        {formStatus === 'added' && <DisplayData values={inputValues} />}
      </div>
    </>
  );
}
