import { configureStore } from "@reduxjs/toolkit";
import { tripsDataReducer } from "./slices/tripsData/tripsDataSlice";
import { usersDataReducer } from "./slices/usersData/usersDataSlice";
import { userIsAush } from "./Middleware/usersData";

const store = configureStore({
  reducer: {
    tripsData: tripsDataReducer,
    usersData: usersDataReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), userIsAush],
});

export default store;
