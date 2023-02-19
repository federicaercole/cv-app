import { Component } from "react";

class Work extends Component {

    // constructor(props) {
    //     super(props)
    // }

    render() {
        const { data, onChange } = this.props;

        return (
            <>
                <label htmlFor="startDateWo">Start date</label>
                <input type="text" id=" startDateWo" name="startDateWo" defaultValue={data.startDateWo} onChange={(e) => onChange(e)} />

                <label htmlFor="endDateWo">End Date</label>
                <input type="endDateWo" id="endDateWo" name="endDateWo" defaultValue={data.endDateWo} onChange={(e) => onChange(e)} />

                <label htmlFor="position">Position</label>
                <input type="text" id="position" name="position" defaultValue={data.position} onChange={(e) => onChange(e)} />

                <label htmlFor="companyName">Company Name</label>
                <input type="text" id="companyName" name="companyName" defaultValue={data.companyName} onChange={(e) => onChange(e)} />

                <label htmlFor="summaryWo">Summary</label>
                <textarea id="summaryWo" name="summaryWo" defaultValue={data.summaryWo} onChange={(e) => onChange(e)}></textarea>
            </>)
    }
}

export default Work;