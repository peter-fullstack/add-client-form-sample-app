import CompanyModel from "../models/CompanyModel";
import http from "../http-common";

const create = async (data: CompanyModel): Promise<CompanyModel> => {
   
    return http.post("/companydetails", data);

};

const CompanyService = {
    create
};

export default CompanyService;