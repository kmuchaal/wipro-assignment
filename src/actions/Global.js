import { IS_FETCHING  } from '../constants/ActionType';

export const isFetching = (data) => {
  return {
    type: IS_FETCHING,
    data,
  };
}