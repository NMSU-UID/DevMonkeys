import React,{Component} from 'react';
import './SprintField.css';
import SprintHeader from './../../components/SprintHeader/SprintHeader';
import ListView from './../../components/ListView/ListView';
import DragDropView from './../../components/DragDropView/DragDropView';



class SprintField extends Component{
    
    state={
        showListView: false,
        showDragnDropView :false,
        showNewWorkItem: false,
        sprints:[
                {
                   sprintID: 1234,
                   sprintTitle:'Work Item Title',
                   sprintDescription:'Work Item description',
                   sprintStatus: 'New',
                   sprintLastMod:'11-23-2018'
                },
                {
                   sprintID: 1234,
                   sprintTitle:'Work Item Title',
                   sprintDescription:'Work Item description',
                   sprintStatus: 'New',
                   sprintLastMod:'11-24-2018'
                },
                {
                   sprintID: 1234,
                   sprintTitle:'Work Item Title',
                   sprintDescription:'Work Item description',
                   sprintStatus: 'In-Progress',
                   sprintLastMod:'11-25-2018'
                },
                {
                   sprintID: 1234,
                   sprintTitle:'Work Item Title',
                   sprintDescription:'Work Item description',
                   sprintStatus: 'Complete',
                   sprintLastMod:'11-26-2018'
                },
            ]
    }
    
    listClickHandler = () =>{
      this.setState({
          showListView: !this.state.showListView,
          showDragnDropView: false,
          });  
    };
    
    thClickHandler = () =>{
      this.setState({
          showDragnDropView: !this.state.showDragnDropView,
          showListView: false,
          });  
    };
    
    wiClickHandler = () =>{
      this.setState({
          showNewWorkItem: !this.state.showNewWorkItem
          });  
    };
    render(){
        return(
            <div style={{marginBottom:'30px', paddingTop:'15px', display:'inline'}}>
                <div className="sprintGrid" style={{float: 'right'}}>
                    <SprintHeader listclick={this.listClickHandler} thclick={this.thClickHandler} wiclick={this.wiClickHandler} />
                    {this.state.showListView ? <ListView sprints={this.state.sprints}/> :null}
                    {this.state.showDragnDropView ? <DragDropView/> :null}
                    
                </div>
            </div>
        );
    }
}

export default SprintField; 