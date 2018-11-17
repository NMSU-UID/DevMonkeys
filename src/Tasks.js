import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react'
import './App.css';

class Tasks extends React.Component{
    constructor(props) {
        super(props);
        //this.state = {showSprints : false, showWorkItems : false, showTeamMembers: false};
        //this.onClick = this.onClick.bind(this);
        //this.workItemsClick = this.workItemsClick.bind(this);
        //this.teamMembersClick = this.teamMembersClick.bind(this);
    }

    render(){
        return(
            <div>
                <Grid celled className={{width:'950px'}}>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Image src='' />
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Image src='' />
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Image src='' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}
export default Tasks;