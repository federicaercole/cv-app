import { Component } from "react";

class Info extends Component {

    // constructor(props) {
    //     super(props)
    // }

    render() {
        const { data, onChange } = this.props;
        return (
            <>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" defaultValue={data.name} onChange={(e) => onChange(e)} />

                <label htmlFor="email">E-mail</label>
                <input type="text" id="email" name="email" defaultValue={data.email} onChange={(e) => onChange(e)} />

                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" name="phone" defaultValue={data.phone} onChange={(e) => onChange(e)} />

                <label htmlFor="job-title">Job Title</label>
                <input type="text" id="job-title" name="jobTitle" defaultValue={data.jobTitle} onChange={(e) => onChange(e)} />

                <label htmlFor="summary">Summary</label>
                <textarea id="summary" name="summary" defaultValue={data.summary} onChange={(e) => onChange(e)}></textarea>
            </>)
    }
}

export default Info;