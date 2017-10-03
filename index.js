import {readFileSync} from "fs";
import {Parser} from "gherkin";

import TokenScanner from "./src/TokenScanner";
import TokenMatcher from "./src/TokenMatcher";

const ast = new Parser()
  .parse(
    new TokenScanner(readFileSync('./example/input.md', 'utf-8')),
    new TokenMatcher("en")
  );

console.log(JSON.stringify(ast, null, 2));
