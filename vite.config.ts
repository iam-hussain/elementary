import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "react-native": "react-native-web",
    },
  },
  build: {
    lib: {
      entry: "src/index.ts",
      name: "elementary",
      fileName: (format) => `elementary.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react-native-web"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-native-web": "ReactNativeWeb",
        },
      },
    },
  },
});
