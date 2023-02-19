import { Component } from "react";
import Render from "./components/Render-cv";
import Info from "./components/Info";
import Education from "./components/Education";
import Work from "./components/Work";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editable: true,

      info: {
        name: "",
        jobTitle: "",
        summary: "",
        email: "",
        phone: "",
      },
      education: {
        startDateEd: "",
        endDateEd: "",
        studyTitle: "",
        schoolName: "",
        summaryEd: "",
      },
      work: {
        startDateWo: "",
        endDateWO: "",
        companyName: "",
        position: "",
        summaryWo: "",
      },
      skill: {
        skillName: "",
        summarySk: "",
      },
    }
  }

  toggleEdit = (e) => {
    e.preventDefault();
    this.setState(prevState =>
    ({
      editable: !prevState.editable,
    }));
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      info: {
        ...this.state.info,
        [e.target.name]: e.target.value,
      },
      education: {
        ...this.state.education,
        [e.target.name]: e.target.value,
      },
      work: {
        ...this.state.work,
        [e.target.name]: e.target.value,
      },
      skill: {
        ...this.state.skill,
        [e.target.name]: e.target.value,
      }
    });
  }

  render() {
    if (this.state.editable) {
      return (
        <>
          <h1>CV app</h1>
          <form>
            <h2>Personal information</h2>
            <Info data={this.state.info} onChange={this.handleChange} />
            <h2>Education</h2>
            <Education data={this.state.education} onChange={this.handleChange} />
            <h2>Work History</h2>
            <Work data={this.state.work} onChange={this.handleChange} />
            {/* <h2>Skills</h2>
            <Input data={this.state.skill} onChange={this.handleChange} /> */}
          </form>
          <button type="submit" onClick={this.toggleEdit}>Save CV</button>
        </>)
    } else {
      return <Render data={this.state} onClick={this.toggleEdit} />
    }
  }
}

export default App;
