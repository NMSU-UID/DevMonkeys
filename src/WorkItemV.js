import React, { Component } from 'react';
import './App.css';
import WorkItem from './WorkItem';
class WorkItemV extends React.Component{
    constructor(props) {
      super(props);
      this.state = {showWorkItemView : false};
      this.workItemOnClick = this.workItemOnClick.bind(this);
      //this.workItemsClick = this.workItemsClick.bind(this);
      //this.teamMembersClick = this.teamMembersClick.bind(this);
    }

    workItemOnClick(){
        this.setState(state => ({
          showWorkItemView : !state.showWorkItemView
        }));
    }

    render(){
        return (
            <div onClick={this.workItemOnClick}>WorkItem 1</div>
        );
    }
}
export default WorkItemV;