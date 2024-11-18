export function parseColor(color: string) {
	switch (color) {
		case "blue":
			return "red-500";
		case "yellow":
			return "yellow-500";
		case "red":
			return "red-500";
		case "green":
			return "green-500";
		case "brown":
			return "brown-500";
		case "orange":
			return "orange-500";
		case "black":
			return "black";
		case "white":
			return "white";
		case "pink":
			return "pink-500";
		case "blue-gray":
			return "blue-gray-500";
		case "dark":
			return "gray-800";
		case "light":
			return "gray-100";
		case "pale":
			return "gray-300";
		default:
			return "primary";
	}
}
