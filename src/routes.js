import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IssuesPage from './components/IssuesPage';
import NewIssue from './components/NewIssue';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/list-issues' component={ IssuesPage } exact/>
                <Route path='/add-issue' component={ NewIssue } exact/>
      
            </Switch>
        </BrowserRouter>
    
    );
}