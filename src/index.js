import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SideBar from "./SideBar";
import WorkItem from "./WorkItem";
import Sprints from "./Sprints"

/* 

index.js 

This is the root class that get's used on initiation.
Use this class to call child components.

*/
class App extends React.Component{
    constructor(props) {
        super(props);
        //this.onClick = this.onClick.bind(this);
        //this.workItemsClick = this.workItemsClick.bind(this);
        //this.teamMembersClick = this.teamMembersClick.bind(this);
    }


    render(){
        return (
            <div id="App">
                
                {/*

                For Work Item View:
                
                    <SideBar />
                    <WorkItem />
                
                */}

                {/*

                
                For Sprint View

                    <Sprints />
                
                */} 

                <SideBar />
                <WorkItem />

            
            </div>
        );
    }
}
//export default App;
ReactDOM.render(<App />, document.getElementById('root'));
