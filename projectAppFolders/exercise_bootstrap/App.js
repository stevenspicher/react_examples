
import './App.css';
import {Container, Row, Col, Nav, ListGroup, Table } from 'react-bootstrap'

const Menu = () => {
  return (
  <H1>Test</H1>
  )
}

const Content = () => {
  return (
  <H1>test</H1>
)
}
const Main = () =>{ return (
  <div >
 <h1>test</h1>
 </div>
)
}

function App() {
  return (
      <Container className=" bg-info p-1">
        
          
            <Content/>
          <Main />
          <Menu />
      

      </Container>
  );
}

export default App;
