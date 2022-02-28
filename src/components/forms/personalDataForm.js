import { Component } from "react";
import FormInput from "../form-components/formInput";
import FormTextArea from "../form-components/formTextArea";

class PersonalDataForm extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={className}>
                <FormInput
                    className="col-md-6 col-xxl-4 form-floating"
                    type="text"
                    id="first-name"
                    label="First Name"
                    required
                />

                <FormInput
                    className="col-md-6 col-xxl-4 form-floating"
                    type="text"
                    id="last-name"
                    label="Last Name"
                    required
                />

                <FormInput
                    className="col-md-12 col-lg-6 col-xxl-4 form-floating"
                    type="text"
                    id="title"
                    label="Title"
                />

                <FormInput
                    className="col-md-12 col-lg-6 col-xxl-6 form-floating"
                    type="tel"
                    id="phone-number"
                    label="Phone Number"
                    required
                />

                <FormInput
                    className="col-md-12 col-xxl-6 form-floating"
                    type="email"
                    id="email"
                    label="Email"
                    required
                />

                <h3 className="h5 mb-0">Personal Description/Summary</h3>

                <FormTextArea
                    className="form-floating"
                    id="description"
                    label="Description"
                    required
                />

                <h3 className="h5 mb-0">Address</h3>

                <FormInput
                    className="mt-2 col-12 form-floating"
                    type="text"
                    id="address-line-1"
                    label="Address Line 1"
                    required
                />

                <FormInput
                    className="col-12 form-floating"
                    type="text"
                    id="address-line-2"
                    label="Address Line 2"
                />

                <FormInput
                    className="col-md-4 col-lg-5 form-floating"
                    type="text"
                    id="city"
                    label="City"
                    required
                />

                <FormInput
                    className="col-md-4 col-lg-5 form-floating"
                    type="text"
                    id="country"
                    label="Country"
                    required
                />

                <FormInput
                    className="col-md-4 col-lg-2 form-floating"
                    type="number"
                    id="zip-code"
                    label="Zip Code"
                    min={0}
                    required
                />

                <h3 className="h5 mb-0">Online Presence (optional)</h3>

                <FormInput
                    className="col-12 form-floating"
                    type="url"
                    id="website"
                    label="Website"
                />

                <FormInput
                    className="col-12 form-floating"
                    type="url"
                    id="linkedin"
                    label="Linkedin"
                />
            </div>
        );
    }
}

export default PersonalDataForm;
