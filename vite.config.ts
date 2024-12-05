import { defineConfig } from "vite";

export default defineConfig({
	root: "./",
	publicDir: "public",
	css: {
		modules: {
			scopeBehaviour: "local",
		},
	},
	esbuild: {
		jsxFactory: "DOMcreateElement",
		jsxFragment: "DOMcreateFragment",
		jsxInject: `import { DOMcreateElement, DOMcreateFragment } from "../../utils/jsx-factory";`,
	},
});
