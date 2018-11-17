import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import './App.css';
import sp_chocolate from './spongebob_chocolate300.jpg';
import sp_fish_on_fire from './spongebob_fish_on_fire300.jpg';
import sp_load_of_barnacles from './spongebob_load_of_barnacles300.jpg';
import sp_roach from './spongebob_roach300.jpg';
import sp_smell from './spongebob_smell300.jpg';
import { Button } from 'react-bootstrap';
import Button2 from 'react-bootstrap/lib/Button';


class WorkItem extends React.Component{
  constructor(props) {
    super(props);
  }

  state = {
    tasks: [{name:"T_234789",
             category:"new"},  
          
            {name:"T_234790", 
             category:"inProgress"}          
            ]
  }
  onDragStart = (ev, id) =>{
    console.log('dragstart:', id);
    ev.dataTransfer.setData("id", id); 
    //ev.dataTransfer.setData(“text/plain”,id);   
  }

  onDragOver = (ev) =>{
    ev.preventDefault();
  }

  onDrop = (ev, cat) => {       
    let id = ev.dataTransfer.getData("id");
    let tasks = this.state.tasks.filter((task) => {
        if (task.name == id) {
          task.category = cat;           
        }              
        return task;       
     });        
     this.setState({           
        ...this.state,           
        tasks       
     });    
  }

  render(){
    var tasks = {
      new: [],
      inProgress:[]
    }

    this.state.tasks.forEach((t)=>{
      tasks[t.category].push(
        <td key={t.name} style={{display:'block'}} onDragStart={(e)=>this.onDragStart(e, t.name)} draggable className="draggable fontFam">
          {t.name}
        </td>
      );
    });



    return(
      <div style={{marginBottom:'30px', paddingTop:'15px'}}>

        <div className="grid" style={{float: 'right', padding : '30px'}}>
            
            <div style={{width: '370px', float:'right'}}>
              <span className="fontFam" style={{color: '#727272', paddingTop: '40px', fontWeight: '600', fontSize: '15px', display: 'inline-block'}}>IN PROGRESS</span>
              <h1 className="fontFam" style={{float: 'right', display: 'inline-block'}}>Work Item Title</h1>
              <div className="progressBar" >
                <span className="progressPercentage"></span>
              </div>
              
              
            </div>
            <p style={{clear:'both'}}/>
            <div className="fontFam" style={{float:'right', color: '#727272', fontWeight: '800', fontSize: '15px', display: 'inline-block'}}>50% COMPLETION</div>
            <p style={{clear:'both'}}>
              <div style={{maxWidth: '950px', float:'right', display: 'block', align:"right"}}>
                    <h4 className="fontFam" style={{maxWidth: '950px', fontWeight: '500', textAlign: 'justify', align:'right', display: 'block'}}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis.</h4>
              </div>
              <div style={{float:'right', display: 'block', align:"right"}}>

                  <span className="fontFam" style={{top: '15px', display:'inline', position: 'relative', marginRight:'30px'}}>Last Modified: 11/11/2018</span>
                  <span className="fontFam" style={{top: '15px', position: 'relative', marginRight:'15px', display:'inline'}}>Assigned To: Ariel Salt</span>
                  <img className="team_img img_workitem" style={{display:'inline'}} src={sp_fish_on_fire} alt={sp_fish_on_fire}></img>

                  
              </div>
            </p>
        </div>

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
                  <div className="taskItemHeader">{tasks.new}</div>
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
                  <div className="taskItemHeader">{tasks.inProgress}</div>
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
  }
};
export default WorkItem;
