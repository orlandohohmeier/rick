export default class AbstractToken {
  constructor(value = "") {
    if (this.constructor === AbstractToken) {
      throw new Error("Can't instantiate abstract class!");
    }
    
    /**
     * @property {string}
     * @name AbstractToken#value
     */
    Object.defineProperty(this, "value", {
      value: value.trim(),
      enumerable: true
    });
  }

  static test(input) {
    return this.pattern.test(input);
  }

  static exec(input, location) {
    if (!this.test(input)) {
      return ["", null, input];
    }

    const result = this.pattern.exec(input);
    const [match, ...values] = result;

    return [
      match,
      this.create(...values),
      input.substring(result.index + match.length)
    ];
  }

  static get pattern() {
    return new RegExp();
  }

  static create(...values) {
    return new AbstractToken(...values);
  }

}
