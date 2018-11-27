import React, { Component } from 'react';
import './App.css';
import SideBar from "./SideBar";
import 'semantic-ui-css/semantic.min.css';
import { Button, Icon, Label, Menu, Table, Modal, Header, Image, Input, Grid, Form, TextArea, Dropdown, Sidebar, Segment } from 'semantic-ui-react';
import sp_chocolate from './spongebob_chocolate300.jpg';
import sp_fish_on_fire from './spongebob_fish_on_fire300.jpg';
import sp_load_of_barnacles from './spongebob_load_of_barnacles300.jpg';
import sp_roach from './spongebob_roach300.jpg';
import sp_smell from './spongebob_smell300.jpg';

/*

Sprints.js

This child component is the Sprint View. This is to be display when 
a user clicks on Sprints.

*/

const teamMembers = [
    {
        text: 'John Smith',
        value: 'John Smith',
        image: { avatar: true, src:sp_smell, alt:sp_smell}
    },
    {
        text: 'Sebastian Banner',
        value: 'Sebastian Banner',
        image: { avatar: true, src:sp_chocolate, alt:sp_chocolate}
    },
    {
        text: 'Ariel Salt',
        value: 'Ariel Salt',
        image: { avatar: true, src:sp_fish_on_fire, alt:sp_fish_on_fire}
    },
    {
        text: 'Andrew Walters',
        value: 'Andrew Walters',
        image: { avatar: true, src:sp_load_of_barnacles, alt:sp_load_of_barnacles}
    },
    {
        text: 'Damian Bolten',
        value: 'Damian Bolten',
        image: { avatar: true, src:sp_roach, alt:sp_roach}
    },
]

const flags = [
    {
        text: 'New',
        value: 'New',
    },
    {
        text: 'In Progress',
        value: 'In Progress',
    },
    {
        text: 'Completed',
        value: 'Completed',
    }
]

class Sprints extends React.Component{
    constructor(props) {
      super(props);
      this.state = {showListView : true, showDrapAndDrop : false};
      this.listViewButtonOnClick = this.listViewButtonOnClick.bind(this);
      this.dragAndDropButtonOnClick = this.dragAndDropButtonOnClick.bind(this);
      this.closeConfigShow = this.closeConfigShow.bind(this);
      this.close = this.close.bind(this);
      //this.teamMembersClick = this.teamMembersClick.bind(this);
    }
    
    state = { open: false }

    closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
      this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
    }
  
    close = () => this.setState({ open: false })

    listViewButtonOnClick(){
        this.setState(state => ({
            showListView : true,
            showDrapAndDrop : false
        }));
    }

    dragAndDropButtonOnClick(){
        this.setState(state => ({
            showDrapAndDrop : true,
            showListView : false
        }));
    }



    render(){
        const { open, closeOnEscape, closeOnDimmerClick } = this.state

        return (
            <div>
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"></link>
                <span style={{display:'inline', float:'left'}}>
                    <SideBar />
                    
                </span>
                <span style={{marginBottom:'30px', paddingTop:'15px', display:'inline'}}>
                    <div className="sprintGrid" style={{float: 'right'}}>
                        <div style={{backgroundColor:'#f1f1f1', borderBottom:'1px solid #d1d1d1', width: '100%', padding:'15px', paddingTop:'25px', paddingBottom:'25px'}}>
                            <h2 className="fontFam" style={{display: 'inline-block', margin:'0'}}>SPRINT DV_15873</h2>
                            <span className="fontFam" style={{paddingTop:'17px', paddingLeft:'10px', fontSize: '15px', display: 'inline-block'}}>REMAINING DAYS: 15</span>
                            
                            <Button onClick={this.closeConfigShow(true, false)} style={{float:'right'}}>NEW</Button>
                            <Modal
                                style={{width:'800px', position: 'relative !important', zIndex:'1200'}}
                                open={open}
                                closeOnEscape={closeOnEscape}
                                closeOnDimmerClick={closeOnDimmerClick}
                                onClose={this.close}
                                >
                                <Modal.Header>New Work Item</Modal.Header>
                                <Modal.Content>
                                    <Grid columns='equal'>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Label style={{width:'100%', paddingTop:'13px', paddingBottom:'13px'}}>
                                                    <Icon name='chart line' /> SPRINT DV_15872
                                                </Label>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <Dropdown style={{width:'100%'}} placeholder='Assign To' fluid selection options={teamMembers}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Input style={{width:'100%'}} placeholder='Title' />
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>    
                                            <Grid.Column>
                                                <Form>
                                                    <TextArea style={{width:'100%'}} placeholder='Description' />
                                                </Form>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Input type="number" style={{width:'100%'}} placeholder='Estimated Time To Completion' />
                                            </Grid.Column>
                                            <Grid.Column>
                                                <Dropdown style={{width:'100%'}} placeholder='Status' fluid selection options={flags}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>                                     
                                </Modal.Content>
                                <Modal.Actions>
                                    <Button onClick={this.close} content='Standard' basic>Cancel</Button>
                                    <Button onClick={this.close} positive>Save</Button>
                                </Modal.Actions>
                            </Modal>
                            
                            <Button onClick={this.listViewButtonOnClick} icon style={{float:'right'}}>
                                <Icon name='list' />
                            </Button>
                            <Button onClick={this.dragAndDropButtonOnClick} icon style={{float:'right'}}>
                                <Icon name='th' />
                            </Button>
                        </div>
                        { this.state.showListView ?  

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
                        : null }           
                        { this.state.showDrapAndDrop ?  
                            <div style={{justifyContent: 'center', float: 'right', marginTop:'30px', marginRight:'15px', display: 'block'}}>
                
                                <table className="newTable">
                                    <thead>
                                    <tr>
                                        <th className="fontFam" style={{textAlign:'center', }}>
                                        <span className="newflag">NEW</span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="fontFam" style={{display:'inline'}}>
                                        <div className="taskItemHeader">W_234790</div>
                                        <div className="taskItemBody">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</div>
                                        </td>
                                        <td className="fontFam" style={{display:'inline'}}>
                                        <div className="taskItemHeader">W_234790</div>
                                        <div className="taskItemBody">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</div>
                                        </td>
                                        <td className="fontFam droppable" style={{display:'inline'}}>
                                        <div className="taskItemHeader">W_234791</div>
                                        <div className="taskItemBody">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                
                                <table className="inProgressTable">
                                    <thead>
                                    <tr>
                                        <th className=" fontFam" style={{textAlign:'center', }}>
                                        <span className="inProgressflag">IN PROGRESS</span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="fontFam"  style={{display:'inline'}}>
                                        <div className="taskItemHeader">W_234790</div>
                                        <div className="taskItemBody">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                                <table className="completedTable">
                                    <thead>
                                    <tr>
                                        <th className=" fontFam" style={{textAlign:'center', }}>
                                        <span className="completedflag">COMPLETED</span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr style={{justifyContent: 'center'}}>
                                        <td className="fontFam" style={{display:'inline'}}>
                                        <div className="taskItemHeader">W-234793</div>
                                        <div className="taskItemBody">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</div>
                                        </td>
                                        <td className="fontFam" style={{display:'inline'}}>
                                        <div className="taskItemHeader">W-234794</div>
                                        <div className="taskItemBody">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        : null }
                    </div>
                    
                </span>
            </div>
        );
    }
}
export default Sprints;