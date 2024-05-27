import { BuildButton } from '../Utils.jsx';
import '../../styles/display-data.css';

export default function DisplayData({ values, handleEditSubmit, formStatus }) {
  return (
    <>
      <div className="display-container">
        <div className="data-container">
          <div className="display-left">
            <p>School name:</p>
            <p>Study:</p>
            <p>From:</p>
            <p>To:</p>
          </div>
          <div className="display-right">
            <p>{values.schoolName}</p>
            <p>{values.study}</p>
            <p>{values.from}</p>
            <p>{values.to}</p>
          </div>
        </div>
        <BuildButton onClick={handleEditSubmit} formStatus={formStatus} />
      </div>
    </>
  );
}
