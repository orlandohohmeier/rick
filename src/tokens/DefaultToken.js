import AbstractToken from "./AbstractToken";

export default class DefaultToken extends AbstractToken{
  static get pattern() {
    return /^(.*)\r?\n/;
  }
  
  static create(value) {
    return new DefaultToken(value);
  }
}
