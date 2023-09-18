import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CompanyModel from "../models/CompanyModel";
import { Link } from "react-router-dom";
import { AppDispatch } from "../store";
import { getAllCompanies, setLoadingStatus } from "../slices/companiesSlice";
import { fetchStatus } from "../models/FetchStatus";

export const ClientList = () => {

    const [currentIndex, setCurrentIndex] = useState(-1);
    const [currentCompany, setCurrentCompany] = useState<CompanyModel | null>(null);
    const dispatch = useDispatch<AppDispatch>();
    
    const initFetch = useCallback(() => {
        dispatch(getAllCompanies());
    }, [dispatch])

    useEffect(() => {
        initFetch();
    }, [initFetch])
    
    const state = useSelector((state: any) => {
        return state.companies;
    });

    if (state.loadingStatus === fetchStatus.success) {
        dispatch(setLoadingStatus());
    }

    const setActiveCompany = (company: CompanyModel, index: number) => {
        setCurrentCompany(company);
        setCurrentIndex(index);
    };

    return (
       
            <div className="list row">
                <div className="col-md-6">
                    <h4>Company List</h4>
    
                    <ul className="list-group">
                        {state.companies &&
                            state.companies.map((company: CompanyModel, index: number) => (
                                <li
                                    className={
                                        "list-group-item " + (index === currentIndex ? "active" : "")
                                    }
                                    onClick={() => setActiveCompany(company, index)}
                                    key={index}
                                >
                                    {company.companyName}
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="col-md-6">
                    {currentCompany ? (
                        <div>
                            <h4>Company</h4>
                            <div>
                                <label>
                                    <strong>name:</strong>
                                </label>{" "}
                                {currentCompany.companyName}
                            </div>
                            <div>
                                <label>
                                    <strong>Address:</strong>
                                </label>{" "}
                                {currentCompany.address}
                            </div>
                            <div>
                                <label>
                                    <strong>Contact Name:</strong>
                                </label>{" "}
                                {currentCompany.contactName}
                            </div>
    
                            <Link
                                to={"/company-edit/" + currentCompany.id}
                                className="badge"
                            >
                                Edit
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Select a Company</p>
                        </div>
                    )}
                </div>
            </div>
    )

}

export default ClientList
