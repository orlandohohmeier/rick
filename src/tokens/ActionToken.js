import AbstractToken from "./AbstractToken";

export default class ActionToken extends AbstractToken {
  constructor(keyword, value) {
    super(value);

    /**
     * @property {string}
     * @name ActionToken#type
     */
    Object.defineProperty(this, "type", {value: "Action", enumerable: true});

    /**
     * @property {string}
     * @name ActionToken#keyword
     */
    Object.defineProperty(this, "keyword", {
      value: keyword.trim(),
      enumerable: true
    });
  }

  static get pattern() {
    return /^[#\s<!->*_]*(actions?|when|run|use|click|input):?[\s->*_]*(.*?)[\s->*_]*\r?\n/i;
  }

  static create(keyword, value) {
    return new ActionToken(keyword, value);
  }
}
