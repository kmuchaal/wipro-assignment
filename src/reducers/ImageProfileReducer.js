import {
  REQUEST_IMAGE_PROFILE,
  RECEIVE_IMAGE_PROFILE,
  FAIL_IMAGE_PROFILE,
  REQUEST_SINGLE_IMAGE_PROFILE,
  RECEIVE_SINGLE_IMAGE_PROFILE,
  FAIL_SINGLE_IMAGE_PROFILE,
} from '../constants/ActionType';

const INITIAL_STATE = {
  setImageProfileRequest: null,
  setImageProfileResponse: null,
  setImageProfileError: null,
  setSingleImageProfileRequest: null,
  setSingleImageProfileResponse: null,
  setSingleImageProfileError: null,

};

const ImageProfileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_IMAGE_PROFILE:
      return {
        ...state,
        setImageProfileRequest: action,
      };
    case RECEIVE_IMAGE_PROFILE:
      return {
        ...state,
        setImageProfileResponse: action.data,
      };
    case FAIL_IMAGE_PROFILE:
      return {
        ...state,
        setImageProfileError: action.error,
      };
    case REQUEST_SINGLE_IMAGE_PROFILE:
      return {
        ...state,
        setSingleImageProfileRequest: action,
      };
    case RECEIVE_SINGLE_IMAGE_PROFILE:
      return {
        ...state,
        setSingleImageProfileResponse: action.data,
      };
    case FAIL_SINGLE_IMAGE_PROFILE:
      return {
        ...state,
        setSingleImageProfileError: action.error,
      };
    default:
      return state;
  }
};
export default ImageProfileReducer;
