import { Component } from "react";

class FormTextArea extends Component {
    render() {
        const { className, id, label, required } = this.props;
        return (
            <div className={className}>
                <textarea
                    className="form-control"
                    placeholder=""
                    id={id}
                    style={{ height: "100px" }}
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
