import {TokenMatcher as GherkinTokenMatcher} from "gherkin";



export default class TokenMatcher extends GherkinTokenMatcher {

  constructor(dialectName) {
    super(dialectName);

    function setTokenMatched(token, matchedType, text, keyword, indent, items) {
      token.matchedType = matchedType;
      token.matchedText = text;
      token.matchedKeyword = keyword;
      token.matchedIndent = (typeof indent === 'number') ? indent : (token.line == null ? 0 : token.line.indent);
      token.matchedItems = items || [];

      token.location.column = token.matchedIndent + 1;
      token.matchedGherkinDialect = dialectName;
    }
    
    this.match_Comment = function match_Comment(token) {
      const type = 'Comment';

      if (token.line.startsWith('#')) {
        setTokenMatched(token, type, token.line.getLineText(0), null, 0);
        return true;
      }

      if (
        !(this.match_FeatureLine(token) ||
          this.match_ScenarioLine(token) ||
          this.match_ScenarioOutlineLine(token) ||
          this.match_BackgroundLine(token) ||
          this.match_ExamplesLine(token) ||
          this.match_EOF(token) ||
          this.match_Empty(token) ||
          this.match_StepLine(token))
      ) {
        setTokenMatched(token, type, token.line.getLineText(0), null, 0);
        return true;
      }

      return false;
    };
  }
}

