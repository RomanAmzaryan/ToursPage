import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseRequest } from "../../../hook/UseRequest";
const { get } = UseRequest();

export const fetchTripsData = createAsyncThunk("tripsData/fetchTripsData", async () => {
  const result = await get("http://localhost:5001/tripsData");
  return result;
});
