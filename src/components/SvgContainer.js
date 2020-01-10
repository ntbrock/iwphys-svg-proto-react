import React from 'react';
//import { Container, Row, Col } from 'reactstrap';
//import update from 'immutability-helper';
// import diff from 'deep-diff';
import ReactDOM from 'react-dom';

import './SvgContainer.css';

/**
 * 2019Dec13 First React Component
 */

export default class SvgContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfClicks: 0,
            moveX: null,
            moveY: null
        };

        // console.log("IwpDesignerContainer:24> Incoming Animation: " , props.animation );
        // This binding is necessary to make `this` work in the callback
        this.onMouseClick = this.onMouseClick.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
    }

    onMouseClick(event) {
        console.log("SvgContainer.onMouseClick:25> Click Event: " , event);
        this.setState( { numberOfClicks: this.state.numberOfClicks + 1 })
    }

    onMouseMove(event) {
        /*
        const x = event.clientX;
        const y = event.clientY;
        */

        // Secret : Native events!
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetX;
        const shifted = event.shiftKey;

        // const target = event.currentTarget; // event.target;
        this.setState( { moveX: x, moveY: y } );

    }



    render() {

        return (
            <div>
                <h3>Number Of Clicks: {this.state.numberOfClicks}</h3>
                <h3>Move X: {this.state.moveX}   Y: {this.state.moveY}</h3>

                <svg className="iwp-svg" onClick={this.onMouseClick} onMouseMove={this.onMouseMove}
                     style={{"width":"500px", "height":"500px"}} >

                    <rect className="bluerect" x="200" y="200" style={{"width":"40px",
                        "height":"30px",
                        "fill":"rgb(0,0,255)",
                        "strokeWidth":3,
                        "stroke":"rgb(0,0,0)"}} />

                </svg>

            </div>
        );
    }
}