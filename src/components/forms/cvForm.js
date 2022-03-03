import { Component } from "react";
import PersonalDataForm from "./personalDataForm";
import ExperienceGroup from "../form-groups/experienceGroup";
import EducationGroup from "../form-groups/educationGroup";
import FormButton from "../form-components/formButton";

const sectionStyle = ["col-12", "mb-5"];

class CVForm extends Component {
    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();

        const form = e.target;
        form.classList.add("was-validated");

        if (!form.checkValidity()) {
            console.log("cannot submit form");
            return;
        }

        const formData = {};

        const data = new FormData(form);
        for (let element of data) {
            const elementKeys = element[0].split("-");
            const elementValue = element[1];
            let node = formData;
            for (let i = 0; i < elementKeys.length; i++) {
                if (i === elementKeys.length - 1) {
                    node[elementKeys[i]] = elementValue;
                    break;
                }
                if (!node.hasOwnProperty(elementKeys[i])) {
                    node[elementKeys[i]] = {};
                }
                node = node[elementKeys[i]];
            }
        }

        console.log(formData);
    }

    render() {
        const { className } = this.props;

        return (
            <form className={className} onSubmit={this.handleSubmit} noValidate>
                <h2 className="h4">Personal Details</h2>
                <PersonalDataForm
                    className={
                        sectionStyle.join(" ") + " ms-0 mt-0 p-0 row g-3"
                    }
                />

                <h2 className="h4">Experience</h2>
                <ExperienceGroup className={sectionStyle.join(" ")} />

                <h2 className="h4">Education</h2>
                <EducationGroup className={sectionStyle.join(" ")} />

                <FormButton
                    className="col-10 d-grid mx-auto"
                    buttonStyle="btn-outline-secondary"
                    type="button"
                    label="Preview"
                />

                <FormButton
                    className="col-10 d-grid mx-auto"
                    buttonStyle="btn-outline-primary"
                    type="submit"
                    label="Submit and Download CV"
                />
            </form>
        );
    }
}

export default CVForm;
