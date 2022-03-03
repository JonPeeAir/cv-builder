import { Component } from "react";
import FormInput from "../form-components/formInput";
import FormToggle from "../form-components/formToggle";
import FormButton from "../form-components/formButton";

class ExperienceForm extends Component {
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
                    id={"job-" + this.props.id + "-role"}
                    name={"job-" + this.props.id + "-role"}
                    label="Role/Position"
                    required
                />

                <FormInput
                    className="col-12 form-floating"
                    type="text"
                    id={"job-" + this.props.id + "-company"}
                    name={"job-" + this.props.id + "-company"}
                    label="Company/Organization"
                    required
                />

                <FormInput
                    className="col-12 form-floating"
                    type="text"
                    id={"job-" + this.props.id + "-location"}
                    name={"job-" + this.props.id + "-location"}
                    label="Location"
                    required
                />

                <FormInput
                    className="col-md-5 form-floating"
                    type="date"
                    id={"job-" + this.props.id + "-date-from"}
                    name={"job-" + this.props.id + "-date-from"}
                    label="From"
                    required
                />

                <FormInput
                    className="col-md-5 form-floating"
                    type="date"
                    id={"job-" + this.props.id + "-date-to"}
                    name={"job-" + this.props.id + "-date-to"}
                    label="To"
                    required={!this.state.ongoing}
                    disabled={this.state.ongoing}
                />

                <FormToggle
                    className="col-md-2 form-check form-switch align-self-center"
                    id={"job-" + this.props.id + "-ongoing"}
                    name={"job-" + this.props.id + "-date-to"}
                    value="Ongoing"
                    label="Ongoing"
                    onChange={this.setOngoingTo}
                />

                {this.props.showDelBtn && (
                    <FormButton
                        className="d-grid col-6 mx-auto"
                        buttonStyle="btn-outline-danger"
                        label="Delete Experience"
                        onClick={this.handleDelete}
                    />
                )}
            </div>
        );
    }
}

export default ExperienceForm;
