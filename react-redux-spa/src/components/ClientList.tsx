import { FormEvent, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CompanyModel from "../models/CompanyModel";
import { Link } from "react-router-dom";
import { getAllCompanies } from "../slices/companiesListSlice";
import { AppDispatch } from "../store";

export const ClientList = () => {

    const [searchTitle, setSearchTitle] = useState("");
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

    const onChangeSearchTitle = (event: FormEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setSearchTitle(value);
    };

    const findByTitle = () => {
        //dispatch(findTutorialsByTitle({ title: searchTitle }));
    };
    
    const setActiveCompany = (company: CompanyModel, index: number) => {
        setCurrentCompany(company);
        setCurrentIndex(index);
    };

    return (
       
            <div className="list row">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by title"
                            value={searchTitle}
                            onChange={onChangeSearchTitle}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={findByTitle}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
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
    
                    {/* <button
                        className="m-3 btn btn-sm btn-danger"
                        onClick={removeAllTutorials}
                    >
                        Remove All
                    </button> */}
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
                                className="badge badge-warning"
                            >
                                Edit
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Please click on a Company...</p>
                        </div>
                    )}
                </div>
            </div>
    )

}

export default ClientList
