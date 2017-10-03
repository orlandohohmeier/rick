import AbstractNode from './AbstracNode';

export default class ItemNode extends AbstractNode {

  constructor(type, value, keyword) {
    super(value);

    /**
     * @property {string}
     * @protected
     * @name ItemNode#type
     */
    Object.defineProperty(this, "type", {
      value: type
    });

    /**
     * @property {string}
     * @protected
     * @name ItemNode#keyword
     */
    Object.defineProperty(this, "keyword", {
      value: keyword
    });
  }

  static create(type, value, keyword) {
    return new ItemNode(type, value, keyword);
  }

  static fromToken(token) {
    return this.create(token.type, token.value, token.keyword)
  }

  toJSON() {
    return {
      type: this.type,
      keyword: this.keyword,
      name: this.value,
    }
  }
}
