import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';

import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcSreen } from '../components/dc/DcSreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const AppRouter = () => {

    const { user } = useContext(AuthContext);
    return (
        <Router>
            <div>
                {/* <Navbar /> */}
                {/* <Switch>
                    <PublicRoute exact path="/login" component={LoginScreen} isAuth={user.loggged} />
                    <PrivateRoute path="/" component={DashboardRoutes} isAuth={user.loggged} />
                </Switch> */}
                <Route exact path="/marvel" component={MarvelScreen} />
                <Route exact path="/hero/:heroeId" component={HeroScreen} />
                <Route exact path="/dc" component={DcSreen} />
                <Route exact path="/search" component={SearchScreen} />
            </div>
        </Router>
    )
}
