import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import App from './App';
//import * as serviceWorker from './serviceWorker';

//var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
//ReactDOM.render(element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.register();
//"https://images.unsplash.com/photo-1527672809634-04ed36500acd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53b755838d4ed8384da15a186d619690&auto=format&fit=crop&w=2734&q=80"
class App extends Component {
    render() {
        return (
            <body className="App" style={{
                position: 'absolute', 
                top:'0', 
                bottom:'0', 
                left:'0', 
                right:'0',
                width: '100% !important', 
                height: '100% !important',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'noRepeat',
                WebkitTransition: 'all', // note the capital 'W' here
                msTransition: 'all',
                backgroundImage: "url(" + "https://images.unsplash.com/photo-1475965894430-b05c9d13568a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a642a3711c10d64eb161e1ef9bc4fd1e&auto=format&fit=crop&w=975&q=80" + ")"}}>
                <div className="box-shadow">
                    <h1 className="font-families">H E L L O  W O R L D</h1>
                </div>
            </body>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));