import { Component } from "react";

class Education extends Component {

    // constructor(props) {
    //     super(props)
    // }

    render() {
        const { education, onChange } = this.props;

        return (
            <section key={education.id}>
                <h2>Education</h2>
                <label htmlFor="dateEd">Interval</label>
                <label htmlFor="studyTitle">Title of Study</label>

                <input type="text" id="dateEd" name="dateEd" defaultValue={education.dateEd} onChange={(e) => onChange(e)} />
                <input type="text" id="studyTitle" name="studyTitle" defaultValue={education.studyTitle} onChange={(e) => onChange(e)} />

                <label htmlFor="schoolName">School Name</label>
                <input type="text" id="schoolName" name="schoolName" defaultValue={education.schoolName} onChange={(e) => onChange(e)} />

                <label htmlFor="summaryEd">Summary</label>
                <textarea id="summaryEd" name="summaryEd" defaultValue={education.summaryEd} onChange={(e) => onChange(e)}></textarea>
            </section>)
    }
}

export default Education;