import React from 'react';
import { Spin, Modal } from 'antd';
import XLSX from 'xlsx';

export const renderLoading = () => (<Spin spinning><div style={{ height: '100px' }} /></Spin>);

export const errorModal = content => {
    Modal.error({
        content,
    });
}

export const excelToJson = (file) => new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, {
            type: 'binary'
        });
        const jsonData = workbook.SheetNames.map((sheetName) => XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]))
        resolve(jsonData)
    };
    reader.readAsBinaryString(file);
});