import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Table}  from 'semantic-ui-react';

const ListViewLists = (props) => {
    
    return( 
        
        <React.Fragment>
            <Table.Row>
                <Table.Cell>{props.id}</Table.Cell>
                <Table.Cell>{props.title}</Table.Cell>
                <Table.Cell>{props.description}</Table.Cell>
                <Table.Cell>{props.status}</Table.Cell>
                <Table.Cell>{props.mod}</Table.Cell>
            </Table.Row>
        
        </React.Fragment>
        );
};

export default ListViewLists;