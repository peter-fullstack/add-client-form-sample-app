import CompanyModel from "./CompanyModel";
import { fetchStatus } from "./FetchStatus";

export class StateModel {
    loadingStatus: fetchStatus = fetchStatus.idle;
    currentCompany: CompanyModel | null = null;
    companies: CompanyModel[] = [];
}