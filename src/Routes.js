import React, { Suspense } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import TabComponent from './components/TabComponent';

import { routes } from './utils/appConfigObjects';
import { renderLoading } from './utils/helperfunctions';

const ExcelContainer = React.lazy(() => import('./components/ExcelContainer'))
const DraggableComponent = React.lazy(() => import('./components/DraggableContainer'));
const VisulaizationContainer = React.lazy(() => import('./components/VisulaizationContainer'));

const renderRoute = (Component, relativePath, isExact) => (
    <Route exact={isExact} path={relativePath} component={Component} />
);

const renderApplicationRoutes = () => (
    <Suspense fallback={renderLoading()}>
        <Switch>
            {renderRoute(ExcelContainer, routes.EXCEL_OVERVIEW.value, routes.EXCEL_OVERVIEW.isExact)}
            {renderRoute(DraggableComponent, routes.DRAGGABLE.value, routes.DRAGGABLE.isExact)}
            {renderRoute(VisulaizationContainer, routes.VISUALIZATION.value, routes.VISUALIZATION.isExact)}
            <Redirect to={routes.EXCEL_OVERVIEW.value} />
        </Switch>
    </Suspense>
)

function Routes(props) {
    return (
        <div className="route-container">
            <div className="primary-tabs">
                <TabComponent {...props}/>
            </div>
            <div className="routes">
                {renderApplicationRoutes()}
            </div>
        </div>
    )
}

export default withRouter(Routes)

