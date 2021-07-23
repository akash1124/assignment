import * as constant from '../constants';

export const uploadExcel = (columns, data) => ({
    type: constant.UPLOAD_EXCEL,
    payload: {
        columns, data
    }
});