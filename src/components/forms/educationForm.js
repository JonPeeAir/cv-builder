import { Component } from "react";
import FormInput from "../form-components/formInput";
import FormToggle from "../form-components/formToggle";
import FormButton from "../form-components/formButton";

class EducationForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ongoing: false };

        // "this" binder
        this.handleDelete = this.handleDelete.bind(this);
        this.setOngoingTo = this.setOngoingTo.bind(this);
    }

    handleDelete() {
        this.props.onDelete(this.props.id);
    }

    setOngoingTo(boolean) {
        this.setState({ ongoing: boolean });
    }

    render() {
        return (
            <div className="mb-3 row g-3">
                <FormInput
                    className="col-12 form-floating"
                    type="text"
                    id={"degree-" + this.props.id}
                    label="Degree/Certification"
                    required
                />

                <FormInput
                    className="col-12 form-floating"
                    type="text"
                    id={"school-" + this.props.id}
                    label="University/School/Organization"
                    required
                />

                <FormInput
                    className="col-12 form-floating"
                    type="text"
                    id={"school-location-" + this.props.id}
                    label="Location"
                    required
                />

                <FormInput
                    className="col-md-5 form-floating"
                    type="date"
                    id={"school-date-from-" + this.props.id}
                    label="From"
                    required
                />

                <FormInput
                    className="col-md-5 form-floating"
                    type="date"
                    id={"school-date-to-" + this.props.id}
                    label="To"
                    required={!this.state.ongoing}
                    disabled={this.state.ongoing}
                />

                <FormToggle
                    className="col-md-2 form-check form-switch align-self-center"
                    id={"school-ongoing-" + this.props.id}
                    label="Ongoing"
                    onChange={this.setOngoingTo}
                />

                {this.props.showDelBtn && (
                    <FormButton
                        className="d-grid col-6 mx-auto"
                        label="Delete Education"
                        onClick={this.handleDelete}
                    />
                )}
            </div>
        );
    }
}

export default EducationForm;
