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
        name="companyName"
        value={values.companyName}
        labelName="Company name"
        type="text"
        id={useId()}
        onChange={handleChange}
      />
      <BuildInputField
        name="function"
        value={values.function}
        labelName="Function"
        type="text"
        id={useId()}
        onChange={handleChange}
      />
      <BuildInputField
        name="responsibilities"
        value={values.responsibilities}
        labelName="Main responsibilities"
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
