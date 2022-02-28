import { Component } from "react";

class FormToggle extends Component {
    render() {
        const { className, id, label } = this.props;
        return (
            <div className={className}>
                <input
                    type="checkbox"
                    className="btn-check"
                    id={id}
                    autoComplete="off"
                />
                <label className="btn btn-outline-primary fw-bold" htmlFor={id}>
                    {label}
                </label>
            </div>
        );
    }
}

export default FormToggle;
