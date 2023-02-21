import { Component, Fragment } from "react";

class Input extends Component {

    toUpperCase(string) {
        // const stringCopy = string;
        // const splitString = stringCopy.split(/(?=[A-Z])/);
        return string;
    }

    render() {
        const { data, onChange } = this.props;
        const dataProperties = Object.keys(data);
        //switch per determinare un id diverso a seconda dei campi, da mettere a fragment label e id (ma non so se funziona per name! )
        return (
            dataProperties.map(item => {
                if (item === "summary") {
                    return (
                        <Fragment key={item}>
                            <label htmlFor={item}>{this.toUpperCase(item)}</label>
                            <textarea id={item} name={item} defaultValue={data[item]} onChange={(e) => onChange(e)}></textarea>
                        </Fragment>
                    )
                }
                else {
                    return (
                        <Fragment key={item}>
                            <label htmlFor={item}>{this.toUpperCase(item)}</label>
                            <input type="text" id={item} name={item} defaultValue={data[item]} onChange={(e) => onChange(e)} />
                        </Fragment>
                    )
                }
            })
        )
    }

}

export default Input;

