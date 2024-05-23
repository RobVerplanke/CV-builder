import { useId } from 'react';
import { BuildInputField, BuildButton } from '../Utils.jsx';

export default function AddForm() {
  return (
    <form>
      <BuildInputField labelName="School name" type="text" id={useId()} />
      <BuildInputField labelName="Study" type="text" id={useId()} />
      <BuildInputField labelName="From" type="date" id={useId()} />
      <BuildInputField labelName="To" type="date" id={useId()} />
      <BuildButton name="Add" />
    </form>
  );
}
