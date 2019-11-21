import {terser} from "rollup-plugin-terser";
import json from '@rollup/plugin-json';
import * as pkg from "./package.json";

const
  preamble=`// ${pkg.name} v${pkg.version} Copyright ${(new Date).getFullYear()} ${pkg.author.name} ${pkg.homepage}`
;

export default [
  {
    input: "./src/index.js",
    external: ['node-fetch'],
    output: [
      {
        name: "JSONstat",
        file: pkg.unpkg,
        format: "iife",
        banner: 'if(typeof fetch==="undefined"){fetch=null;};',
        globals: {
          "node-fetch": "fetch"
        }
      },
      {
        file: pkg.module,
        format: "esm"
      },
      {
        file: pkg.main,
        format: "cjs"
      }
    ],
    plugins: [
      json(),
      terser({
        output: {preamble}
      })
    ]
  }
]
