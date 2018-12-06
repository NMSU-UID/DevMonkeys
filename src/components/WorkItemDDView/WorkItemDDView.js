import React from 'react';
import './WorkItemDDView';

const WorkItemDDView = () =>{
    return(
        <div>
            <p style={{clear:'both'}}/>
        <div style={{justifyContent: 'center', float: 'right', marginRight: '20px', marginTop:'20px', display: 'block'}}>
          
          <table className="newTable">
            <thead>
              <tr>
                <th className="fontFam" style={{textAlign:'center', }}>
                  <span className="newflag">NEW</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=>{this.onDrop(e, "new")}}>
                <td className="fontFam" style={{display:'inline'}}>
                  <div className="taskItemHeader">T_234789</div>
                  <div className="taskItemBody">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</div>
                </td>
                <td className="fontFam" style={{display:'inline'}}>
                  <div className="taskItemHeader">T_234790</div>
                  <div className="taskItemBody">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</div>
                </td>
                <td className="fontFam droppable" style={{display:'inline'}}>
                  <div className="taskItemHeader">T_234791</div>
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
              <tr onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=>this.onDrop(e, "inProgress")}>
                <td className="fontFam"  style={{display:'inline'}}>
                  <div className="taskItemHeader">T_234790</div>
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
                  <div className="taskItemHeader">T-234793</div>
                  <div className="taskItemBody">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</div>
                </td>
                <td className="fontFam" style={{display:'inline'}}>
                  <div className="taskItemHeader">T-234794</div>
                  <div className="taskItemBody">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
        );
};

export default WorkItemDDView;