import { Component } from "react";

class Education extends Component {

    // constructor(props) {
    //     super(props)
    // }

    render() {
        const { education, onChange, onClick } = this.props;

        return (
            <div>
                <label htmlFor={"dateEd" + education.id}>Date interval</label>
                <label htmlFor={"studyTitle" + education.id}>Title of Study</label>

                <input type="text" id={"dateEd" + education.id} name="date" defaultValue={education.date} onChange={(e) => onChange(e, education.id)} />
                <input type="text" id={"studyTitle" + education.id} name="studyTitle" defaultValue={education.studyTitle} onChange={(e) => onChange(e, education.id)} />

                <label htmlFor={"schoolName" + education.id}>School Name</label>
                <input type="text" id={"schoolName" + education.id} name="schoolName" defaultValue={education.schoolName} onChange={(e) => onChange(e, education.id)} />

                <label htmlFor={"summaryEd" + education.id}>Summary</label>
                <textarea id={"summaryEd" + education.id} name="summary" defaultValue={education.summary} onChange={(e) => onChange(e, education.id)}></textarea>
                <button type="button" className="delete" onClick={() => onClick(education.id)}>Delete this education block</button>
            </div>)
    }
}

export default Education;