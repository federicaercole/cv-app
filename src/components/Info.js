import { Component } from "react";

class Info extends Component {

    render() {
        const { info, onChange } = this.props;
        return (
            <fieldset>
                <h2>Personal information</h2>
                <label htmlFor="name">Name</label>
                <label htmlFor="job-title">Job Title</label>

                <input type="text" id="name" name="name" defaultValue={info.name} onChange={(e) => onChange(e)} />
                <input type="text" id="job-title" name="jobTitle" defaultValue={info.jobTitle} onChange={(e) => onChange(e)} />

                <label htmlFor="email">E-mail</label>
                <label htmlFor="phone">Phone</label>

                <input type="text" id="email" name="email" defaultValue={info.email} onChange={(e) => onChange(e)} />
                <input type="tel" id="phone" name="phone" defaultValue={info.phone} onChange={(e) => onChange(e)} />

                <label htmlFor="website">Website</label>
                <label htmlFor="linkedin">LinkedIn</label>

                <input type="text" id="website" name="website" defaultValue={info.website} onChange={(e) => onChange(e)} />
                <input type="text" id="linkedin" name="linkedin" defaultValue={info.linkedin} onChange={(e) => onChange(e)} />

                <label htmlFor="summary">Summary</label>
                <textarea id="summary" name="summary" defaultValue={info.summary} onChange={(e) => onChange(e)}></textarea>
            </fieldset>)
    }
}

export default Info;