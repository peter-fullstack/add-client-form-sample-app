import React, { FormEvent, useState } from "react";
import CompanyModel from "../models/CompanyModel";
import { useDispatch, useSelector } from "react-redux";
import { createCompany } from "../slices/companiesSlice";
import { AnyAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { StateModel } from "../models/SateModel";
import { fetchStatus } from "../models/FetchStatus";
// import { useDispatch } from "react-redux";
//import { createTutorial } from "../slices/clients";

export const AddClient = () => {
    const initialCompanyState: CompanyModel = {
        id: null,
        companyName: "",
        address: "",
        city: "",
        state: "",
    };

    const state = useSelector((state: any) => {
        return state.companies;
    });

    const [company, setCompany] = useState(initialCompanyState);
    const [submitted, setSubmitted] = useState(false);

    const dispatch = useDispatch<AppDispatch>();

    const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        setCompany({ ...company, [name]: value });
    };

    const saveTutorial = () => {
        const { companyName, address, city, state } = company;

        dispatch(createCompany(company));

        //         .unwrap()
        //         .then((data: CompanyModel) => {
        //             console.log(data);
        //             setCompany({
        //                 id: data.id,
        //                 address: data.address,
        //                 companyName: data.companyName,
        //                 city: data.city,
        //                 state: data.state})
        //             setSubmitted(true);
        //         })
        //         .catch(e => {
        //             console.log(e);
        //         });
        // 
    };

    const newTutorial = () => {
        setCompany(initialCompanyState);
        setSubmitted(false);
    };

    return (
        <div className="submit-form">
            <div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Company</h5>
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

                {/* <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Contact</h5>
                            <div className="form-group">
                                <label htmlFor="companyName">Contact Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="companyName"
                                    required
                                    value={tutorial.title || ''}
                                    onChange={handleInputChange}
                                    name="companyName"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="address">Role</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    required
                                    value={tutorial.description || ''}
                                    onChange={handleInputChange}
                                    name="address"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="address">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    required
                                    value={tutorial.description || ''}
                                    onChange={handleInputChange}
                                    name="address"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="address">Mobile</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    required
                                    value={tutorial.description || ''}
                                    onChange={handleInputChange}
                                    name="address"
                                />
                            </div>

                            <button onClick={saveTutorial} className="btn btn-success">
                                Save
                            </button>
                        </div>
                    </div> */}

                <button onClick={saveTutorial} className="btn btn-success" style={{width: "200px"}}>
                    {state.loadingStatus === fetchStatus.loading ? (
                        <div>
                            <span className="spinner-border spinner-border-sm">
                            </span>
                            <span style={{paddingLeft: "5px"}}>
                                Saving ...
                            </span>
                        </div>
                    ) : (
                        <span>Save</span>
                    )}
                </button>
            </div>
        </div>
    );
};

export default AddClient