import React,{Component} from 'react';
import WorkItemHeader from './../../components/WorkItemHeader/WorkItemHeader'
import WorkItemDDView from './../../components/WorkItemDDView/WorkItemDDView'


class WorkItemField extends Component {
    //set state to show dd view and make everything dynamic
    
    render(){
        return(
            <div style={{marginBottom:'30px', paddingTop:'15px'}}>
                <WorkItemHeader/>
                <WorkItemDDView/>
            </div>
            );
    }
}

export default WorkItemField;