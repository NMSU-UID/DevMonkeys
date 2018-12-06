import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Table}  from 'semantic-ui-react';
import ListViewLists from './../ListViewLists/ListViewLists';

const ListView = (props) =>{
    return(
        <div>
            <Table celled striped structured style={{margin:'0', border:'unset'}}>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>TITLE</Table.HeaderCell>
                    <Table.HeaderCell>DESCRIPTION</Table.HeaderCell>
                    <Table.HeaderCell>STATUS</Table.HeaderCell>
                    <Table.HeaderCell>LAST MODIFIED</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                 <Table.Body>
                <ListViewLists sprints={props.sprints}/>
                </Table.Body>
            </Table>
        </div>
        );
};

export default ListView; 
