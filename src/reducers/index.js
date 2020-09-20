import { combineReducers } from 'redux';
import ImageProfileReducer from './ImageProfileReducer';
import GlobalReducer from './GlobalReducer';

export default combineReducers({
    ImageProfile: ImageProfileReducer,
    Global: GlobalReducer,

})
