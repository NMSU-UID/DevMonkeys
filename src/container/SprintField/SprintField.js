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
                    {this.state.showListView ? <ListView/> :null}
                    {this.state.showDragnDropView ? <DragDropView/> :null}
                    
                </div>
            </div>
        );
    }
}

export default SprintField; 