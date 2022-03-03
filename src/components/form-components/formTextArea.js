import { Component } from "react";

class FormTextArea extends Component {
    render() {
        const { className, id, name, label, required } = this.props;
        return (
            <div className={className}>
                <textarea
                    className="form-control"
                    placeholder=""
                    id={id}
                    name={name}
                    style={{ height: "100px" }}
                    required={required}
                ></textarea>
                <label htmlFor={id} className="form-label ms-2">
                    {label}
                    {required && <span style={{ color: "red" }}> *</span>}
                </label>
            </div>
        );
    }
}

export default FormTextArea;
