import React, { Component } from 'react'
import { 
  Row,
  Col,
 } from "reactstrap";
import BgWeb from '../assets/img/module-01.png';
import BgMultimedia from '../assets/img/module-02.png';
import BgMobile from '../assets/img/module-03.png';
import {
  Hero,
  Module
} from './../components';

export default class Home extends Component {
  state = {
    appList : [
      {
        name: 'Web Development',
        url: 'localhost:3333/api/web',
        apps: [
          '<li>Apache2</li>',
          '<li>PHP</li>',
          '<li>MySQL</li>',
          '<li>Composer</li>',
        ],
        background: BgWeb,
      },
      {
        name: 'UI Designer',
        url: 'localhost:3333/api/multimedia',
        apps: [
          '<li>Blender</li>',
          '<li>Inkscape</li>',
          '<li>Gimp</li>',
        ],
        background: BgMultimedia,
      },
      {
        name: 'Mobile Apps',
        url: 'localhost:3333/api/mobile',
        apps: [
          '<li>Android Studio</li>',
          '<li>SQLite Browser</li>'
        ],
        background: BgMobile,
      },
    ]
  }
  render() {
    return (
      <div className="d-flex flex-column align-content-stretch" style={{height: '100%'}}>
        <Row className="m-0">
          <Col xl="12" lg="12" md="12" sm="12" className="p-0">
            <Hero />
          </Col>
        </Row>
        <Row className="w-100 m-0 flex-fill">
          <Col xl="12" lg="12" md="12" sm="12" className="p-0">
            <Row className="h-100 m-0">
              {this.state.appList.map((datum, key) => {
                return <Module key={key} data={datum} />
              })}
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}
