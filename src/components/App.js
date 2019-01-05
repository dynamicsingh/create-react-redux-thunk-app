import React, {Component} from 'react';
import AppTextComponent from './presentational/appText/appText';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import SampleContainer from '../components/containers/sampleContainer/sampleContainer';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={AppTextComponent}/>
                    <Route exact path="/sampleRoute" component={SampleContainer}/>
                </div>
            </Router>
        );
    }
}

export default App;
