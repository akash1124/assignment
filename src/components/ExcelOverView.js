import React from 'react';
import { Table } from 'antd';
import UploadModal from '../components/UploadModal';

import '../styles/ExcelOverview.scss';

const { Column } = Table;

export default function ExcelOverView(props) {
    const { columns, data } = props;
    if (data.length === 0) {
        return (
            <UploadModal {...props} />
        )
    }
    return (
        <div className="excel-overview-container">
            <Table dataSource={data} pagination={false} scroll={{ y: 500 }}>
                {columns.map(item => <Column title={item} dataIndex={item} key={item} />)}
            </Table>
        </div>
    )
}
