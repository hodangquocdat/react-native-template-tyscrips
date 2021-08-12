import { ApiResult } from '../data-transfer/api-result';

export const catchHandle = (e: any): void => {
  const { error_code }: ApiResult = e;

  switch (error_code) {
    case 401: {
      // Code...
      break;
    }
    case 400: {
      // Code...
      break;
    }
    default: {
      break;
    }
  }
};
