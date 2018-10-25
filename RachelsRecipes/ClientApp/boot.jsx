import './css/site.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'babel-polyfill';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import RoutesModule from './routes';


function renderApp() {
    ReactDOM.render(
        <AppContainer>
            {
                // eslint-disable-next-line react/no-children-prop
                <BrowserRouter children={RoutesModule} />
            }
        </AppContainer>,
        document.getElementById('app'),
    );
}

renderApp();

// Allow Hot Module Replacement
if (module.hot) {
    module.hot.accept();
}
