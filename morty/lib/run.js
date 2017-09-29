const stepRunner = require("./stepRunner");
module.exports = child => {
  if (child.type !== "Scenario") {
    return;
  }
  console.log(`#### ${child.name} ####`);
  const { input } = child;
  child.steps.map(stepRunner(input));
};
