import React, { Component } from 'react';
import { Col } from 'reactstrap';

class Module extends Component {
    render() {
        return (
            <Col className="p-0 text-center h-100" style={{backgroundImage: `url(${this.props.data.background})`, cursor: 'pointer'}}/>
        )
    }
}

export default Module;