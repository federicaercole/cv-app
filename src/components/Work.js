import { Component } from "react";

class Work extends Component {

    // constructor(props) {
    //     super(props)
    // }

    render() {
        const { work, onChange } = this.props;

        return (
            <section>
                <h2>Work History</h2>
                <label htmlFor="dateWo">Interval</label>
                <label htmlFor="position">Position</label>

                <input type="text" id="dateWo" name="dateWo" defaultValue={work.dateWo} onChange={(e) => onChange(e)} />
                <input type="text" id="position" name="position" defaultValue={work.position} onChange={(e) => onChange(e)} />

                <label htmlFor="companyName">Company Name</label>
                <input type="text" id="companyName" name="companyName" defaultValue={work.companyName} onChange={(e) => onChange(e)} />

                <label htmlFor="summaryWo">Summary</label>
                <textarea id="summaryWo" name="summaryWo" defaultValue={work.summaryWo} onChange={(e) => onChange(e)}></textarea>
            </section>)
    }
}

export default Work;