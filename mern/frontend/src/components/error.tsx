import { Button } from "./ui/button";

export default function Error() {
	return (
		<div className="w-screen h-screen grid place-content-center">
			<div className="flex flex-col gap-4">
				Something went wrong
				<Button onClick={() => window.location.reload()}>Try again</Button>
			</div>
		</div>
	);
}
