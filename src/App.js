import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
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

  const [education, setEducation] = useState([{
    date: "",
    studyTitle: "",
    schoolName: "",
    summary: "",
    id: uuid(),
  }])

  const [work, setWork] = useState([{
    date: "",
    companyName: "",
    position: "",
    summary: "",
    id: uuid(),
  }])

  const [skill, setSkill] = useState([{
    skillName: "",
    summary: "",
    id: uuid(),
  }])

  const toggleEdit = (e) => {
    e.preventDefault();
    setEditable(!editable);
  }

  const mapArray = (obj, id, e) => {
    if (obj.id === id) {
      return { ...obj, [e.target.name]: e.target.value, };
    }
    return obj;
  }

  const handleChangeInfo = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value, })
  };

  const handleChangeEducation = (e, id) => {
    const newEducation = education.map((obj) => mapArray(obj, id, e));
    setEducation(newEducation);
  }

  const handleChangeWork = (e, id) => {
    const newWork = work.map((obj) => mapArray(obj, id, e));
    setWork(newWork);
  }

  const handleChangeSkill = (e, id) => {
    const newSkill = skill.map((obj) => mapArray(obj, id, e));
    setSkill(newSkill);
  }

  const addSkill = () => {
    const newSkill = {
      skillName: "",
      id: uuid(),
    }

    setSkill(skill.concat(newSkill))
  }

  const addEducation = () => {
    const newEducation = {
      date: "",
      studyTitle: "",
      schoolName: "",
      summary: "",
      id: uuid(),
    }
    setEducation(education.concat(newEducation))
  }

  const addWork = () => {
    const newWork = {
      date: "",
      companyName: "",
      position: "",
      summary: "",
      id: uuid(),
    }
    setWork(work.concat(newWork))
  }

  const deleteSkill = (id) => {
    setSkill(skill.filter(obj => obj.id !== id));
  }

  const deleteWork = (id) => {
    setWork(work.filter(obj => obj.id !== id));
  }

  const deleteEducation = (id) => {
    setEducation(education.filter(obj => obj.id !== id));
  }


  if (editable) {
    return (
      <>
        <h1>CV App</h1>

        <form>
          <Info info={info} onChange={handleChangeInfo} />

          <section>
            <h2>Work History</h2>
            {work.map((item) => <Work key={item.id} work={item} onChange={handleChangeWork} onClick={deleteWork} />)}
            <button type="button" className="add" onClick={addWork}>Add a work experience block</button>
          </section>

          <section>
            <h2>Education</h2>
            {education.map((item) => <Education key={item.id} education={item} onChange={handleChangeEducation} onClick={deleteEducation} />)}
            <button type="button" className="add" onClick={addEducation}>Add an education block</button>
          </section>

          <section>
            <h2>Skills</h2>
            {skill.map((item) => <Skill key={item.id} skill={item} onChange={handleChangeSkill} onClick={deleteSkill} />)}
            <button type="button" className="add" onClick={addSkill}>Add a skill</button>
          </section>

          <button type="submit" onClick={toggleEdit}>Save CV</button>
        </form>
      </>)
  } else {
    return <Render info={info} work={work} education={education} skill={skill} onClick={toggleEdit} />
  }
}

export default App;
