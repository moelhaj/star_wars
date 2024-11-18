import { Button } from "@/components/ui/button";

type Props = {
	count: number | undefined;
	page: number;
	setPage: (page: number) => void;
};

export default function Pagination({ page, setPage, count }: Props) {
	return (
		<div>
			<div className="flex gap-4 justify-center items-center mt-4 pb-10">
				<Button
					variant="outline"
					onClick={() => setPage(page - 1)}
					disabled={page === 1}
					className="w-32"
				>
					Previous
				</Button>
				<Button
					variant="outline"
					onClick={() => setPage(page + 1)}
					disabled={page === count}
					className="w-32"
				>
					Next
				</Button>
			</div>
		</div>
	);
}
