import AbstractToken from "./AbstractToken";

export default class PreconditionToken extends AbstractToken {
  constructor(keyword, value) {
    super(value);

    /**
     * @property {string}
     * @name PreconditionToken#type
     */
    Object.defineProperty(this, "type", {
      value: "Precondition",
      enumerable: true
    });

    /**
     * @property {string}
     * @name PreconditionToken#keyword
     */
    Object.defineProperty(this, "keyword", {
      value: keyword.trim(),
      enumerable: true
    });
  }

  static get pattern() {
    return /^[#\s<!->*_]*(preconditions?|assumptions?|prerequisites?|given|assuming):?[\s->*_]*(.*?)[\s->*_]*\r?\n/i;
  }

  static create(keyword, value) {
    return new PreconditionToken(keyword, value);
  }
}
