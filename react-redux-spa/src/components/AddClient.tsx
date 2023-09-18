import { FormEvent, useState } from "react";
import CompanyModel from "../models/CompanyModel";
import { useDispatch, useSelector } from "react-redux";
import { createCompany, setLoadingStatus, updateCompany } from "../slices/companiesSlice";
import { AppDispatch } from "../store";
import { fetchStatus } from "../models/FetchStatus";
import { StateModel } from "../models/SateModel";
import { ToastContainer, toast } from 'react-toastify';

export const AddClient = () => {

    const state = useSelector((state: any) => {
        return state.companies;
    });

    const notify = () => toast("Success");

    const [company, setCompany] = useState(state.currentCompany);

    const dispatch = useDispatch<AppDispatch>();

    if (state.loadingStatus === fetchStatus.success) {
        notify();
    }

    const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
        if (state.loadingStatus !== fetchStatus.idle) {
            dispatch(setLoadingStatus());
        }

        const { name, value } = event.currentTarget;
        setCompany({ ...company, [name]: value });
    };

    const saveTutorial = () => {

        if (state.currentCompany.id === null) {
            dispatch(createCompany(company));
        } else {
            let companyUpdate = { ...company };
            companyUpdate.id = state.currentCompany.id;
            setCompany(companyUpdate)
            dispatch(updateCompany(companyUpdate));
        }
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
                                        required
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
                                        required
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
                                        required
                                        value={company.contactName || ''}
                                        onChange={handleInputChange}
                                        name="contactName"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="role">Role</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="role"
                                        required
                                        value={company.role || ''}
                                        onChange={handleInputChange}
                                        name="role"
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
                        <button onClick={saveTutorial} className="btn btn-success" style={{ width: "200px", margin: "10px"}}>
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
                    <div className="col-6" style={{ padding: "10px", color: "red"}}>

                        {state.loadingStatus === fetchStatus.error ? (
                            <span>
                                Sorry there was an error saving company details
                            </span>
                        ) : (
                            null
                        )}
                    </div>
                </div>

            </div>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="light"
            />

        </div>
    );
};

export default AddClient