"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type Props = {
	previous: string | null;
	page: number;
	count: number;
};

export default function Pagination({ page, count }: Props) {
	const router = useRouter();
	return (
		<div>
			<div className="flex gap-4 justify-center items-center mt-4 pb-10">
				<Button
					variant="outline"
					onClick={() => router.push("/?page=" + (page - 1))}
					disabled={page === 1}
					className="w-32"
				>
					Previous
				</Button>
				<Button
					variant="outline"
					onClick={() => router.push("/?page=" + (page + 1))}
					disabled={page === count}
					className="w-32"
				>
					Next
				</Button>
			</div>
		</div>
	);
}
