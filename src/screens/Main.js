import React, { Component } from 'react';
import MainLogo from '../components/MainLogo'
import RubberBandText from '../components/RubberBandText'


class Main extends Component {
    render() {
        return(
            <div className="App-main">
                <MainLogo />
                <div className="App-main-text">
                    <RubberBandText text="Hi, I'm Rohit. I create websites "/>
                    <RubberBandText text="and mobile apps for fun  :)  "/>
                </div>
          </div>
        )
    }
}

export default Main;