import { defineConfig } from "tsup";
import { resolve } from "path";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "lucide-react", "cmdk"],

  // ✅ Proper alias setup for TSUP v8+
  esbuildOptions(options) {
    options.alias = {
      "@": resolve(__dirname, "src"),
    };
  },
});
