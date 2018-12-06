import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Table}  from 'semantic-ui-react';

const ListView = () =>{
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
                <Table.Row>
                    <Table.Cell>12343</Table.Cell>
                    <Table.Cell>Work Item Title</Table.Cell>
                    <Table.Cell>Work Item Description</Table.Cell>
                    <Table.Cell>New</Table.Cell>
                    <Table.Cell>11-25-2018</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>12343</Table.Cell>
                    <Table.Cell>Work Item Title</Table.Cell>
                    <Table.Cell>Work Item Description</Table.Cell>
                    <Table.Cell>New</Table.Cell>
                    <Table.Cell>11-25-2018</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>12343</Table.Cell>
                    <Table.Cell>Work Item Title</Table.Cell>
                    <Table.Cell>Work Item Description</Table.Cell>
                    <Table.Cell>New</Table.Cell>
                    <Table.Cell>11-25-2018</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>12343</Table.Cell>
                    <Table.Cell>Work Item Title</Table.Cell>
                    <Table.Cell>Work Item Description</Table.Cell>
                    <Table.Cell>New</Table.Cell>
                    <Table.Cell>11-25-2018</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>12343</Table.Cell>
                    <Table.Cell>Work Item Title</Table.Cell>
                    <Table.Cell>Work Item Description</Table.Cell>
                    <Table.Cell>New</Table.Cell>
                    <Table.Cell>11-25-2018</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>12343</Table.Cell>
                    <Table.Cell>Work Item Title</Table.Cell>
                    <Table.Cell>Work Item Description</Table.Cell>
                    <Table.Cell>New</Table.Cell>
                    <Table.Cell>11-25-2018</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>12343</Table.Cell>
                    <Table.Cell>Work Item Title</Table.Cell>
                    <Table.Cell>Work Item Description</Table.Cell>
                    <Table.Cell>New</Table.Cell>
                    <Table.Cell>11-25-2018</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>12343</Table.Cell>
                    <Table.Cell>Work Item Title</Table.Cell>
                    <Table.Cell>Work Item Description</Table.Cell>
                    <Table.Cell>New</Table.Cell>
                    <Table.Cell>11-25-2018</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>12343</Table.Cell>
                    <Table.Cell>Work Item Title</Table.Cell>
                    <Table.Cell>Work Item Description</Table.Cell>
                    <Table.Cell>New</Table.Cell>
                    <Table.Cell>11-25-2018</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>12343</Table.Cell>
                    <Table.Cell>Work Item Title</Table.Cell>
                    <Table.Cell>Work Item Description</Table.Cell>
                    <Table.Cell>New</Table.Cell>
                    <Table.Cell>11-25-2018</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>12343</Table.Cell>
                    <Table.Cell>Work Item Title</Table.Cell>
                    <Table.Cell>Work Item Description</Table.Cell>
                    <Table.Cell>New</Table.Cell>
                    <Table.Cell>11-25-2018</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>12343</Table.Cell>
                    <Table.Cell>Work Item Title</Table.Cell>
                    <Table.Cell>Work Item Description</Table.Cell>
                    <Table.Cell>New</Table.Cell>
                    <Table.Cell>11-25-2018</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>34554</Table.Cell>
                    <Table.Cell>Work Item Title</Table.Cell>
                    <Table.Cell>Work Item Description</Table.Cell>
                    <Table.Cell>In Progress</Table.Cell>
                    <Table.Cell>11-10-2018</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>34656</Table.Cell>
                    <Table.Cell>Work Item Title</Table.Cell>
                    <Table.Cell>Work Item Description</Table.Cell>
                    <Table.Cell>Completed</Table.Cell>
                    <Table.Cell>11-13-2018</Table.Cell>
                </Table.Row>
                </Table.Body>
            </Table>
        </div>
        );
};

export default ListView; 
