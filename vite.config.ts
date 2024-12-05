import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    modules: {
      scopeBehaviour: 'local',
    },
  },
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
});
