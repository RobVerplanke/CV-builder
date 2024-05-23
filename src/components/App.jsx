import GeneralInfo from './generalInfo/GeneralInfo.jsx';
import EcucationalExperience from './educationalExperience/EducationalExperience.jsx';
import PracticalExperience from './practicalExperience/PracticalExperience.jsx';
import Header from './Header.jsx';

import '../styles/app.css';

export default function App() {
  const dividerStyle = {
    width: '50%',
    color: 'grey',
    height: 2,
  };
  return (
    <div className="cv-holder">
      <Header />
      <GeneralInfo />
      <EcucationalExperience />
      <PracticalExperience />
    </div>
  );
}
