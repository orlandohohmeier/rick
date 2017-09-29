#!/usr/bin/env node
const args = require("args");
const run = require("./lib/run");

args.options([
  {
    name: "inputFile",
    description: "AST input file",
    init: file => console.log(file)
  }
]);

const { inputFile } = args.parse(process.argv);

if (inputFile == null) {
  args.showHelp();
  process.exit();
}

const ast = require(`./${inputFile}`);

console.log(`### ${ast.feature.name} ###`);

ast.feature.children.map(run);
