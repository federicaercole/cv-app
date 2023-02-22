import { Component } from "react";

class Education extends Component {

    // constructor(props) {
    //     super(props)
    // }

    render() {
        const { education, onChange } = this.props;

        return (
            <>
                <label htmlFor={"dateEd" + education.id}>Interval</label>
                <label htmlFor={"studyTitle" + education.id}>Title of Study</label>

                <input type="text" id={"dateEd" + education.id} name="dateEd" defaultValue={education.date} onChange={(e) => onChange(e, education.id)} />
                <input type="text" id={"studyTitle" + education.id} name="studyTitle" defaultValue={education.studyTitle} onChange={(e) => onChange(e, education.id)} />

                <label htmlFor={"schoolName" + education.id}>School Name</label>
                <input type="text" id={"schoolName" + education.id} name="schoolName" defaultValue={education.schoolName} onChange={(e) => onChange(e, education.id)} />

                <label htmlFor={"summaryEd" + education.id}>Summary</label>
                <textarea id={"summaryEd" + education.id} name="summaryEd" defaultValue={education.summary} onChange={(e) => onChange(e, education.id)}></textarea>
            </>)
    }
}

export default Education;