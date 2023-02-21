import React, { useState } from "react";
import Render from "./components/Render-cv";
import Info from "./components/Info";
import Education from "./components/Education";
import Work from "./components/Work";
import Skill from "./components/Skill";

const App = () => {
  const [editable, setEditable] = useState(true)
  const [info, setInfo] = useState({
    name: "",
    jobTitle: "",
    summary: "",
    email: "",
    phone: "",
    website: "",
    linkedin: "",
  })

  const [education, setEducation] = useState({
    dateEd: "",
    studyTitle: "",
    schoolName: "",
    summary: "",
    id: 1
  })

  const [work, setWork] = useState({
    dateWo: "",
    companyName: "",
    position: "",
    summaryWo: "",
  })

  const [skill, setSkill] = useState({
    skillName: "",
    summarySk: "",
  })

  const toggleEdit = (e) => {
    e.preventDefault();
    setEditable(!editable);
  }

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value, })
    setEducation({ ...education, [e.target.name]: e.target.value, })
    setWork({ ...work, [e.target.name]: e.target.value, })
    setSkill({ ...skill, [e.target.name]: e.target.value, })
  };

  if (editable) {
    return (
      <>
        <h1>CV App</h1>
        <form>
          <Info info={info} onChange={handleChange} />
          <Work work={work} onChange={handleChange} />
          <Education education={education} onChange={handleChange} />
          <Skill skill={skill} onChange={handleChange} />
          <button type="submit" onClick={toggleEdit}>Save CV</button>
        </form>
      </>)
  } else {
    return <Render info={info} work={work} education={education} skill={skill} onClick={toggleEdit} />
  }
}

export default App;
