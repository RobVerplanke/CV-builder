import { useId } from 'react';
import { BuildInputField, BuildButton } from '../Utils.jsx';

export default function AddForm({ values, handleChange, handleSubmit }) {
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
      <BuildButton name="Add" onClick={handleSubmit} />
    </form>
  );
}
