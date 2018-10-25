import * as React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Foo from './components/Foo';

export default (
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/foo" component={Foo} />
    </div>
);
