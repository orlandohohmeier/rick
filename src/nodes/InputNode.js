import AbstractNode from './AbstracNode';

export default class InputNode extends AbstractNode {
  constructor(name, value, type) {
    super(value);

    /**
     * @property {string}
     * @protected
     * @name InputNode#name
     */
    Object.defineProperty(this, "name", {
      value: name
    });

    /**
     * @property {string}
     * @protected
     * @name InputNode#type
     */
    Object.defineProperty(this, "type", {
      value: type
    });
  }

  static create(name, value, type) {
    return new InputNode(name, value, type);
  }

  static fromToken(token) {
    return this.create(token.name, token.value, token.type)
  }

  toJSON() {
    return {
      name: this.name,
      value: this.value,
      type: this.type
    }
  }
}
