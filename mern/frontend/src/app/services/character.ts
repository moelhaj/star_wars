import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { CharactersList } from "@/lib/types";

// Define a service using a base URL and expected endpoints
export const characterApi = createApi({
	reducerPath: "characterApi",
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
	endpoints: builder => ({
		getCharacters: builder.query<CharactersList, string>({
			query: page => `characters/${page}`,
		}),
	}),
});

export const { useGetCharactersQuery } = characterApi;
