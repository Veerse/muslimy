import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import './App.css';

import { Box, Grommet, Main } from 'grommet';
import { MyNavbar } from "./app/Navbar";
import { Home } from "./app/Home";
import { PodcastList } from "./features/podcasts/PodcastList";
import { MyFooter } from "./app/Footer";
import { AppTheme } from './app/theme';
import {SinglePodcastPage} from "./features/podcasts/SinglePodcastPage";


function App() {
    return (
        <Router>
            <Grommet full={true} theme={AppTheme}>
                <Box fill={true}>
                    <MyNavbar />

                    <Box flex="grow" className="App">
                        <Main pad="small">
                            <Switch>
                                <Route
                                    exact path="/"
                                    component={Home}
                                />
                                <Route
                                    exact path="/podcasts"
                                    render={() => (
                                        <React.Fragment>
                                            <PodcastList />
                                        </React.Fragment>
                                    )}
                                />
                                <Route
                                    exact path="/podcasts/:podcastId"
                                    component={SinglePodcastPage}
                                />
                                <Redirect to="/" />
                            </Switch>
                        </Main>
                    </Box>

                    <MyFooter />
                </Box>
            </Grommet>
        </Router>
    );
}

export default App;
