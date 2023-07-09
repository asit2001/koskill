import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  createCrmThunks,
  deleteCrmThunks,
  getCrmThunks,
  updateCrmThunks,
} from "./thunks";

const crmSlice = createSlice({
  name: "crm",
  initialState: {
    value: [] as CRMScType[],
    sort: "rel",
    selectedId: "",
    fetchData: [] as CRMScType[],
    showForm: false,
  },
  reducers: {
    setSort(state, action:PayloadAction<"last_create"|"rel"|"name">) {
      state.sort = action.payload;
      state.value = state.value.sort((a, b) => {
        if (action.payload === "rel") {
          return b._id > a._id ? -1 : 1;
        } else if (action.payload === "name") {
          return a.name > b.name ? 1 : -1;
        }
        console.log(new Date(a.created_at).getTime())
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      });
    },
    setSelectedId(state, action) {
      state.selectedId = action.payload;
      state.showForm = true;
    },
    setShowForm(state, action: PayloadAction<boolean>) {
      state.showForm = action.payload;
    },
    search(state, action: PayloadAction<string>) {
      state.value = state.fetchData.filter(
        ({ name, city, email }) =>
          name.includes(action.payload) ||
          email.includes(action.payload) ||
          city.includes(action.payload)
      );
    },
  },
  extraReducers(builder) {
    builder.addCase(getCrmThunks.fulfilled, (state, action) => {
      state.value = action.payload;
      state.fetchData = action.payload;
    });
    builder.addCase(updateCrmThunks.fulfilled, (state, action) => {
      const newData = state.fetchData.map((data) => {
        if (data._id === state.selectedId) {
          return action.payload;
        }
        return data;
      });
      state.fetchData = newData;
      state.value = newData;
      state.selectedId = "";
      state.showForm = false;
    });
    builder.addCase(deleteCrmThunks.fulfilled, (state, action) => {
      const newData = state.fetchData.filter(
        (data) => data._id !== action.payload
      );
      state.fetchData = newData;
      state.value = newData;
      state.selectedId = "";
    });
    builder.addCase(createCrmThunks.fulfilled, (state, action) => {
      const newData = [...state.fetchData, action.payload];
      state.fetchData = newData;
      state.value = newData;
      state.showForm = false;
    });
  },
});

export default crmSlice.reducer;
export const { setSort, setSelectedId, setShowForm,search } = crmSlice.actions;
