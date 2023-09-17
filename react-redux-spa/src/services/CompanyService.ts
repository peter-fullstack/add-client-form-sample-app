import CompanyModel from "../models/CompanyModel";
import http from "../http-common";

const create = async (data: CompanyModel): Promise<any> => {
    return http.post("/companydetails", data);
};

const update = async (data: CompanyModel): Promise<any> => {
    return http.put("/companydetails/" + data.id, data);
};

const getAll = async (): Promise<any> => {
    return http.get("/companydetails/");
};

const getCompanyById = async (id: string): Promise<any> => {
    return http.get("/companydetails/" + id);
};

const CompanyService = {
    create,
    update,
    getAll,
    getCompanyById
};

export default CompanyService;