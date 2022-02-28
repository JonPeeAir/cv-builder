import { Component } from "react";
import FormInput from "../form-components/formInput";
import FormToggle from "../form-components/formToggle";
import FormButton from "../form-components/formButton";

class ExperienceForm extends Component {
    constructor(props) {
        super(props);

        // "this" binder
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.onDelete(this.props.id);
    }

    render() {
        return (
            <div className="mb-3 row g-3">
                <FormInput
                    className="col-12 form-floating"
                    type="text"
                    id={"role-" + this.props.id}
                    label="Role/Position"
                    required
                />

                <FormInput
                    className="col-12 form-floating"
                    type="text"
                    id={"company-" + this.props.id}
                    label="Company/Organization"
                    required
                />

                <FormInput
                    className="col-12 form-floating"
                    type="text"
                    id={"job-location-" + this.props.id}
                    label="Location"
                    required
                />

                <FormInput
                    className="col-md-5 form-floating"
                    type="date"
                    id={"job-date-from-" + this.props.id}
                    label="From"
                    required
                />

                <FormInput
                    className="col-md-5 form-floating"
                    type="date"
                    id={"job-date-to-" + this.props.id}
                    label="To"
                    required
                />

                <FormToggle
                    className="col-md-2 form-check form-switch align-self-center"
                    id={"job-ongoing-" + this.props.id}
                    label="Ongoing"
                />

                {this.props.showDelBtn && (
                    <FormButton
                        className="d-grid col-6 mx-auto"
                        label="Delete Experience"
                        onClick={this.handleDelete}
                    />
                )}
            </div>
        );
    }
}

export default ExperienceForm;
