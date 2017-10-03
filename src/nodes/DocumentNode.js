import AbstractNode from './AbstracNode';
import {version} from '../../package.json';

export default class DocumentNode extends AbstractNode {
  constructor(value, scenarios = []) {
    super(value);

    /**
     * @property {Array}
     * @protected
     * @name DocumentNode#items
     */
    Object.defineProperty(this, "scenarios", {
      value: scenarios
    });
  }

  addScenario(scenario) {
    return this.cloneWithScenarios(this.scenarios.concat(scenario))
  }

  get lastScenario() {
    return this.scenarios.slice(-1)[0];
  }

  get initialScenarios() {
    return this.scenarios.slice(0, -1);
  }

  clone() {
    return new this.constructor(this.value, this.scenarios);
  }

  cloneWithScenarios(scenarios) {
    return new this.constructor(this.value, scenarios);
  }

  static create(value, scenarios) {
    return new DocumentNode(value, scenarios);
  }

  toJSON() {
    return {

      doctype: `Pickle AST 0.0.0 JSON`,
      feature: {
        type: "Feature",
        name: this.value,
        scenarios: this.scenarios
      }
    };
  }
}
