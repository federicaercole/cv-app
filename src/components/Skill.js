import { Component } from "react";

class Skill extends Component {

    // constructor(props) {
    //     super(props)
    // }

    // skillName: "",
    //     summarySk: "",

    render() {
        const { skill, onChange } = this.props;

        return (
            <section>
                <h2>Skills</h2>
                <label htmlFor="skillName">Skill</label>
                <input type="text" id="skillName" name="skillName" defaultValue={skill.skillName} onChange={(e) => onChange(e)} />

                <label htmlFor="summarySk">Summary</label>
                <textarea id="summarySk" name="summarySk" defaultValue={skill.summarySk} onChange={(e) => onChange(e)}></textarea>
            </section>)
    }
}

export default Skill;