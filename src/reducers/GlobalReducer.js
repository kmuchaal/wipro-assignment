import { IS_FETCHING } from '../constants/ActionType';

const INITIAL_STATE = {
  isFetching: false,
};

const GlobalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.data,
      };
    default:
      return state;
  }
};
export default GlobalReducer;
