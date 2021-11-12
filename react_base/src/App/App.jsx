import { useState} from 'react'
import {Card, Button, CardGroup, Container, Col, Row} from 'react-bootstrap';
import defaultContent from './components/content'; //all the information we had to create

import Admin from './components/admin'






function App() {
  
  //for the modal
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  
  //library starts out with the info from the jsx file we imported
  //'library' is a category all the elements of the array in content can fit in, but it could be anything. //'recipes', 'blogs', 'teams', you name it. 
 //'blogs' is probably a good choice. 

  const [content, setContent] = useState(defaultContent) 
 
const LibraryContent = () => {
  //console.log(library)
  return (
    <Container>
    <CardGroup >
    
    {content.map((info, i) => (
         <Card key={i} xs={6} className="bg-dark m-1 " style={{ width: '18rem', height: '15rem' }}>
        
         <Card.Body className="bg-light m-1">
           <Card.Title  >{info.title}</Card.Title>
           <Row xs={3}>
           <Col xs={4}>
           <Card.Img variant="top" src={info.authorImage} width="20" height="50" />
           </Col>
           <Col xs={6}>
           <Card.Text>
              {info.author}
           </Card.Text>
           </Col>
           </Row>
           <Row>
           <Card.Text style={{ width: '18rem'}} >
              {info.description}
           </Card.Text>
           </Row>

         
           
         </Card.Body>
       </Card>
    ))}

    </CardGroup>
    </Container>
  )
}
  return (
  <>
  <Button variant="secondary" onClick={handleShow}>Admin</Button>
  {/* sending a ton of stuff, simplify? */}
  <Admin updateContent={setContent} defaultContent={defaultContent} content={content} setShow={setShow} show={show}/>
    <LibraryContent />
  
    
  </>
  )
}

export default App;
