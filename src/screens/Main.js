import React, { Component } from 'react';
import MainLogo from '../components/MainLogo';

import './Main.css';

class Main extends Component {
    render() {
        return(
            <div className="App-main">
                <MainLogo />
                <div className="App-main-text">
                    Hi, I'm Rohit. I create websites and mobile apps for fun 
                </div>
          </div>
        )
    }
}

export default Main;