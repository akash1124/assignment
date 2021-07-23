import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, Table } from 'antd';

import '../styles/Draggable.scss';

const { Column } = Table;

const renderColumnTitle = (columnTitle, onDragStart) => (
    <Card
        key={columnTitle}
        hoverable
        title={columnTitle}
        size="small"
        draggable
        style={{ width: 250, margin: 5 }}
        bodyStyle={{ display: 'none' }}
        onDragStart={(e) => onDragStart(e, columnTitle)}
    />
)

const renderDetailedColumn = (columns, data) => (
    <Table dataSource={data} pagination={false} scroll={{ x: 100, y: 500 }} rowKey={(index) => index}>
        {columns.map(item => <Column title={item} dataIndex={item} key={item} />)}
    </Table>
)

const renderDropMessage = () => <p className="message">Drop Your Content Here</p>;

export default function Draggable(props) {
    const { columns, data } = props;
    const [columnKey, setColumnKey] = useState([]);

    if (!props.data.length > 0) {
        return <Redirect to='/excel-overview'/>
    }

    const onDragStart = (event, columnName) => {
        event.dataTransfer.setData("id", columnName);
    }

    const onDragOver = (event) => {
        event.preventDefault();
    }

    const onDrop = (event) => {
        const id = event.dataTransfer.getData("id")
        setColumnKey((prevColumnKeys) => [...prevColumnKeys, id])
    }

    return (
        <div className="item-container">
            <div
                className="sidebar"
                onDragOver={(e) => onDragOver(e)}
                onDrop={(e) => { onDrop(e) }}
            >
                {columns.filter(element => !columnKey.includes(element)).map((item, index) => renderColumnTitle(item, onDragStart))}
            </div>
            <div
                className="data-container"
                onDragOver={(e) => onDragOver(e)}
                onDrop={(e) => onDrop(e)}
            >
                {columnKey.length > 0 ? renderDetailedColumn(columnKey, data) : renderDropMessage()}
            </div>
        </div>
    )
}
