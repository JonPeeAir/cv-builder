import { Component } from "react";

class FormButton extends Component {
    render() {
        const { className, label, onClick } = this.props;
        return (
            <div className={className}>
                <button
                    className="btn btn-outline-secondary btn-lg fw-bold"
                    type="button"
                    onClick={onClick}
                >
                    {label}
                </button>
            </div>
        );
    }
}

export default FormButton;
