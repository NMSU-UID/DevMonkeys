import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './DragDropView.css';

const DragDropView = () =>{
    
    return(
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
        
        </div>);
};

export default DragDropView;