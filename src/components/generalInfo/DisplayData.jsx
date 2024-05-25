import { BuildButton } from '../Utils.jsx';
import '../../styles/display-data.css';

export default function DisplayData({ values }) {
  return (
    <>
      <div className="display-container">
        <div className="data-container">
          <div className="display-left">
            <p>First name:</p>
            <p>Last name:</p>
            <p>E-mail:</p>
            <p>Phone:</p>
          </div>
          <div className="display-right">
            <p>{values.firstName}</p>
            <p>{values.lastName}</p>
            <p>{values.email}</p>
            <p>{values.phone}</p>
          </div>
        </div>
        <BuildButton name="Edit" />
      </div>
    </>
  );
}
