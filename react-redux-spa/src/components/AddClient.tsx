import { FormEvent, useState } from "react";
import CompanyModel from "../models/CompanyModel";
import { useDispatch, useSelector } from "react-redux";
import { createCompany, updateCompany } from "../slices/companiesSlice";
import { AppDispatch } from "../store";
import { fetchStatus } from "../models/FetchStatus";

export const AddClient = () => {
   
    const state = useSelector((state: any) => {
        return state.companies;
    });

    const [company, setCompany] = useState(new CompanyModel());

    const dispatch = useDispatch<AppDispatch>();
    
    const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        setCompany({ ...company, [name]: value });
    };

    const saveTutorial = () => {

        if(state.currentCompany.id === null) {
            dispatch(createCompany(company));
        } else {
            dispatch(updateCompany(company));
        }

        setCompany(state.currentCompany);
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