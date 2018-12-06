import React from 'react';
import './WorkItemInfo.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Icon,}  from 'semantic-ui-react';
import sp_fish_on_fire from './../../Img/spongebob_fish_on_fire300.jpg'; 

const WorkItemInfo = () => {
    return(
        <div>
            <div style={{maxWidth: '950px', float:'right', display: 'block', align:"right", marginTop:'30px'}}>
                <h4 className="fontFam" style={{maxWidth: '950px', fontWeight: '500', textAlign: 'justify', align:'right', display: 'block'}}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis.</h4>
            </div>
            <span style={{float:'left', display: 'inline', width:'100%', marginTop:'30px', position:'relative'}}>
                
                <span className="fontFam" style={{bottom: '25px', position: 'relative', margin:'10px', display:'inline'}}>Assigned To: Ariel Salt</span>
                <img className="img_workitem" style={{display:'inline', margin:'10px'}} src={sp_fish_on_fire} alt={sp_fish_on_fire}></img>
                
                <span className="fontFam" style={{bottom: '25px', position: 'relative', margin:'10px', display:'inline'}}>Last Modified By: Ariel Salt</span>
                <img className="img_workitem" style={{display:'inline',  margin:'10px'}} src={sp_fish_on_fire} alt={sp_fish_on_fire}></img>
                
                <span className="fontFam" style={{bottom: '25px', display:'inline', position: 'relative', margin:'10px'}}>Last Modified: 11/11/2018</span>
                
                
    
                <Button  icon style={{float:'right', position: 'absolute',right: '45px',bottom: '0',marginBottom: '15px'}}>
                    <Icon name='list' />
                </Button>
                <Button  icon style={{float:'right', position: 'absolute',right: '0',bottom: '0',marginBottom: '15px'}}>
                    <Icon name='th' />
                </Button>
                <Button style={{float:'right', position: 'absolute',right: '90px',bottom: '0',marginBottom: '15px'}}>NEW</Button>
            </span>
        </div>
        );
};

export default WorkItemInfo;