import React from 'react'
import { useState } from 'react';
import * as RB from 'react-bootstrap';
import {Link} from 'react-router-dom'

function Examples() {
    return (
    //    <Container fluid > Container fills the window. 
    // fluid='xl' sets a breakpoint - it will stop being fluid if bigger than xl
    // Available breakpoints - (sm, md, lg, xl, xxl) settings apply from breakpoint size down
     
    //   <RB.Container fluid >
    //    <RB.Container fluid="lg" >
    
    <RB.Container >

        <RB.Stack> 
            <Link to="/">HomePage</Link>
            <Link to="/examples">Examples</Link>
        </RB.Stack>
     
    <h1>Bootstrap React Grip Layout</h1>
    {/* The grid is divided into 12 vertical sections 
  If no widths are specified, Columns are divided equally within the Container.  */}


    <RB.Row className="border">
      <h2>auto sized RB.Columns</h2>
      <RB.Col className="border">1</RB.Col> 
      <RB.Col className="border">2</RB.Col> 
      <RB.Col className="border">3</RB.Col> 
      <RB.Col className="border">4</RB.Col> 
      <RB.Col className="border">5</RB.Col> 
      <RB.Col className="border">6</RB.Col> 
      <RB.Col className="border">7</RB.Col> 
      <RB.Col className="border">8</RB.Col> 
      <RB.Col className="border">9</RB.Col> 
      <RB.Col className="border">10</RB.Col>
      <RB.Col className="border">11</RB.Col>
      <RB.Col className="border">12</RB.Col>
    </RB.Row>
    <RB.Row  >
      <RB.Col className="border">1</RB.Col>
      <RB.Col className="border">2</RB.Col>
      <RB.Col className="border">3</RB.Col>
    </RB.Row>
    <RB.Row  >
      <RB.Col className="border">1</RB.Col>
      <RB.Col className="border">2</RB.Col>
      <RB.Col className="border">3</RB.Col>
      <RB.Col className="border">4</RB.Col>
      <RB.Col className="border">5</RB.Col>
    </RB.Row>


    {/* you can set the number of Column to span on specified devices: (xs, sm, md, lg, xl, xxl)  
          <RB.Col  lg={6} className="border">set to lg={6}</RB.Col>
          <RB.Col xxl={1} xl={2} lg={3} md={4} sm={5} xs={6} className="border">3</RB.Col>
      you can set an offset to place gaps within the Row (number = amount of "cells" out of 12 to skip)
          <RB.Col md={{span: 2, offset: 2 }}className="border">2</RB.Col>
          */}

    <h3>Setting one Column width</h3>
    <RB.Row>
      <RB.Col className="border">1</RB.Col>
      <RB.Col className="border">2</RB.Col>
      <RB.Col className="border">3</RB.Col>
    </RB.Row>

    {/* Row lets you specify RB.Column widths across 5 breakpoint sizes (xs, sm, md, lg, xl, xxl)
        <RB.Row xs={2} md={4} lg={6}> */}

    <h3>Setting Column width using Row</h3>
    <RB.Row xs={6}>
      <RB.Col className="border">1</RB.Col>
      <RB.Col className="border">2</RB.Col>
      <RB.Col className="border">3</RB.Col>
    </RB.Row>

    {/* Adding vertical items using Stack */}

    <h3>Adding items using Stack</h3>
    <RB.Stack gap={3}>
      <div className="border">First item</div>
      <div className="border">Second item</div>
      <div className="border">Third item</div>
    </RB.Stack>

    <RB.Stack direction="horizontal" gap={3}>
      <div className="border">First item</div>
      <div className="border">Second item</div>
      <div className="border">Third item</div>
    </RB.Stack>

    {/* Used together, these tools allow you to quickly generate a format for about any page you can think of, and it's automatically resizable */}

    
    <h1>Bootstrap Components</h1>
    {[
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
    ].map((variant, idx) => (
      <RB.Alert key={idx} variant={variant}>
        This is a {variant} alert—check it out!
      </RB.Alert>
    ))
    }

    <RB.Accordion defaultActiveKey="0">
      <RB.Accordion.Item eventKey="0">
        <RB.Accordion.Header>RB.Accordion Item #1</RB.Accordion.Header>
        <RB.Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </RB.Accordion.Body>
      </RB.Accordion.Item>
      <RB.Accordion.Item eventKey="1">
        <RB.Accordion.Header>Accordion Item #2</RB.Accordion.Header>
        <RB.Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </RB.Accordion.Body>
      </RB.Accordion.Item>
    </RB.Accordion>

    <Example />


    <RB.Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
      <RB.Tab eventKey="home" title="Home">
      <h1>tab 1</h1>
      </RB.Tab>
      <RB.Tab eventKey="profile" title="Profile">
      <h1>tab 2</h1>
      </RB.Tab>
      <RB.Tab eventKey="contact" title="Contact" disabled>
        <h1>tab 3</h1>
      </RB.Tab>
    </RB.Tabs>

   


  </RB.Container>





);
}


function Example() {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
  <>
    <RB.Button variant="primary" onClick={handleShow}>
      Launch demo modal
    </RB.Button>

    <RB.Modal show={show} onHide={handleClose}>
      <RB.Modal.Header closeButton>
        <RB.Modal.Title>RB.Modal heading</RB.Modal.Title>
      </RB.Modal.Header>
      <RB.Modal.Body>Woohoo, you're reading this text in a RB.Modal!</RB.Modal.Body>
      <RB.Modal.Footer>
        <RB.Button variant="secondary" onClick={handleClose}>
          Close
        </RB.Button>
        <RB.Button variant="primary" onClick={handleClose}>
          Save Changes
        </RB.Button>
      </RB.Modal.Footer>
    </RB.Modal>
  </>
);
}
    



export default Examples

