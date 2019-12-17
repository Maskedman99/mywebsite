import React from 'react';
import styled, { keyframes } from 'styled-components';
import { rubberBand, rotateInDownLeft } from 'react-animations';
import './RubberBandText.css'

const RubberBand = styled.div`animation: 2s ${keyframes`${rubberBand}`}`;
const Rotate = styled.div`animation: 0.5s ${keyframes`${rotateInDownLeft}`}`;

class RubberBandText extends React.Component {
    render(){
        const arr = this.props.text.split("");

        return(
        <div className="RubberBandDiv">
        {
            arr.map((item, key)=>(
                <Rotate><RubberBand className="RubberBand">
                {item}
                </RubberBand></Rotate>
            ))
        }
        </div>
        );
    }
}

export default RubberBandText;