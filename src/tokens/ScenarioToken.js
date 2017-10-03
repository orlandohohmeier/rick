import AbstractToken from "./AbstractToken";

export default class ScenarioToken extends AbstractToken {
  static get pattern() {
    return /^[#\s<!->*_]*scenario:?[\s->*_]*(.*)\r?\n/i;
  }

  static create(value) {
    return new ScenarioToken(value);
  }
}
