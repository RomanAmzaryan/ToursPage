import { createSlice } from "@reduxjs/toolkit";
import { fetchTripsData } from "./API";

const tripsDataSlice = createSlice({
  name: "tripsData",
  initialState: {
    allData: [],
    africaData: [],
    europeData: [],
    asiaData: [],
    oceaniaData: [],
    southAmericaData: [],
    northAmerica: [],
    searchData: [],
    inputValue: "",
    currentContinent: "All",
    daysCount: { min: 0, max: 100 },
  },
  reducers: {
    searchTour(state, { payload }) {
      return {
        ...state,
        searchData: state.allData.filter(
          (data) =>
            data.capital.toLowerCase().includes(payload.toLowerCase()) &&
            (data.continent === state.currentContinent || state.currentContinent === "All")
        ),
      };
    },
    searchTourToPrice(state, { payload }) {
      return {
        ...state,
        searchData: state.allData.filter(
          (data) => data.pricePerDay >= payload && (data.continent === state.currentContinent || state.currentContinent === "All")
        ),
      };
    },
    searchTocontinent(state, { payload }) {
      return {
        ...state,
        searchData: payload.data.filter((trip) => trip.daysQty >= state.daysCount.min && trip.daysQty <= state.daysCount.max),
        currentContinent: payload.continent,
      };
    },
    searchDaysQty(state, { payload }) {
      return {
        ...state,
        searchData: state.allData.filter(
          (data) =>
            data.daysQty <= payload.max &&
            data.daysQty >= payload.min &&
            (data.continent === state.currentContinent || state.currentContinent === "All")
        ),
        daysCount: payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTripsData.fulfilled, (state, { payload }) => {
      state.allData = payload;
      state.europeData = payload.filter((data) => data.continent === "Europe");
      state.africaData = payload.filter((data) => data.continent === "Africa");
      state.asiaData = payload.filter((data) => data.continent === "Asia");
      state.oceaniaData = payload.filter((data) => data.continent === "Oceania");
      state.southAmericaData = payload.filter((data) => data.continent === "South America");
      state.northAmerica = payload.filter((data) => data.continent === "North America");
      state.searchData = payload.filter((data) => data.capital.toLowerCase().includes(state.inputValue.toLowerCase()));
    });
  },
});

export const selectTripsData = (state) => state.tripsData;

export const { searchTour, searchTourToPrice, searchTocontinent, searchDaysQty } = tripsDataSlice.actions;
export const tripsDataReducer = tripsDataSlice.reducer;
