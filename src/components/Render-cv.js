import { Component, Fragment } from "react";

class Render extends Component {

    render() {
        const { info, work, education, skill, onClick } = this.props;
        return (
            <div className="preview">
                <section className="primary-column">
                    <h1>{info.name}</h1>
                    <h2>{info.jobTitle}</h2>
                    <p>{info.summary}</p>

                    <h2>Work experience</h2>
                    {work.map((item) => {
                        return <Fragment key={item.id}>
                            <h3><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                                <path fill="#04105b" d="M30 8h-8v-2c0-1.1-0.9-2-2-2h-8c-1.1 0-2 0.9-2 2v2h-8c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2zM12 6.004c0.001-0.001 0.002-0.003 0.004-0.004h7.993c0.001 0.001 0.003 0.002 0.004 0.004v1.996h-8v-1.996zM30 16h-4v3c0 0.55-0.45 1-1 1h-2c-0.55 0-1-0.45-1-1v-3h-12v3c0 0.55-0.45 1-1 1h-2c-0.55 0-1-0.45-1-1v-3h-4v-2h28v2z"></path>
                            </svg>{item.position}</h3>
                            <h4>{item.companyName}<span>{item.dateWo}</span></h4>
                            <p>{item.summaryWo}</p>
                        </Fragment>
                    })}

                    <h2>Education</h2>
                    {education.map((item) => {
                        return <Fragment key={item.id}>
                            <h3 key={item.id}><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                                <path fill="#04105b" d="M28 4v26h-21c-1.657 0-3-1.343-3-3s1.343-3 3-3h19v-24h-20c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24v-28h-2z"></path>
                                <path fill="#04105b" d="M7.002 26v0c-0.001 0-0.001 0-0.002 0-0.552 0-1 0.448-1 1s0.448 1 1 1c0.001 0 0.001-0 0.002-0v0h18.997v-2h-18.997z"></path>
                            </svg>{item.studyTitle}</h3>
                            <h4>{item.schoolName}<span>{item.dateEd}</span></h4>
                            <p>{item.summaryEd}</p>
                        </Fragment>
                    })}
                </section>

                <section className="secondary-column">
                    <h2>Contact</h2>
                    <ul>
                        <li><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 32 32">
                            <path fill="#fff" d="M29 4h-26c-1.65 0-3 1.35-3 3v20c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-20c0-1.65-1.35-3-3-3zM12.461 17.199l-8.461 6.59v-15.676l8.461 9.086zM5.512 8h20.976l-10.488 7.875-10.488-7.875zM12.79 17.553l3.21 3.447 3.21-3.447 6.58 8.447h-19.579l6.58-8.447zM19.539 17.199l8.461-9.086v15.676l-8.461-6.59z"></path>
                        </svg>{info.email}</li>
                        <li><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 32 32">
                            <path fill="#fff" d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z"></path>
                        </svg>{info.phone}</li>
                        <li>{info.website}</li>
                        <li>{info.linkedin}</li>
                    </ul>

                    <h2>Skills</h2>
                    <ul className="skills">
                        {skill.map((item) => <li key={item.id}><span>{item.skillName}</span>: {item.summarySk}</li>)}
                    </ul>
                </section>
                <button type="submit" onClick={onClick}>Edit CV</button>
            </div >
        )
    }

}

export default Render;