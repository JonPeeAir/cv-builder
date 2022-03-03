import { Component } from "react";
import uniqid from "uniqid";
import EducationForm from "../forms/educationForm";
import FormButton from "../form-components/formButton";

class EducationGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showDelBtns: false,
            educationFormIds: [uniqid.time()],
        };

        // "this" binder
        this.addEducation = this.addEducation.bind(this);
        this.deleteEducation = this.deleteEducation.bind(this);
    }

    addEducation() {
        this.setState({ showDelBtns: true });

        this.setState(prevState => {
            const newId = uniqid.time();
            const newIdList = prevState.educationFormIds.concat(newId);

            return { educationFormIds: newIdList };
        });
    }

    deleteEducation(id) {
        if (this.state.educationFormIds.length === 2) {
            this.setState({ showDelBtns: false });
        }

        this.setState(prevState => {
            const newIdList = prevState.educationFormIds.filter(formId => {
                return formId !== id;
            });

            return { educationFormIds: newIdList };
        });
    }

    render() {
        const educationForms = this.state.educationFormIds.map(id => {
            return (
                <EducationForm
                    id={id}
                    key={id}
                    onDelete={this.deleteEducation}
                    showDelBtn={this.state.showDelBtns}
                />
            );
        });

        const { className } = this.props;

        return (
            <div className={className}>
                {educationForms}
                <FormButton
                    className="d-grid col-6 mx-auto"
                    buttonStyle="btn-outline-secondary"
                    type="button"
                    label="Add Education"
                    onClick={this.addEducation}
                />
            </div>
        );
    }
}

export default EducationGroup;
