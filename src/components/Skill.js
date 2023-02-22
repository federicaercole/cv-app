import { Component } from "react";

class Skill extends Component {

    render() {
        const { skill, onChange } = this.props;

        return (
            <>
                <label htmlFor={"skillName" + skill.id}>Skill</label>
                <input type="text" id={"skillName" + skill.id} name="skillName" defaultValue={skill.skillName} onChange={(e) => onChange(e, skill.id)} />

                <label htmlFor={"summarySk" + skill.id}>Summary</label>
                <textarea id={"summarySk" + skill.id} name="summarySk" defaultValue={skill.summary} onChange={(e) => onChange(e, skill.id)}></textarea>
            </>
        )
    }
}

export default Skill;