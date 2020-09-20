import { 
  REQUEST_IMAGE_PROFILE,
  RECEIVE_IMAGE_PROFILE,
  FAIL_IMAGE_PROFILE,
  REQUEST_SINGLE_IMAGE_PROFILE,
  RECEIVE_SINGLE_IMAGE_PROFILE,
  FAIL_SINGLE_IMAGE_PROFILE  
} from '../constants/ActionType';

export const requestImageProfile = () => {
  return {
    type: REQUEST_IMAGE_PROFILE,
  };
}

export const receiveImageProfile = (data) => {
  return {
    type: RECEIVE_IMAGE_PROFILE,
    data,
  };
}

export const failImageProfile = (error) => {
  return {
    type: FAIL_IMAGE_PROFILE,
    error,
  };
}

export const requestSingleImageProfile = () => {
  return {
    type: REQUEST_SINGLE_IMAGE_PROFILE,
  };
}

export const receiveSingleImageProfile = (data) => {
  return {
    type: RECEIVE_SINGLE_IMAGE_PROFILE,
    data,
  };
}

export const failSingleImageProfile = (error) => {
  return {
    type: FAIL_SINGLE_IMAGE_PROFILE,
    error,
  };
}