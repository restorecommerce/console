import { IRegexConstant } from '@console-core/types';

export const REGEX: Readonly<IRegexConstant> = {
  email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
  name: /^(?!.*([a-zA-ZäöüÄÖÜß0-9@_.-])\1)(?!.*([a-zA-ZäöüÄÖÜß0-9@_.-])\2)[a-zA-ZäöüÄÖÜß][a-zA-Z0-9äöüÄÖÜß@_.-]{7,19}[a-zA-Z0-9äöüÄÖÜß@_.-]$/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{6,20}$/,
  http: {
    response: {
      error: {
        unknown:
          /^Http failure response for (https?:\/\/[^\s]+): \d+ Unknown Error$/,
        unauthorized:
          /^Http failure response for (https?:\/\/[^\s]+): \d+ Unauthorized$/,
      },
    },
  },
};
