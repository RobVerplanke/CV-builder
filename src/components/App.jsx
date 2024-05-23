import AddGeneralInfoForm from './generalInfo/AddForm.jsx';
import AddEcucationalExperienceForm from './educationalExperience/AddForm.jsx';
import AddPracticalExperienceForm from './practicalExperience/AddForm.jsx';
import Header from './Header.jsx';

import '../styles/app.css';

export default function App() {
  return (
    <div className="cv-holder">
      <Header />
      <AddGeneralInfoForm />
      <AddEcucationalExperienceForm />
      <AddPracticalExperienceForm />
    </div>
  );
}
