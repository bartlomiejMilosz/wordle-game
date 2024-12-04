export const STYLES_PATHS: string[] = [
	"public/styles/reset.css",
	"public/styles/styles.css",
];

export function appendCSSLinks(paths: string[]): void {
	const head: HTMLHeadElement | null = document.querySelector("head");
	if (!head) throw new Error("Unable to find <head> element to append styles.");

	paths.forEach((path) => {
		const link: HTMLLinkElement = document.createElement("link");
		link.rel = "stylesheet";
		link.href = path;
		head.appendChild(link);
	});
}
