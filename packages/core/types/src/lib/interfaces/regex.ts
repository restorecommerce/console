export interface IRegex {
  email: RegExp;
  name: RegExp;
  password: RegExp;
  graphql: {
    errors: {
      unknown: RegExp;
    };
  };
}
