
import './App.css';
import {Container, Row, Col, Nav, ListGroup, Table } from 'react-bootstrap'

const Menu = () => {
  return (
  <h1>Test</h1>
  )
}

const Content = () => {
  return (
  <h1>test</h1>
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
