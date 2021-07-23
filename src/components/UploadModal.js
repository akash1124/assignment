import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { DeleteFilled } from '@ant-design/icons';

import { errorModal, excelToJson } from '../utils/helperfunctions';

import '../styles/uploadModal.scss';

export default function UploadModal(props) {

    const [selectedFile, setSelectedFile] = useState(null)

    const onFileInput = (event) => {
        const extn = event.target.files[0].name.split('.').pop();
        if (extn !== 'xlsx') {
            errorModal('Please upload a valid file. You can only upload file with extension .xlsx');
            return;
        }
        setSelectedFile(event.target.files[0])
    }

    const removeFile = () => {
        setSelectedFile(null);
    }

    const onOk = async () => {
        const jsonData = await excelToJson(selectedFile);
        props.uploadExcel(Object.keys(jsonData[0][0]),jsonData[0]);
    }

    const renderUploadButton = () => (
        <div>
            <input type="file" name="file" accept=".xlsx" onChange={onFileInput} />
        </div>
    );

    const renderSelectedFile = () => (
        <div className="display-excel-file">
            <h3>
                {selectedFile.name}
                <Button danger shape="circle" icon={<DeleteFilled />} size="small" onClick={removeFile} />
            </h3>
        </div>
    )

    return (
        <Modal
            visible
            title="Upload Excel"
            maskClosable={false}
            closable={false}
            okText="Upload"
            onOk={onOk}
            okButtonProps={{ disabled: !selectedFile }}
            cancelButtonProps={{ style: { display: 'none' } }}
        >
            <div className="excel-upload-container">
                {selectedFile ? renderSelectedFile() : renderUploadButton()}
            </div>
        </Modal>
    )
}
