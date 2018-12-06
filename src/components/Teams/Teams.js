import React from 'react';
import Team from './../Team/Team';

const teams = (props) =>props.members.map(team =>{
    return <Team
        name={team.name}
        img={team.img}
        key={team.id}
    />
});


export default teams;