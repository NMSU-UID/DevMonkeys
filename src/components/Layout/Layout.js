import React from 'react';
import Sidebar from './../../container/Sidebar/Sidebar';

const layout = ( props ) => {
    return(
        <React.Fragment>
            <Sidebar/>
            <main className=''>
                {props.children}
            </main>
        </React.Fragment>
        );
}

export default layout;