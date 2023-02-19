import { Component } from "react";

class Education extends Component {

    // constructor(props) {
    //     super(props)
    // }

    render() {
        const { data, onChange } = this.props;

        return (
            <>
                <label htmlFor="startDateEd">Start date</label>
                <input type="text" id=" startDateEd" name="startDateEd" defaultValue={data.startDateEd} onChange={(e) => onChange(e)} />

                <label htmlFor="endDateEd">End Date</label>
                <input type="endDateEd" id="endDateEd" name="endDateEd" defaultValue={data.endDateEd} onChange={(e) => onChange(e)} />

                <label htmlFor="studyTitle">Title of Study</label>
                <input type="text" id="studyTitle" name="studyTitle" defaultValue={data.studyTitle} onChange={(e) => onChange(e)} />

                <label htmlFor="schoolName">School Name</label>
                <input type="text" id="schoolName" name="schoolName" defaultValue={data.schoolName} onChange={(e) => onChange(e)} />

                <label htmlFor="summaryEd">Summary</label>
                <textarea id="summaryEd" name="summaryEd" defaultValue={data.summaryEd} onChange={(e) => onChange(e)}></textarea>
            </>)
    }
}

export default Education;