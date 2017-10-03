import InputToken from "./tokens/InputToken";
import FeatureToken from "./tokens/FeatureToken";
import ScenarioToken from "./tokens/ScenarioToken";
import PreconditionToken from "./tokens/PreconditionToken";
import ActionToken from "./tokens/ActionToken";
import ExpectationToken from "./tokens/ExpectationToken";
import DocumentNode from "./nodes/DocumentNode";
import ScenarioNode from "./nodes/ScenarioNode";
import ItemNode from './nodes/ItemNode';
import InputNode from './nodes/InputNode';

export default function build(document = new DocumentNode(null), token) {
  try {
    if (token instanceof FeatureToken) {
      return DocumentNode.fromToken(token)
    }

    if (token instanceof ScenarioToken) {
      return document.addScenario(ScenarioNode.fromToken(token));
    }

    if (token instanceof PreconditionToken ||
      token instanceof ActionToken ||
      token instanceof ExpectationToken) {

      return document.cloneWithScenarios(
        [...document.initialScenarios,
          document.lastScenario.addItems(ItemNode.fromToken(token))
        ]
      );
    }

    if (token instanceof InputToken) {
      return document.cloneWithScenarios(
        [...document.initialScenarios,
          document.lastScenario.addInput(InputNode.fromToken(token))
        ]
      );
    }
  } catch (e) {
    console.log(e, token);
  }



  return document;
}
