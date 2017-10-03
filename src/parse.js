import DefaultToken from "./tokens/DefaultToken";
import InputToken from "./tokens/InputToken";
import FeatureToken from "./tokens/FeatureToken";
import ScenarioToken from "./tokens/ScenarioToken";
import PreconditionToken from "./tokens/PreconditionToken";
import ActionToken from "./tokens/ActionToken";
import ExpectationToken from "./tokens/ExpectationToken";

const TOKENS = [
  DefaultToken,
  InputToken,
  ExpectationToken,
  ActionToken,
  PreconditionToken,
  ScenarioToken,
  FeatureToken
];

export default function parse(input, tokens = []) {
  if (input !== "" || DefaultToken.test(input)) {
    let i = TOKENS.length;

    while (--i >= 0) {
      const [_, token, rest] = TOKENS[i].exec(input);

      if (token) {
        return parse(rest, tokens.concat(token))
      }
    }
  }

  return [tokens, input]
}
