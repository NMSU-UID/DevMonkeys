import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import './App.css'
import SprintField from './container/SprintField/SprintField';
import WorkItemField from './container/WorkItemField/WorkItemField';
import { BrowserRouter as Router, Route,} from "react-router-dom";



class App extends Component {
  
  render(){
  
    return(
      <Router>
        <div id='App'>
          <Layout>
            <Route path="/" exact component={null} />
            <Route path="/sprints/" component={SprintField} />
            <Route path="/workitems/" component={WorkItemField} />
          </Layout>
        </div>
      </Router>
      );
  }
}

export default App;
