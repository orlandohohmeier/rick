import AbstractNode from './AbstracNode';

export default class ScenarioNode extends AbstractNode {
  constructor(value, steps = [], input = []) {
    super(value);

    /**
     * @property {Array}
     * @protected
     * @name DocumentNode#items
     */
    Object.defineProperty(this, "items", {
      value: steps
    });

    /**
     * @property {Array}
     * @protected
     * @name DocumentNode#inputs
     */
    Object.defineProperty(this, "inputs", {
      value: input
    });
  }

  addItems(step) {
    return this.cloneWithItems(this.items.concat(step));
  }

  addInput(input) {
    return this.cloneWithInputs(this.inputs.concat(input));
  }

  clone() {
    return new this.constructor(this.value, this.items, this.inputs);
  }

  cloneWithItems(items) {
    return new this.constructor(this.value, items, this.inputs);
  }

  cloneWithInputs(input) {
    return new this.constructor(this.value, this.items, input);
  }

  static create(value, items, input) {
    return new ScenarioNode(value, items, input);
  }

  toJSON() {
    return {
      name: this.value,
      items: this.items,
      inputs: this.inputs
    };
  }
}
