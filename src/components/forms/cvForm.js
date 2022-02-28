import { Component } from "react";
import PersonalDataForm from "./personalDataForm";
import ExperienceGroup from "../form-groups/experienceGroup";
import EducationGroup from "../form-groups/educationGroup";

class CVForm extends Component {
    render() {
        const { className } = this.props;

        return (
            <form className={className} noValidate>
                <h2 className="h4">Personal Details</h2>
                <PersonalDataForm className="col ms-0 mt-0 mb-5 p-0 row g-3" />

                <h2 className="h4">Experience</h2>
                <ExperienceGroup className="col mb-5" />

                <h2 className="h4">Education</h2>
                <EducationGroup className="col mb-5" />
            </form>
        );
    }
}

export default CVForm;
