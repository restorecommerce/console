import { REGEX } from '@console-core/config';

export const handleHttpResponseErrorContent = (content: string): string => {
  let newContent = content;
  switch (true) {
    case REGEX.http.response.error.unknown.test(content):
      newContent =
        'We are having some temporary connection trouble. Please try again later.';
      break;
    case REGEX.http.response.error.unauthorized.test(content):
      newContent = 'Action not authorized.';
      break;
  }
  return newContent;
};
