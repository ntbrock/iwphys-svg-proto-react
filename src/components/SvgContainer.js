import React from 'react';
//import { Container, Row, Col } from 'reactstrap';
// import diff from 'deep-diff';
import update from 'immutability-helper';


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
            moveY: null,
            blueRect: { x: 100, y: 100, w: 25, h: 25, color: "rgb(0,0,255)", hovered: false }
        };

        // console.log("IwpDesignerContainer:24> Incoming Animation: " , props.animation );
        // This binding is necessary to make `this` work in the callback
        this.onMouseClick = this.onMouseClick.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onWheel = this.onWheel.bind(this);
    }

    onMouseClick(event) {
        console.log("SvgContainer.onMouseClick:25> Click Event: " , event);
        this.setState( { numberOfClicks: this.state.numberOfClicks + 1 })

        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;

        this.setState( update(
            this.state,
            {
                numberOfClicks: { $set: this.state.numberOfClicks + 1 },
                blueRect: {
                    x: {$set: x}, y: {$set: y}
                }
            }));

    }

    onMouseMove(event) {
        /*
        const x = event.clientX;
        const y = event.clientY;
        */

        // Secret : Native events!
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
        // const shifted = event.shiftKey;

        // Do we have a collision with the blueRect?
        if ( x >= this.state.blueRect.x && x <= this.state.blueRect.x + this.state.blueRect.w &&
            y >= this.state.blueRect.y && y <= this.state.blueRect.y + this.state.blueRect.h ) {
            this.setState( update(this.state, {blueRect: {hovered: {$set: true}}}));
        } else {
            this.setState( update(this.state, {blueRect: {hovered: {$set: false}}}));
        }

        // const target = event.currentTarget; // event.target;
        this.setState( { moveX: x, moveY: y } );

    }


    onWheel(event) {

        console.log("SvgContainer:76> onWheel: ", event);
    }

    render() {

        let blueRectFill = this.state.blueRect.color;
        if ( this.state.blueRect.hovered ) {
            blueRectFill = "rgb(255,100,100)"
        }


        return (
            <div>
                <h3>Number Of Clicks: {this.state.numberOfClicks}</h3>
                <h3>Move X: {this.state.moveX}   Y: {this.state.moveY}</h3>

                <svg className="iwp-svg" onClick={this.onMouseClick} onMouseMove={this.onMouseMove}
                     style={{"width":"500px", "height":"500px"}} >

                    <rect className="bluerect"
                          x={this.state.blueRect.x}
                          y={this.state.blueRect.y}
                          style={{
                              "width":this.state.blueRect.w,
                              "height":this.state.blueRect.h,
                              "fill":blueRectFill,
                              "strokeWidth":3,
                              "stroke":"rgb(0,0,0)"
                          }} />

                </svg>

            </div>
        );
    }
}