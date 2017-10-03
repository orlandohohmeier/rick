import {readFileSync} from "fs";
import parse from "./src/parse";
import build from "./src/build";

const [tokens] = parse(readFileSync('./example/input.md', 'utf-8'));
const ast = tokens.reduce(build, null);
console.log(JSON.stringify(ast, null, 2));

