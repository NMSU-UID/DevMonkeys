import React from 'react';
import './SprintHeader.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Icon,}  from 'semantic-ui-react';

const SprintHeader = (props) =>{
    return(
        <div className='sprintH'>
            <h2 className="FontFam" style={{display: 'inline-block', margin:'0'}}>SPRINT DV_15873</h2>
            <span className="FontFam" style={{paddingTop:'17px', paddingLeft:'10px', fontSize: '15px', display: 'inline-block'}}>REMAINING DAYS: 15</span>
            <Button style={{float:'right'}} onClick={props.wiclick} >New</Button>
            <Button icon style={{float:'right'}} onClick={props.listclick} ><Icon name='list' /></Button>
            <Button icon style={{float:'right'}} onClick={props.thclick} ><Icon name='th' /></Button>
            
        </div>
        
        );
}

export default SprintHeader;