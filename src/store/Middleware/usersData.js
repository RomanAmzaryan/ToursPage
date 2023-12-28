import { addCurrentUser } from "../slices/usersData/API";

export const userIsAush = (store) => (next) => (action) => {
  if (
    action.type === "usersData/login" &&
    store.getState().usersData.usersData.find((user) => user.password === action.payload.password && user.email === action.payload.email)
  ) {
    const currentUser = store
      .getState()
      .usersData.usersData.find((user) => user.password === action.payload.password && user.email === action.payload.email);
    action.payload = currentUser;
    store.dispatch(addCurrentUser(currentUser));
    return next(action);
  }

  if (
    action.type === "usersData/login" &&
    store.getState().usersData.usersData.find((user) => user.password !== action.payload.password || user.email !== action.payload.email)
  ) {
    return;
  }

  next(action);
};
