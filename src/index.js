import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux'; 
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'; 
import store from './store'; 
import Tasks from './components/tasks';
import Profile from './components/profile';

//Основной компонент 
class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="main">
              <Route path="/" component={Tasks} exact />
              <Route path="/profile" component={Profile} exact />
						  <Route path="/profile/:id" component={Profile} exact/> {/*Подставим id в url*/}
          </div>
      </div>
    );
  }
};

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
      <Switch>
         <App />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

