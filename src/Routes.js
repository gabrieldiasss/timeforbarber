import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { InicialPage } from './pages/InicialPage';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Home } from './pages/Home'
import { BarberServices } from './pages/BarberServices';
import { Appointments } from './pages/Appointments/indext';
import { Profile } from './pages/Profile';

import PrivateRoute from './private/PrivateRoute.tsx'
import PrivateRedirectToHome from './private/PrivateLogin.tsx'

export function Routes() {

    return (

        <Router>
            <Switch>
                <PrivateRedirectToHome exact path="/" component={InicialPage} />
                <PrivateRedirectToHome exact path="/login" component={Login} />
                <PrivateRedirectToHome exact path="/register" component={Register} />
                <PrivateRoute exact path="/home" component={Home} />
                <PrivateRoute exact path="/services/:id" component={BarberServices} />
                <PrivateRoute exact path="/myappointments" component={Appointments} />
                <PrivateRoute exact path="/profile" component={Profile} />
            </Switch>
        </Router>
    )
}

