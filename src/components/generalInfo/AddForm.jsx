import { useId } from 'react';
import { BuildInputField, BuildButton } from '../Utils.jsx';

export default function AddForm() {
  return (
    <form>
      <BuildInputField labelName="First name" type="text" id={useId()} />
      <BuildInputField labelName="Last name" type="text" id={useId()} />
      <BuildInputField labelName="E-mail" type="text" id={useId()} />
      <BuildInputField labelName="Phone" type="text" id={useId()} />
      <BuildButton name="Add" />
    </form>
  );
}
