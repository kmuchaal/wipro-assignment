import { 
  isFetching,
  requestImageProfile,
  receiveImageProfile,
  failImageProfile,
  requestSingleImageProfile,
  receiveSingleImageProfile,
  failSingleImageProfile
} from '../actions';
import { 
  getRequest,
  getImageRequest
 } from '../services/NetworkCall'


  export const requestImageProfileNetworkCall = (callback) => {
    return async dispatch => {
      try {
        await dispatch(isFetching(true));
        await dispatch(requestImageProfile());
  
        let requestObj = {}
        requestObj.url = '/list'
  
        let responce = await getRequest(requestObj);
        await dispatch(isFetching(false));
        if (responce) {
          await dispatch(receiveImageProfile(responce));
          callback(responce);
        } else if (responce.error) {
          await dispatch(failImageProfile(responce));
          callback(responce);
        }
      } catch (error) {
        await dispatch(isFetching(false));
        callback(error);
      }
    };
  };

  export const requestSingleImageProfileNetworkCall = (profileId, callback) => {
    return async dispatch => {
      try {
        await dispatch(isFetching(true));
        await dispatch(requestSingleImageProfile());
  
        let requestObj = {}
        requestObj.url = '/400/600?image=' + profileId
  
        let responce = await getImageRequest(requestObj);
        await dispatch(isFetching(false));
        if (responce) {
          console.log("image response : ",responce)
          await dispatch(receiveSingleImageProfile(responce));
          callback(responce);
        } else if (responce.error) {
          await dispatch(failSingleImageProfile(responce));
          callback(responce);
        }
      } catch (error) {
        await dispatch(isFetching(false));
        dispatch(failSingleImageProfile(responce));
        callback(error);
      }
    };
  };


