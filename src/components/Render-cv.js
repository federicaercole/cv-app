import { Component } from "react";

class Render extends Component {

    render() {
        const { data, onClick } = this.props;
        return (
            <>
                <h1>{data.info.name}</h1>
                <h2>{data.info.jobTitle}</h2>
                <p>{data.info.summary}</p>
                <ul>
                    <li>{data.info.email}</li>
                    <li>{data.info.phone}</li>
                </ul>
                <button type="submit" onClick={onClick}>Edit CV</button>
            </>
        )
    }

}

export default Render;