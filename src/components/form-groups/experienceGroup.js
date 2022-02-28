import { Component } from "react";
import uniqid from "uniqid";
import ExperienceForm from "../forms/experienceForm";
import FormButton from "../form-components/formButton";

class ExperienceGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showDelBtns: false,
            experienceFormIds: [uniqid.time()],
        };

        // "this" binder
        this.addExperience = this.addExperience.bind(this);
        this.deleteExperience = this.deleteExperience.bind(this);
    }

    addExperience() {
        this.setState({ showDelBtns: true });

        this.setState(prevState => {
            const newId = uniqid.time();
            const newIdList = prevState.experienceFormIds.concat(newId);

            return { experienceFormIds: newIdList };
        });
    }

    deleteExperience(id) {
        if (this.state.experienceFormIds.length === 2) {
            this.setState({ showDelBtns: false });
        }

        this.setState(prevState => {
            const newIdList = prevState.experienceFormIds.filter(formId => {
                return formId !== id;
            });

            return { experienceFormIds: newIdList };
        });
    }

    render() {
        const experienceForms = this.state.experienceFormIds.map(id => {
            return (
                <ExperienceForm
                    id={id}
                    key={id}
                    onDelete={this.deleteExperience}
                    showDelBtn={this.state.showDelBtns}
                />
            );
        });

        const { className } = this.props;

        return (
            <div className={className}>
                {experienceForms}
                <FormButton
                    className="d-grid col-6 mx-auto"
                    label="Add Experience"
                    onClick={this.addExperience}
                />
            </div>
        );
    }
}

export default ExperienceGroup;
