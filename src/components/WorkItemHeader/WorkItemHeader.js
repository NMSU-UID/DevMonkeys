import React from 'react';
import './WorkItemHeader.css'
import WorkItemInfo from './../WorkItemInfo/WorkItemInfo';

const WorkItemHeader = () => {
    
    return(
        <div className="workItemGridCustom" style={{float: 'right', paddingTop : '30px', paddingLeft : '30px', paddingRight : '30px'}}>
            <div style={{width: '370px', float:'right'}}>
              <span className="fontFam" style={{color: '#727272', paddingTop: '40px', fontWeight: '600', fontSize: '15px', display: 'inline-block'}}>IN PROGRESS</span>
              <h1 className="fontFam" style={{float: 'right', display: 'inline-block'}}>Work Item Title</h1>
              <div className="progressBar" >
                <span className="progressPercentage"></span>
             </div>
            </div>
            <p style={{clear:'both'}}/>
            <div className="fontFam" style={{float:'right', color: '#727272', fontWeight: '800', fontSize: '15px', display: 'inline-block'}}>50% COMPLETION</div>
            
            <WorkItemInfo/>
        
        </div>
        );
};

export default WorkItemHeader;