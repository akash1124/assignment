import React from 'react';
import { Tabs } from 'antd';
import { Link } from 'react-router-dom';

import { PRIMARYNAVIGATION } from '../utils/appConfigObjects';

import '../styles/Tabs.scss';

const { TabPane } = Tabs;

const renderPrimaryNavigation = (currentTabId, navigationTab) => (
    <Tabs activeKey={currentTabId} animated size='large' tabBarGutter={270}>
        {
            navigationTab.map(item => (
                <TabPane tab={<Link to={item.path} className={item.id === currentTabId ? 'selected-tab' : 'navigation-tabs'}>
                    {item.name}</Link>} key={item.id}
                />
            ))
        }
    </Tabs>
);

const getCurrentTab = (navigationTab, location) => {
    const pathInfo = [...navigationTab].find(item => location.pathname.includes(item.path));
    return pathInfo ? pathInfo.id : '1';
};

function TabComponent(props) {
    const currentTabId = getCurrentTab(PRIMARYNAVIGATION, props.history.location)
    return (
        <div className="primary-navigation-tabs">
            {renderPrimaryNavigation(currentTabId, PRIMARYNAVIGATION)}
        </div>
    )
}

export default TabComponent
