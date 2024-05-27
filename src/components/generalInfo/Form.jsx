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
        name="firstName"
        value={values.firstName}
        labelName="First name"
        type="text"
        id={useId()}
        onChange={handleChange}
      />
      <BuildInputField
        name="lastName"
        value={values.lastName}
        labelName="Last name"
        type="text"
        id={useId()}
        onChange={handleChange}
      />
      <BuildInputField
        name="email"
        value={values.email}
        labelName="E-mail"
        type="text"
        id={useId()}
        onChange={handleChange}
      />
      <BuildInputField
        name="phone"
        value={values.phone}
        labelName="Phone"
        type="text"
        id={useId()}
        onChange={handleChange}
      />
      <BuildButton onClick={handleAddSubmit} formStatus={formStatus} />
    </form>
  );
}
