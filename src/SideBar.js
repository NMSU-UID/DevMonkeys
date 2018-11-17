import React, { Component } from 'react';
import { stack as Menu } from "react-burger-menu";
import './App.css';
import sp_chocolate from './spongebob_chocolate300.jpg';
import sp_fish_on_fire from './spongebob_fish_on_fire300.jpg';
import sp_load_of_barnacles from './spongebob_load_of_barnacles300.jpg';
import sp_roach from './spongebob_roach300.jpg';
import sp_smell from './spongebob_smell300.jpg';

const moreSprints = [<div >SubSprint 1</div>, <div>SubSprint 2</div>, <div>SubSprint 3</div>, <div>SubSprint 4</div>, <div>SubSprint 5</div>];
const moreWorkItems = [<div >SubWorkItem 1</div>, <div>SubWorkItem 2</div>, <div>SubWorkItem 3</div>, <div>SubWorkItem 4</div>, <div>SubWorkItem 5</div>];
const moreTeamMembers = [<div className="team_div">
                            <span className="team_span">John Smith</span>
                            <img className="team_img" src={sp_smell} alt={sp_smell}></img>
                          </div>,

                         <div className="team_div">
                            <span className="team_span">Sebastian Banner</span>
                            <img className="team_img" src={sp_chocolate} alt={sp_chocolate}></img>
                          </div>,
                           
                         <div className="team_div">
                            <span className="team_span">Ariel Salt</span>
                            <img className="team_img" src={sp_fish_on_fire} alt={sp_fish_on_fire}></img>
                         </div>, 

                         <div className="team_div">
                            <span className="team_span">Andrew Walters</span>
                            <img className="team_img" src={sp_load_of_barnacles} alt={sp_load_of_barnacles}></img>
                          </div>,

                         <div className="team_div">
                            <span className="team_span">Damian Bolten</span>
                            <img className="team_img" src={sp_roach} alt={sp_roach}></img>
                          </div>];

class SideBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {showSprints : false, showWorkItems : false, showTeamMembers: false};
    this.onClick = this.onClick.bind(this);
    this.workItemsClick = this.workItemsClick.bind(this);
    this.teamMembersClick = this.teamMembersClick.bind(this);
  }

  onClick(){
    //alert("Sprints Clicked");
    //this.setState({ showResults: true });
    this.setState(state => ({
      showSprints : !state.showSprints
    }));

  }

  workItemsClick(){
    this.setState(state => ({
      showWorkItems : !state.showWorkItems
    }));
  }

  teamMembersClick(){
    this.setState(state => ({
      showTeamMembers : !state.showTeamMembers
    }));
  }

  render(){
    return (
      <Menu isOpen={ true } noOverlay disableOverlayClick customBurgerIcon={ false } customCrossIcon={ false } >
        
        <div className="fontFamilies">Sprintacular</ div>



        <a className="fontFam" style={{paddingTop:"10px", paddingBottom:"10px"}} onClick={this.onClick}>
        Sprints
        </ a>
        <div className="fontFam" style={{paddingLeft : "30px"}}>
          { this.state.showSprints ? moreSprints : null }
        </div>
  
        <div className="fontFam" style={{paddingTop:"10px", paddingBottom:"10px"}} onClick={this.workItemsClick}>
        Work Items
        </div>
        <div className="fontFam" style={{paddingLeft : "30px"}}>
          { this.state.showWorkItems ? moreWorkItems : null }
        </div>

        <div className="fontFam" style={{paddingTop:"10px", paddingBottom:"10px"}} onClick={this.teamMembersClick}>
        Team
        </div>
          <div className="fontFam" style={{paddingLeft : "30px"}}>
            { this.state.showTeamMembers ? moreTeamMembers[0] : null }
          </div>
          <div className="fontFam" style={{paddingLeft : "30px"}}>
            { this.state.showTeamMembers ? moreTeamMembers[1] : null }
          </div>
          <div className="fontFam" style={{paddingLeft : "30px"}}>
            { this.state.showTeamMembers ? moreTeamMembers[2] : null }
          </div>
          <div className="fontFam" style={{paddingLeft : "30px"}}>
            { this.state.showTeamMembers ? moreTeamMembers[3] : null }
          </div>
          <div className="fontFam" style={{paddingLeft : "30px"}}>
            { this.state.showTeamMembers ? moreTeamMembers[4] : null }
          </div>

        <div className="fontFam" style={{paddingTop:"10px", paddingBottom:"10px"}} href="/desserts">
        Settings
        </div>
      </Menu>
    );
  }
}
export default SideBar;