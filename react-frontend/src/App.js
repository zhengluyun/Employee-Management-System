import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

function App() {
  return (
    <Router>
      <HeaderComponent />
      <div className="container">
        <Switch>
          <Route path= "/" exact component={ListEmployeeComponent}></Route>
          <Route path= "/list-employees" component={ListEmployeeComponent}></Route>
          <Route path= "/add-employee" component={CreateEmployeeComponent}></Route>
        </Switch>
        {/* <ListEmployeeComponent /> */}
      </div>
      <FooterComponent />
    </Router>
  );
}

export default App;
