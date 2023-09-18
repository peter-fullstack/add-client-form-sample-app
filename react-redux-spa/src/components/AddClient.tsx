import { FormEvent, useState } from "react";
import CompanyModel from "../models/CompanyModel";
import { useDispatch, useSelector } from "react-redux";
import { createCompany, setLoadingStatus, updateCompany } from "../slices/companiesSlice";
import { AppDispatch } from "../store";
import { fetchStatus } from "../models/FetchStatus";
import { useNavigate } from "react-router-dom";

export const AddClient = () => {

    const state = useSelector((state: any) => {
        return state.companies;
    });

    const navigate = useNavigate();

    const [company, setCompany] = useState(new CompanyModel());

    const dispatch = useDispatch<AppDispatch>();

    if (state.loadingStatus === fetchStatus.success) {
        dispatch(setLoadingStatus());
    }

    if (state.loadingStatus === fetchStatus.success) {
        dispatch(setLoadingStatus());
        navigate("/");
    }

    const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
        if (state.loadingStatus !== fetchStatus.idle) {
            dispatch(setLoadingStatus());
        }

        const { name, value } = event.currentTarget;
        setCompany({ ...company, [name]: value });
    };

    const saveCompany = () => {
        dispatch(createCompany(company));
    };

    return (
        <div className="submit-form">
            <div className="container">
                <div className="row">
                    <div className="col-6">

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Add New Company</h5>
                                <div className="form-group">
                                    <label htmlFor="companyName">Company Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="companyName"
                                        required
                                        value={company.companyName || ''}
                                        onChange={handleInputChange}
                                        name="companyName"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address"
                                        value={company.address || ''}
                                        onChange={handleInputChange}
                                        name="address"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="city">City</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="city"
                                        value={company.city || ''}
                                        onChange={handleInputChange}
                                        name="city"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="state">State</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="state"
                                        required
                                        value={company.state || ''}
                                        onChange={handleInputChange}
                                        name="state"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Contact</h5>
                                <div className="form-group">
                                    <label htmlFor="contactName">Contact Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="contactName"
                                        value={company.contactName || ''}
                                        onChange={handleInputChange}
                                        name="contactName"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="jobTitle">Role</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="jobTitle"
                                        value={company.jobTitle || ''}
                                        onChange={handleInputChange}
                                        name="jobTitle"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        required
                                        value={company.email || ''}
                                        onChange={handleInputChange}
                                        name="email"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="mobile">Mobile</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="mobile"
                                        required
                                        value={company.mobile || ''}
                                        onChange={handleInputChange}
                                        name="mobile"
                                    />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <button onClick={saveCompany} className="btn btn-success" style={{ width: "200px", margin: "10px" }}>
                            {state.loadingStatus === fetchStatus.loading ? (
                                <div>
                                    <span className="spinner-border spinner-border-sm">
                                    </span>
                                    <span style={{ paddingLeft: "5px" }}>
                                        Saving ...
                                    </span>
                                </div>
                            ) : (
                                <span>Save</span>
                            )}
                        </button>
                    </div>
                    <div className="col-6" style={{ padding: "10px", color: "red" }}>

                        {state.loadingStatus === fetchStatus.error ? (
                            <span>
                                Sorry there was an error saving company details
                            </span>
                        ) : (
                            state.loadingStatus === fetchStatus.success ? (
                                <span style={{ color: "green" }}>
                                    Update successful
                                </span>
                            ) : (
                                null
                            )
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddClient