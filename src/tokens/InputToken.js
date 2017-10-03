import AbstractToken from "./AbstractToken";

export default class InputToken extends AbstractToken {
  constructor(type = undefined, name = "", value = "") {
    super(value);

    /**
     * @property {string}
     * @name InputToken#type
     */
    Object.defineProperty(this, "type", {value: type, enumerable: true});

    /**
     * @property {string}
     * @name InputToken#name
     */
    Object.defineProperty(this, "name", {
      value: name,
      enumerable: true
    });
  }

  static get pattern() {
    return /^\s*```(\w*)(?:\s+\((\w+)\))?([^]*?)```\r?\n/;
  }

  static create(type, name, value) {
    return new InputToken(type, name, value);
  }
}
