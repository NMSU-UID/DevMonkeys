import React,{Component} from 'react';
import {stack as Menu} from 'react-burger-menu';
import './Sidebar.css';
import Teams from './../../components/Teams/Teams';
import sp_chocolate from './../../Img/spongebob_chocolate300.jpg';
import sp_fish_on_fire from './../../Img/spongebob_fish_on_fire300.jpg';
import sp_load_of_barnacles from './../../Img/spongebob_load_of_barnacles300.jpg';
import sp_roach from './../../Img/spongebob_roach300.jpg';
import sp_smell from './../../Img/spongebob_smell300.jpg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class sidebar extends Component {
    
    state = {
          teamMember: [
              {name:'John Smith',img:sp_chocolate, id:'qwe1'},
              {name:'Sebastian Banner',img:sp_fish_on_fire,id:'ryt45'},
              {name:'Arial Salt',img:sp_load_of_barnacles,id:'asdas46'},
              {name:'Andrew Walers',img:sp_roach,id:'asdads56'},
              {name:'Damian Bolten',img:sp_smell,id:'gfhf67'}
            ],
        showTeam:false,
      }
      
    showTeamHandler = () =>{
      this.setState({
          showTeam: !this.state.showTeam
          });  
    };
    
    render(){
        return(
            <div>
                <Menu style={{display:'inline', position:'unset', zIndex: 'unset !important'}} isOpen={ true } noOverlay disableOverlayClick customBurgerIcon={ false } customCrossIcon={ false } >
                    <Link to="/" className='FontFamilies' >Sprintacular</Link>
                    <Link to="/sprints/" className ='fontFam' style={{paddingTop:"10px", paddingBottom:"10px"}}>Sprints</Link>
                    <Link to="/workitems/" className ='fontFam' style={{paddingTop:"10px", paddingBottom:"10px"}}>Workitem</Link>
                    <div className ='fontFam' style={{paddingTop:"10px", paddingBottom:"10px"}} onClick={this.showTeamHandler}>Team</div>
                        {this.state.showTeam?<Teams members={this.state.teamMember}/>:null}
                    <Link to="/setting/" className = 'fontFam' style={{paddingTop:"10px", paddingBottom:"10px"}}>Setting</Link>
                </Menu>
            </div>
            );
    }
}

export default sidebar;