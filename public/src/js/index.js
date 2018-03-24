import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import 'normalize.css/normalize.css';
import {AppScreen,LoginScreen,RegisterScreen} from './screens';
import '../../scss/app.scss';

class App extends Component{

    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={AppScreen}/>
                    <Route path="/login" component={LoginScreen}/>
                    <Route path="/register" component={RegisterScreen}/>
                </Switch>
            </Router>
        );  
    }
}



ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
}






