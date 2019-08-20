import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux'; 
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'; 
import store from './store'; 
import Tasks from './components/tasks';

//Основной компонент 
class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="main">
              <Tasks/>
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

