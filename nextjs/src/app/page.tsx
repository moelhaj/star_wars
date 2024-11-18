import { Suspense } from "react";
import { getCharacters } from "@/actions/character";
import LayoutWrapper from "./components/layout-wrapper";

type SearchParams = {
	page?: string;
};

export default async function Home({ searchParams }: { searchParams: Promise<SearchParams> }) {
	const page = parseInt((await searchParams).page ?? "1");
	const { count, previous, results } = await getCharacters(page);
	return (
		<Suspense
			fallback={
				<div className="bg-black/50 w-ful h-full grid place-content-center">Loading</div>
			}
		>
			<LayoutWrapper data={results} page={page} count={count} previous={previous} />
		</Suspense>
	);
}
