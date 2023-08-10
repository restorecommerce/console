export interface IRegexConstant {
  email: RegExp;
  name: RegExp;
  password: RegExp;
  http: {
    response: {
      error: {
        unknown: RegExp;
        unauthorized: RegExp;
      };
    };
  };
}
