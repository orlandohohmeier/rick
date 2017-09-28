import Token from "gherkin/lib/gherkin/token"
import GherkinLine from "gherkin/lib/gherkin/gherkin_line"

/**
 * The scanner reads a gherkin doc (typically read from a .feature file) and
 * creates a token for each line. The tokens are passed to the parser, which
 * outputs an AST (Abstract Syntax Tree).
 *
 * If the scanner sees a `#` language header, it will reconfigure itself
 * dynamically to look for Gherkin keywords for the associated language. The
 * keywords are defined in gherkin-languages.json.
 */

const MARKDOWN_PATTERN = /#+|<!--|-->/g;

export default class TokenScanner {

  constructor(source) {
    this.lines =
      source.split(/\r?\n/)
        .map((value, line) => [value, line])
        [Symbol.iterator]();
  }

  read() {
    const {value: [value, line] = [], done} = this.lines.next();
    const location = {line, column: 0};

    if (done) {
      return new Token(null, location);
    }

    return new Token(
      new GherkinLine(value.replace(MARKDOWN_PATTERN, ''), location.lineNumber),
      location
    );
  }
};
