import { Component } from "react";

class Work extends Component {

    // constructor(props) {
    //     super(props)
    // }

    render() {
        const { work, onChange } = this.props;

        return (
            <>
                <label htmlFor={"dateWo" + work.id}>Interval</label>
                <label htmlFor={"position" + work.id}>Position</label>

                <input type="text" id={"dateWo" + work.id} name="dateWo" defaultValue={work.date} onChange={(e) => onChange(e, work.id)} />
                <input type="text" id={"position" + work.id} name="position" defaultValue={work.position} onChange={(e) => onChange(e, work.id)} />

                <label htmlFor={"companyName" + work.id}>Company Name</label>
                <input type="text" id={"companyName" + work.id} name="companyName" defaultValue={work.companyName} onChange={(e) => onChange(e, work.id)} />

                <label htmlFor={"summaryWo" + work.id}>Summary</label>
                <textarea id={"summaryWo" + work.id} name="summaryWo" defaultValue={work.summary} onChange={(e) => onChange(e, work.id)}></textarea>
            </>)
    }
}

export default Work;