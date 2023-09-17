import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { StateModel } from "../models/SateModel";
import CompanyService from "../services/CompanyService";
import CompanyModel from "../models/CompanyModel";
import { fetchStatus } from "../models/FetchStatus";
import { CompanylistStateModel } from "../models/CompanyListSateModel";

const initialState:  CompanylistStateModel = {
  loadingStatus: fetchStatus.idle,
  companies: []
};

export const getAllCompanies = createAsyncThunk<Array<CompanyModel>>(
  "company-list/get-all",
  async () => {
    const res = await CompanyService.getAll();

    var models = res.data;

    return models;
  }
);

const companiesListSlice = createSlice({
  name: "companiesList",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    
    // builder.addCase(createCompany.fulfilled, (state: any, action: any) => {
    //     state.loadingStatus = fetchStatus.success;
    //     state.currentCompany = action.payload;
    //   });

      // builder.addCase(createCompany.pending, (state) => {
      //   state.loadingStatus = fetchStatus.loading;
      // });

      // builder.addCase(createCompany.rejected, (state) => {
      //   state.loadingStatus = fetchStatus.error;
      // });

      builder.addMatcher(isAnyOf (getAllCompanies.pending), (state: CompanylistStateModel, action: any) => {
        state.loadingStatus = fetchStatus.loading;
      });

      builder.addMatcher(isAnyOf (getAllCompanies.fulfilled), (state: CompanylistStateModel, action: any) => {
        state.loadingStatus = fetchStatus.success;
        state.companies = action.payload;
      });

      builder.addMatcher(isAnyOf (getAllCompanies.rejected), (state: any) => {
        state.loadingStatus = fetchStatus.error;
      });

      // builder.addCases(updateCompany.fulfilled, (state, action) => {
      //   state.loadingStatus = fetchStatus.success;
      //   state.currentCompany = action.payload;
      // });

      // builder.addCase(updateCompany.pending, (state) => {
      //   state.loadingStatus = fetchStatus.loading;
      // });

      // builder.addCase(updateCompany.rejected, (state) => {
      //   state.loadingStatus = fetchStatus.error;
      // });
  }
});

const { reducer } = companiesListSlice;
export default reducer;