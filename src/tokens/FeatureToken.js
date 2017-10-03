import AbstractToken from "./AbstractToken";

export default class FeatureToken extends AbstractToken {
  static get pattern() {
    return /^[#\s<!->*_]*feature:?[\s->*_]*(.*)\r?\n/i;
  }


  static create(value) {
    return new FeatureToken(value);
  }
}
