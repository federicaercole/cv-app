import { Component } from "react";

class Skill extends Component {

    render() {
        const { skill, onChange, onClick } = this.props;

        return (
            <div>
                <label htmlFor={"skillName" + skill.id}>Skill</label>
                <input type="text" id={"skillName" + skill.id} name="skillName" defaultValue={skill.skillName} onChange={(e) => onChange(e, skill.id)} />

                <button type="button" className="delete" onClick={() => onClick(skill.id)}>Delete this skill</button>
            </div>
        )
    }
}

export default Skill;