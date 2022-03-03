import { Component } from "react";

class FormButton extends Component {
    render() {
        const { className, buttonStyle, type, label, onClick } = this.props;
        return (
            <div className={className}>
                <button
                    className={"btn btn-lg fw-bold " + buttonStyle}
                    type={type}
                    onClick={onClick}
                >
                    {label}
                </button>
            </div>
        );
    }
}

export default FormButton;
