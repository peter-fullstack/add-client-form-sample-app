import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { StateModel } from "../models/SateModel";
import CompanyService from "../services/CompanyService";
import CompanyModel from "../models/CompanyModel";
import { fetchStatus } from "../models/FetchStatus";

const initialState: StateModel = {
  loadingStatus: fetchStatus.idle,
  currentCompany: new CompanyModel(),
  companies: []
};

export const createCompany = createAsyncThunk<CompanyModel, CompanyModel>(
  "company/create",
  async (company: CompanyModel) => {
    const res = await CompanyService.create(company);

    var model = res.data;

    return model;
  }
);

export const updateCompany = createAsyncThunk<CompanyModel, CompanyModel>(
  "company/create",
  async (company: CompanyModel) => {
    const res = await CompanyService.update(company);

    var model = res.data;

    return model;
  }
);

export const getAllCompanies = createAsyncThunk<Array<CompanyModel>>(
  "company-list/get-all",
  async () => {
    const res = await CompanyService.getAll();

    var models = res.data;

    return models;
  }
);

export const getCompanyById = createAsyncThunk<CompanyModel, string>(
  "company-list/get-company",
  async (id: string) => {
    const res = await CompanyService.getCompanyById(id);

    var model = res.data;

    return model;
  }
);

const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    setLoadingStatus: (state: StateModel) => {
      state.loadingStatus = fetchStatus.idle;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCompanies.pending, (state: StateModel) => {
      state.loadingStatus = fetchStatus.loading;
    });

    builder.addCase(getAllCompanies.fulfilled, (state: StateModel, action: any) => {
      state.loadingStatus = fetchStatus.fetchComplete;
      state.companies = action.payload;
    });

    builder.addCase(getAllCompanies.rejected, (state: any) => {
      state.loadingStatus = fetchStatus.error;
    });

    builder.addMatcher(isAnyOf(createCompany.pending, updateCompany.pending, getCompanyById.pending), (state: StateModel) => {
      state.loadingStatus = fetchStatus.loading;
    });

    builder.addMatcher(isAnyOf(createCompany.fulfilled, updateCompany.fulfilled, getCompanyById.fulfilled), (state: StateModel, action: any) => {
      state.loadingStatus = fetchStatus.success;
      state.currentCompany = action.payload;
    });

    builder.addMatcher(isAnyOf(createCompany.rejected, updateCompany.rejected, getCompanyById.rejected), (state: StateModel) => {
      state.loadingStatus = fetchStatus.error;
    });
    
  }
});

export const { setLoadingStatus } = companiesSlice.actions
const { reducer } = companiesSlice;
export default reducer;