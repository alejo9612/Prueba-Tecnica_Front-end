import React from 'react';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import { MainPage } from '../components/MainPage';


export const AppRouter = () => {

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact
                        component={MainPage}
                    />
                </Switch>
            </div>
        </Router>
    )
}
