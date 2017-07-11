
import React, {Component} from 'react';
import {render} from 'react-dom';
import { Provider, connect } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { bindActionCreators, createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import "whatwg-fetch";

// import { PeopleModel } from './model/peoplemodel';
import { Login } from './components/login/index';
// import { Search } from './components/search/search';
import AppConfig from './constants/appconfig';
import rootReducer from './reducers/index';
import { fetchPeople } from './actions/index';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends Component {

  getPeople() {
    //Commented this section as I would be using Reac-Redux
    // fetch(AppConfig.PEOPLE_URL)
    //   .then((response) => {
    //       return response.json();//First response.json returns the Promise instead of the data required
    //   }).then((people) => {
    //       //console.info(people);
    //   }).catch((err) => {console.info(err)});

    console.info(this);
  }

  componentDidMount() {
        this.getPeople();
  }

  componentWillUpdate(nextProps, nextState) {
    console.info(this);
  }

  render() {
    return(
      <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
          <div>
            <Route path='/' component = { Login } />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

render(<App/>, document.getElementById('root'));

function mapDispatchToProps(dispatch) {
  console.info('hi');
  return bindActionCreators({ fetchPeople }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
