import { useId } from 'react';
import { BuildInputField, BuildButton } from '../Utils.jsx';

export default function Form({
  values,
  handleChange,
  handleAddSubmit,
  formStatus,
}) {
  return (
    <form>
      <BuildInputField
        name="schoolName"
        value={values.schoolName}
        labelName="School name"
        type="text"
        id={useId()}
        onChange={handleChange}
      />
      <BuildInputField
        name="study"
        value={values.study}
        labelName="Study"
        type="text"
        id={useId()}
        onChange={handleChange}
      />
      <BuildInputField
        name="from"
        value={values.from}
        labelName="From"
        type="date"
        id={useId()}
        onChange={handleChange}
      />
      <BuildInputField
        name="to"
        value={values.to}
        labelName="To"
        type="date"
        id={useId()}
        onChange={handleChange}
      />
      <BuildButton onClick={handleAddSubmit} formStatus={formStatus} />
    </form>
  );
}
