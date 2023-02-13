import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { chatSlice } from "./chat";
import saga from "../saga";

let sagaMiddleware = createSagaMiddleware();
const middleware = (getDefaultMiddleware) => [
  ...getDefaultMiddleware({ thunk: false }),
  sagaMiddleware,
];

const store = configureStore({
  reducer: {
    chat: chatSlice.reducer,
  },
  middleware,
});

sagaMiddleware.run(saga);

export default store;
