import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Table}  from 'semantic-ui-react';
import ListViewList from './../ListViewList/ListViewList';

const ListViewLists = (props) =>props.sprints.map(sprints =>{
    return <ListViewList
        id={sprints.sprintID}
        title={sprints.sprintTitle}
        description={sprints.sprintDescription}
        status={sprints.sprintStatus}
        mod={sprints.sprintLastMod}
    />
});

export default ListViewLists;