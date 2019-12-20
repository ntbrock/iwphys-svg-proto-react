import React from 'react';
//import { Container, Row, Col } from 'reactstrap';
//import update from 'immutability-helper';
// import diff from 'deep-diff';

import './SvgContainer.css';

/**
 * 2019Dec13 First React Component
 */

export default class SvgContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfClicks: 0
        };

        // console.log("IwpDesignerContainer:24> Incoming Animation: " , props.animation );
        // This binding is necessary to make `this` work in the callback
        this.onMouseClick = this.onMouseClick.bind(this);

    }

    onMouseClick(event) {
        console.log("SvgContainer.onMouseClick:25> Click Event: " , event);
        this.setState( { numberOfClicks: this.state.numberOfClicks + 1 })
    }

    render() {

        return (
            <div>
                <h1>SvgContainer Number Of Clicks: {this.state.numberOfClicks}</h1>

                <svg class="iwp-svg" onClick={this.onMouseClick}
                     style={{"width":"400px", "height":"400px"}} >

                    <rect x="200" y="200" style={{"width":"40px",
                        "height":"30px",
                        "fill":"rgb(0,0,255);",
                        "stroke-width":3,
                        "stroke":"rgb(0,0,0);"}} />


                </svg>

            </div>
        );
    }
}