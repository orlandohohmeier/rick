import AbstractToken from "./AbstractToken";

export default class ExpectationToken extends AbstractToken {
  constructor(keyword, value) {
    super(value);

    /**
     * @property {string}
     * @name ExpectationToken#type
     */
    Object.defineProperty(this, "type", {
      value: "Expectation",
      enumerable: true
    });

    /**
     * @property {string}
     * @name ExpectationToken#keyword
     */
    Object.defineProperty(this, "keyword", {
      value: keyword.trim(),
      enumerable: true
    });
  }

  static get pattern() {
    return /^[#\s<!->*_]*(expectations?|assertions?|then|should|expect|assert):?[\s->*_]*(.*?)[\s->*_]*\r?\n/i;
  }

  static create(keyword, value) {
    return new ExpectationToken(keyword, value);
  }
}


