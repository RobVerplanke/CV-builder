import { useState } from 'react';
import Form from './Form.jsx';
import DisplayData from './DisplayData.jsx';

export default function EducationalExperience() {
  const [formStatus, setFormStatus] = useState('add');

  const [inputValues, setInputValues] = useState({
    schoolName: '',
    study: '',
    from: '',
    to: '',
  });

  function handleChange(inputName, newValue) {
    setInputValues((prevValues) => ({ ...prevValues, [inputName]: newValue }));
  }

  function handleAddSubmit(e) {
    e.preventDefault();
    setFormStatus('added');
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    setFormStatus('add');
  }

  return (
    <>
      <h2>Educational experience</h2>
      <div className="form-container">
        {formStatus === 'add' && (
          <Form
            values={inputValues}
            handleChange={handleChange}
            handleAddSubmit={handleAddSubmit}
            formStatus={formStatus}
          />
        )}
        {formStatus === 'added' && (
          <DisplayData
            values={inputValues}
            handleEditSubmit={handleEditSubmit}
            formStatus={formStatus}
          />
        )}
      </div>
    </>
  );
}
