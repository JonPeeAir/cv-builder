import { Component } from "react";

class FormInput extends Component {
    render() {
        const { className, type, id, label, min, required, disabled } =
            this.props;
        return (
            <div className={className}>
                <input
                    type={type}
                    className="form-control"
                    id={id}
                    placeholder=""
                    min={min}
                    required={required}
                    disabled={disabled}
                />
                <label htmlFor={id} className="form-label ms-2">
                    {label}
                    {required && <span style={{ color: "red" }}> *</span>}
                </label>
            </div>
        );
    }
}

export default FormInput;
