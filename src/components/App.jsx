import GeneralInfo from './generalInfo/GeneralInfo.jsx';
import EcucationalExperience from './educationalExperience/EducationalExperience.jsx';
import PracticalExperience from './practicalExperience/PracticalExperience.jsx';
import Header from './Header.jsx';

import '../styles/app.css';

export default function App() {
  return (
    <div className="cv-holder">
      <Header />
      <GeneralInfo />
      <EcucationalExperience />
      <PracticalExperience />
    </div>
  );
}
