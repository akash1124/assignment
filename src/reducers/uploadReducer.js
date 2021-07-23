import * as constant from '../constants/index';

const initialState = {
  columns: [],
  data: []
};

export function uploadReducer(state = initialState, action) {
  switch (action.type) {
    case constant.UPLOAD_EXCEL: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
export default uploadReducer;
