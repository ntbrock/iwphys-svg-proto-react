import React from 'react';
//import { Container, Row, Col } from 'reactstrap';
//import update from 'immutability-helper';
// import diff from 'deep-diff';

/**
 * 2019Dec13 First React Component
 */

export default class SvgContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };

        // console.log("IwpDesignerContainer:24> Incoming Animation: " , props.animation );
        // This binding is necessary to make `this` work in the callback
        this.onMouseClick = this.onMouseClick.bind(this);

    }

    onMouseClick(event) {
        console.log("SvgContainer.onMouseClick:25> Click Event: " , event);
        this.setState( {  })
    }

    render() {

        return (
            <div>
                <h1>SvgContainer</h1>
            </div>
        );
    }
}