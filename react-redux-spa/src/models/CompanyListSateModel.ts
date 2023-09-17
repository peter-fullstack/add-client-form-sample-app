import CompanyModel from "./CompanyModel";
import { fetchStatus } from "./FetchStatus";

export class CompanylistStateModel {
    loadingStatus: fetchStatus = fetchStatus.idle;
    companies: CompanyModel[] = [];
}