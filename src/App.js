import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Home, ActorDetails, ShowDetails } from 'pages';
import { Header } from 'components';
import store from 'stores/store';

function App() {
    return (
        <div>
            <Provider store={store}>
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/show/:showId">
                            <ShowDetails />
                        </Route>
                        <Route exact path="/actor/:actorId">
                            <ActorDetails />
                        </Route>
                    </Switch>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
