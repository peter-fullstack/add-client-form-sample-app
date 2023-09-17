import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { StateModel } from "../models/SateModel";
import CompanyService from "../services/CompanyService";
import CompanyModel from "../models/CompanyModel";
import { fetchStatus } from "../models/FetchStatus";

const initialState:  StateModel = {
  loadingStatus: fetchStatus.idle,
  currentCompany:  new CompanyModel(),
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

const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    setNewCompany: (state) => {
      state.currentCompany = new CompanyModel();
    }
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

      builder.addMatcher(isAnyOf (createCompany.pending, updateCompany.pending), (state: any, action: any) => {
        state.loadingStatus = fetchStatus.loading;
      });

      builder.addMatcher(isAnyOf (createCompany.fulfilled, updateCompany.fulfilled), (state: any, action: any) => {
        state.loadingStatus = fetchStatus.success;
        state.currentCompany = action.payload;
      });

      builder.addMatcher(isAnyOf (createCompany.rejected, updateCompany.rejected), (state: any) => {
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

export const { setNewCompany } = companiesSlice.actions
const { reducer } = companiesSlice;
export default reducer;