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
                    id="pd-firstName"
                    name="pd-firstName"
                    label="First Name"
                    required
                />

                <FormInput
                    className="col-md-6 col-xxl-4 form-floating"
                    type="text"
                    id="pd-lastName"
                    name="pd-lastName"
                    label="Last Name"
                    required
                />

                <FormInput
                    className="col-md-12 col-lg-6 col-xxl-4 form-floating"
                    type="text"
                    id="pd-title"
                    name="pd-title"
                    label="Title"
                />

                <FormInput
                    className="col-md-12 col-lg-6 col-xxl-6 form-floating"
                    type="tel"
                    id="pd-phoneNumber"
                    name="pd-phoneNumber"
                    label="Phone Number"
                    required
                />

                <FormInput
                    className="col-md-12 col-xxl-6 form-floating"
                    type="email"
                    id="pd-email"
                    name="pd-email"
                    label="Email"
                    required
                />

                <h3 className="h5 mb-0">Personal Description/Summary</h3>

                <FormTextArea
                    className="form-floating"
                    id="pd-description"
                    name="pd-description"
                    label="Description"
                    required
                />

                <h3 className="h5 mb-0">Address</h3>

                <FormInput
                    className="mt-2 col-12 form-floating"
                    type="text"
                    id="pd-address-line1"
                    name="pd-address-line1"
                    label="Address Line 1"
                    required
                />

                <FormInput
                    className="col-12 form-floating"
                    type="text"
                    id="pd-address-line2"
                    name="pd-address-line2"
                    label="Address Line 2"
                />

                <FormInput
                    className="col-md-4 col-lg-5 form-floating"
                    type="text"
                    id="pd-city"
                    name="pd-city"
                    label="City"
                    required
                />

                <FormInput
                    className="col-md-4 col-lg-5 form-floating"
                    type="text"
                    id="pd-country"
                    name="pd-country"
                    label="Country"
                    required
                />

                <FormInput
                    className="col-md-4 col-lg-2 form-floating"
                    type="number"
                    id="pd-zipCode"
                    name="pd-zipCode"
                    label="Zip Code"
                    min={0}
                    required
                />

                <h3 className="h5 mb-0">Online Presence (optional)</h3>

                <FormInput
                    className="col-12 form-floating"
                    type="url"
                    id="pd-website"
                    name="pd-website"
                    label="Website"
                />

                <FormInput
                    className="col-12 form-floating"
                    type="url"
                    id="pd-linkedin"
                    name="pd-linkedin"
                    label="Linkedin"
                />
            </div>
        );
    }
}

export default PersonalDataForm;
