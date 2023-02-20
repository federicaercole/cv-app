import { Component } from "react";

class Skill extends Component {

    // constructor(props) {
    //     super(props)
    // }

    // skillName: "",
    //     summarySk: "",

    render() {
        const { data, onChange } = this.props;

        return (
            <section>
                <h2>Skills</h2>
                <label htmlFor="skillName">Skill</label>
                <input type="text" id="skillName" name="skillName" defaultValue={data.skillName} onChange={(e) => onChange(e)} />

                <label htmlFor="summarySk">Summary</label>
                <textarea id="summarySk" name="summarySk" defaultValue={data.summarySk} onChange={(e) => onChange(e)}></textarea>
            </section>)
    }
}

export default Skill;