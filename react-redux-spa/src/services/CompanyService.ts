import CompanyModel from "../models/CompanyModel";
import http from "../http-common";

const create = async (data: CompanyModel): Promise<any> => {
    return http.post("/companydetails", data);
};

const update = async (data: CompanyModel): Promise<any> => {
    return http.put("/companydetails/" + data.id, data);
};

const CompanyService = {
    create,
    update
};

export default CompanyService;