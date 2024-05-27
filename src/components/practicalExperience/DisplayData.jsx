import { BuildButton } from '../Utils.jsx';
import '../../styles/display-data.css';

export default function DisplayData({ values, handleEditSubmit, formStatus }) {
  return (
    <>
      <div className="display-container">
        <div className="data-container">
          <div className="display-left">
            <p>Company name:</p>
            <p>Function:</p>
            <p>Main responsibilities:</p>
            <p>From:</p>
            <p>To:</p>
          </div>
          <div className="display-right">
            <p>{values.companyName}</p>
            <p>{values.function}</p>
            <p>{values.responsibilities}</p>
            <p>{values.from}</p>
            <p>{values.to}</p>
          </div>
        </div>
        <BuildButton onClick={handleEditSubmit} formStatus={formStatus} />
      </div>
    </>
  );
}
