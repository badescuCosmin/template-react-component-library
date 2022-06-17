import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import image from "@rollup/plugin-image";
import svgr from "@svgr/rollup";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    external: [
      "react",
      "react-dom",
      "prop-types",
      "@emotion/react",
      "@emotion/styled",
      "@mui/lab",
      "@mui/icons-material",
      "@mui/material",
      "@mui/material/styles",
      "@mui/styles",
    ],
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      image(),
      svgr(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
