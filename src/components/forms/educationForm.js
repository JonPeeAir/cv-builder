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
                    id={"school-" + this.props.id + "-degree"}
                    name={"school-" + this.props.id + "-degree"}
                    label="Degree/Certification"
                    required
                />

                <FormInput
                    className="col-12 form-floating"
                    type="text"
                    id={"school-" + this.props.id + "-name"}
                    name={"school-" + this.props.id + "-name"}
                    label="University/School/Organization"
                    required
                />

                <FormInput
                    className="col-12 form-floating"
                    type="text"
                    id={"school-" + this.props.id + "-location"}
                    name={"school-" + this.props.id + "-location"}
                    label="Location"
                    required
                />

                <FormInput
                    className="col-md-5 form-floating"
                    type="date"
                    id={"school-" + this.props.id + "-date-from"}
                    name={"school-" + this.props.id + "-date-from"}
                    label="From"
                    required
                />

                <FormInput
                    className="col-md-5 form-floating"
                    type="date"
                    id={"school-" + this.props.id + "-date-to"}
                    name={"school-" + this.props.id + "-date-to"}
                    label="To"
                    required={!this.state.ongoing}
                    disabled={this.state.ongoing}
                />

                <FormToggle
                    className="col-md-2 form-check form-switch align-self-center"
                    id={"school-" + this.props.id + "-ongoing"}
                    name={"school-" + this.props.id + "-date-to"}
                    value="Ongoing"
                    label="Ongoing"
                    onChange={this.setOngoingTo}
                />

                {this.props.showDelBtn && (
                    <FormButton
                        className="d-grid col-6 mx-auto"
                        buttonStyle="btn-outline-danger"
                        label="Delete Education"
                        onClick={this.handleDelete}
                    />
                )}
            </div>
        );
    }
}

export default EducationForm;
