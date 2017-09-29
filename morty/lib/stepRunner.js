const { execSync } = require("child_process");

const macros = [
  {
    matcher: /([a-z0-9]*) should start/i,
    assert: text => {
      const name = /([a-z0-9]*)(?: should start)/gi.exec(text)[1];
      console.log(
        execSync(`dcos marathon app show ${name} | jq .id`).toString()
      );
    }
  }
];
module.exports = input => {
  const inputKeys = Object.keys(input);
  const regExp = new RegExp(`run.*(${inputKeys.join("|")})`);
  return step => {
    console.log(`*${step.keyword.trim()}* ${step.text}`);

    // console.log(input);
    if (regExp.test(step.text)) {
      inputKeys.map(key => {
        if (RegExp(key).test(step.text)) {
          console.log(`run ${input[key]}`);
          console.log(execSync(input[key]).toString());
        }
      });
    }

    macros.map(macro => {
      if (macro.matcher.test(step.text)) {
        macro.assert(step.text);
      }
    });
  };
};
