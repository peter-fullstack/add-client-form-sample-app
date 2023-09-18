import { FormEvent, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCompany, getCompanyById, setLoadingStatus, updateCompany } from "../slices/companiesSlice";
import { AppDispatch } from "../store";
import { fetchStatus } from "../models/FetchStatus";
import { useParams } from "react-router-dom";

export const EditClient = () => {

    const state = useSelector((state: any) => {
        return state.companies;
    });
    const dispatch = useDispatch<AppDispatch>();

    const [company, setCompany] = useState(state.currentCompany);

    if(company.id == null && state.currentCompany.id != null){
        setCompany(state.currentCompany);
    }

    if (state.loadingStatus === fetchStatus.success) {
        dispatch(setLoadingStatus());
    }

    const params = useParams();

    const initFetch = useCallback(() => {
        if (params.id) {
            dispatch(getCompanyById(params.id));
        }
    }, [dispatch])

    useEffect(() => {
        initFetch();
    }, [initFetch])

    const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
        if (state.loadingStatus !== fetchStatus.idle) {
            dispatch(setLoadingStatus());
        }

        const { name, value } = event.currentTarget;
        setCompany({ ...company, [name]: value });
    };

    const saveTutorial = () => {

        if (company.id === null) {
            dispatch(createCompany(company));
        } else {
            dispatch(updateCompany(company));
        }
    };

    return (
        <div className="submit-form">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Edit Company</h5>
                               
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
                        <button onClick={saveTutorial} className="btn btn-success" style={{ width: "200px", margin: "10px" }}>
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
                                <span style={{ color: "green"}}>
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

export default EditClient