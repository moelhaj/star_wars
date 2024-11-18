import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { characterApi } from "./services/character";

export const store = configureStore({
	reducer: {
		[characterApi.reducerPath]: characterApi.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(characterApi.middleware),
});
setupListeners(store.dispatch);
