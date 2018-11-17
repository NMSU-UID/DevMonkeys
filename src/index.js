import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import SideBar from './layouts/SideBar';
import { Container } from 'semantic-ui-react'
import SideBar from "./SideBar";
import WorkItem from "./WorkItem";
import Tasks from "./Tasks";
import { Row, Col } from 'reactstrap';

//import React, {Component} from 'react';

//import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
function App() {
    return (
      <div id="App">
        <Row style={{display:"inline", width:"100%"}}>
            <Col xs={3} md={3} >
                <SideBar />
            </Col>
        </Row>
        <WorkItem />
      </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
