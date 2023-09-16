import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { StateModel } from "../models/SateModel";
import CompanyService from "../services/CompanyService";
import CompanyModel from "../models/CompanyModel";
import { fetchStatus } from "../models/FetchStatus";

const initialState:  StateModel = {
  loadingStatus: fetchStatus.idle,
  currentCompany:  null,
  companies: []
};

export const createCompany = createAsyncThunk<CompanyModel, CompanyModel>(
  "company/create",
  async (company: CompanyModel) => {
    const res = await CompanyService.create(company);
    return res;
  }
);

const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder
      .addCase(createCompany.fulfilled, (state, action) => {
        state.loadingStatus = fetchStatus.success;
        //state.companies.push(action.payload);
      })
      .addCase(createCompany.pending, (state, action) => {
        state.loadingStatus = fetchStatus.loading;
      })
      .addCase(createCompany.rejected, (state, action) => {
        state.loadingStatus = fetchStatus.error;
      })
  }
});

const { reducer } = companiesSlice;
export default reducer;