import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Column, Pie } from '@ant-design/charts';

import '../styles/Visualization.scss';

export default function Visualization(props) {
    
    const [lineChartData, setLineChartData] = useState([]);
    const [pieChartData, setPieChartData] = useState([]);

    useEffect(() => {
        setLineChartData(() => props.data.map(item => ({ ID: item.SalesOrderID, PRICE: item.ListPrice })))
        setPieChartData(() => props.data.map(item => ({ NAME: item.SalesOrderID, PRICE: item.UnitPrice })))
    }, [])

    if (!props.data.length > 0) {
        return <Redirect to='/excel-overview'/>
    }

    const barConfig = {
        data: lineChartData,
        xField: 'ID',
        yField: 'PRICE',
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            ID: { alias: 'ID' },
            PRICE: { alias: 'PRICE' },
        },
    };

    const pieConfig = {
        appendPadding: 15,
        data: pieChartData,
        angleField: 'PRICE',
        colorField: 'NAME',
        radius: 0.8,
        label: {
            type: 'outer',
            content: '{name} {percentage}',
        },
        interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }],
    };

    return (
        <div className="graph-container">
            <div className="bar-graph">
                <Column {...barConfig} />
            </div>
            <div className="pie-chart">
                <Pie {...pieConfig} />
            </div>
        </div>
    )
}
