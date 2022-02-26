// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
    return (
        <div className="container shadow g-5 p-5 m-5">
            <h1 className="mb-4 text-center">CV BUILDER</h1>
            <form className="row g-3 needs-validation" noValidate>
                <h2 className="h4">Personal Details</h2>

                <div className="col-md-6 col-xxl-4 form-floating">
                    <input
                        type="text"
                        className="form-control"
                        id="first-name"
                        placeholder="John"
                        required
                    />
                    <label htmlFor="first-name" className="form-label ms-2">
                        First Name<span style={{ color: "red" }}>*</span>
                    </label>
                </div>

                <div className="col-md-6 col-xxl-4 form-floating">
                    <input
                        type="text"
                        className="form-control"
                        id="last-name"
                        placeholder="Doe"
                        required
                    />
                    <label htmlFor="last-name" className="form-label ms-2">
                        Last Name<span style={{ color: "red" }}>*</span>
                    </label>
                </div>

                <div className="col-md-12 col-lg-6 col-xxl-4 form-floating">
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Web Developer"
                    />
                    <label htmlFor="title" className="form-label ms-2">
                        Title
                    </label>
                </div>

                <div className="col-md-12 col-lg-6 col-xxl-6 form-floating">
                    <input
                        type="tel"
                        className="form-control"
                        id="phone-number"
                        placeholder=""
                        required
                    />
                    <label htmlFor="phone-number" className="form-label ms-2">
                        Phone Number<span style={{ color: "red" }}>*</span>
                    </label>
                </div>

                <div className="col-md-12 col-xxl-6 form-floating">
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder=""
                        required
                    />
                    <label htmlFor="email" className="form-label ms-2">
                        Email<span style={{ color: "red" }}>*</span>
                    </label>
                </div>

                <h3 className="h5 mb-0">Personal Description/Summary</h3>
                <div className="form-floating">
                    <textarea
                        className="form-control"
                        placeholder="Description"
                        id="description"
                        style={{ height: "100px" }}
                    ></textarea>
                    <label htmlFor="description" className="form-label ms-2">
                        Description<span style={{ color: "red" }}>*</span>
                    </label>
                </div>

                <h3 className="h5 mb-0">Address</h3>

                <div className="mt-2 col-12 form-floating">
                    <input
                        type="text"
                        className="form-control"
                        id="addres-line-1"
                        placeholder=""
                        required
                    />
                    <label htmlFor="address-line-1" className="form-label ms-2">
                        Address Line 1<span style={{ color: "red" }}>*</span>
                    </label>
                </div>

                <div className="col-12 form-floating">
                    <input
                        type="text"
                        className="form-control"
                        id="addres-line-1"
                        placeholder=""
                    />
                    <label htmlFor="address-line-1" className="form-label ms-2">
                        Address Line 2
                    </label>
                </div>

                <div className="col-md-4 col-lg-5 form-floating">
                    <input
                        type="text"
                        className="form-control"
                        id="city"
                        placeholder=""
                        required
                    />
                    <label htmlFor="city" className="form-label ms-2">
                        City<span style={{ color: "red" }}>*</span>
                    </label>
                </div>

                <div className="col-md-4 col-lg-5 form-floating">
                    <input
                        type="text"
                        className="form-control"
                        id="country"
                        placeholder=""
                        required
                    />
                    <label htmlFor="country" className="form-label ms-2">
                        Country<span style={{ color: "red" }}>*</span>
                    </label>
                </div>

                <div className="col-md-4 col-lg-2 form-floating">
                    <input
                        type="number"
                        className="form-control"
                        id="zip-code"
                        placeholder=""
                        min={0}
                        required
                    />
                    <label htmlFor="zip-code" className="form-label ms-2">
                        Zip Code<span style={{ color: "red" }}>*</span>
                    </label>
                </div>

                <h3 className="h5 mb-0">Socials (optional)</h3>
                <div className="col-12 form-floating">
                    <input
                        type="url"
                        className="form-control"
                        id="linkedin"
                        placeholder=""
                    />
                    <label htmlFor="linkedin" className="form-label ms-2">
                        Linkedin
                    </label>
                </div>
                <div className="d-grid col-6 mx-auto">
                    <button
                        className="btn btn-outline-secondary btn-lg fw-bold"
                        type="button"
                    >
                        Add Social
                    </button>
                </div>

                <h2 className="h4">Experience</h2>

                <div className="col-12 form-floating">
                    <input
                        type="text"
                        className="form-control"
                        id="role"
                        placeholder=""
                        required
                    />
                    <label htmlFor="role" className="form-label ms-2">
                        Role/Position
                        <span style={{ color: "red" }}>*</span>
                    </label>
                </div>

                <div className="col-12 form-floating">
                    <input
                        type="text"
                        className="form-control"
                        id="company"
                        placeholder=""
                        required
                    />
                    <label htmlFor="company" className="form-label ms-2">
                        Company/Organization
                        <span style={{ color: "red" }}>*</span>
                    </label>
                </div>

                <div className="col-12 form-floating">
                    <input
                        type="text"
                        className="form-control"
                        id="job-location"
                        placeholder=""
                        required
                    />
                    <label htmlFor="job-location" className="form-label ms-2">
                        Location
                        <span style={{ color: "red" }}>*</span>
                    </label>
                </div>

                <div className="col-md-5 form-floating">
                    <input
                        type="date"
                        className="form-control"
                        id="job-date-from"
                        placeholder=""
                        required
                    />
                    <label htmlFor="job-date-from" className="form-label ms-2">
                        From
                        <span style={{ color: "red" }}>*</span>
                    </label>
                </div>

                <div className="col-md-5 form-floating">
                    <input
                        type="date"
                        className="form-control"
                        id="job-date-to"
                        placeholder=""
                        required
                    />
                    <label htmlFor="job-date-to" className="form-label ms-2">
                        to
                    </label>
                </div>

                <div className="col-md-2 form-check form-switch align-self-center">
                    <input
                        type="checkbox"
                        className="btn-check"
                        id="job-ongoing-1"
                        autoComplete="off"
                    />
                    <label
                        className="btn btn-outline-primary fw-bold"
                        htmlFor="job-ongoing-1"
                    >
                        Ongoing
                    </label>
                </div>

                <div className="d-grid col-6 mx-auto">
                    <button
                        className="btn btn-outline-secondary btn-lg fw-bold"
                        type="button"
                    >
                        Add Experience
                    </button>
                </div>

                <h2 className="h4">Education</h2>

                <div className="col-12 form-floating">
                    <input
                        type="text"
                        className="form-control"
                        id="degree-1"
                        placeholder=""
                        required
                    />
                    <label htmlFor="degree-1" className="form-label ms-2">
                        Degree/Certification
                        <span style={{ color: "red" }}>*</span>
                    </label>
                </div>

                <div className="col-12 form-floating">
                    <input
                        type="text"
                        className="form-control"
                        id="school-1"
                        placeholder=""
                        required
                    />
                    <label htmlFor="school-1" className="form-label ms-2">
                        University/School/Organization
                        <span style={{ color: "red" }}>*</span>
                    </label>
                </div>

                <div className="col-12 form-floating">
                    <input
                        type="text"
                        className="form-control"
                        id="school-location-1"
                        placeholder=""
                        required
                    />
                    <label
                        htmlFor="school-location-1"
                        className="form-label ms-2"
                    >
                        Location
                        <span style={{ color: "red" }}>*</span>
                    </label>
                </div>

                <div className="col-md-5 form-floating">
                    <input
                        type="date"
                        className="form-control"
                        id="school-date-from-1"
                        placeholder=""
                        required
                    />
                    <label
                        htmlFor="school-date-from-1"
                        className="form-label ms-2"
                    >
                        From
                        <span style={{ color: "red" }}>*</span>
                    </label>
                </div>

                <div className="col-md-5 form-floating">
                    <input
                        type="date"
                        className="form-control"
                        id="school-date-to-1"
                        placeholder=""
                        required
                    />
                    <label
                        htmlFor="school-date-to-1"
                        className="form-label ms-2"
                    >
                        to
                    </label>
                </div>

                <div className="col-md-2 form-check form-switch align-self-center">
                    <input
                        type="checkbox"
                        className="btn-check"
                        id="school-ongoing-1"
                        autoComplete="off"
                    />
                    <label
                        className="btn btn-outline-primary fw-bold"
                        htmlFor="school-ongoing-1"
                    >
                        Ongoing
                    </label>
                </div>

                <div className="d-grid col-6 mx-auto">
                    <button
                        className="btn btn-outline-secondary btn-lg fw-bold"
                        type="button"
                    >
                        Add Experience
                    </button>
                </div>
            </form>
        </div>
    );
}

export default App;
