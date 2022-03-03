import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { Component } from "react";
import CVForm from "./forms/cvForm";

class App extends Component {
    render() {
        return (
            <div className="container bg-white rounded-3 shadow g-5 p-5 m-5">
                <h1 className="mb-4 text-center" style={{ fontSize: "3.5rem" }}>
                    CV BUILDER
                </h1>
                <CVForm className="row g-3 needs-validation" />
            </div>
        );
    }
}

export default App;
