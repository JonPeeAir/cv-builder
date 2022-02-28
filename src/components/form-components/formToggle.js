import { Component } from "react";

class FormToggle extends Component {
    constructor(props) {
        super(props);

        // "this" binder
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e.target.checked);
    }

    render() {
        const { className, id, label } = this.props;
        return (
            <div className={className}>
                <input
                    type="checkbox"
                    className="btn-check"
                    id={id}
                    autoComplete="off"
                    onChange={this.handleChange}
                />
                <label className="btn btn-outline-primary fw-bold" htmlFor={id}>
                    {label}
                </label>
            </div>
        );
    }
}

export default FormToggle;
