export default class AbstractNode {
  constructor(value = "") {
    if (this.constructor === AbstractNode) {
      throw new Error("Can't instantiate abstract class!");
    }

    /**
     * @property {string}
     * @protected
     * @name AbstractToken#value
     */
    Object.defineProperty(this, "value", {
      value: value
    });
  }

  clone() {
    return new this.constructor(this.keyword, this.value);
  }

  static create(value) {
    return new AbstractNode(value);
  }

  static fromToken(token) {
    return this.create(token.value)
  }
}
