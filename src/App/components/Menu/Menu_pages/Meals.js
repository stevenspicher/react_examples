import { Button, Container, Row, Col } from 'react-bootstrap'

const Meals = ( {menu, handleChange}) => {
    
    return (
        
        menu.map(item => (
            <Container  key={item}>
        <Row>
            <Col className="menu" xs={6}>
            <Button onClick={() => handleChange(item[0], item[1].price)}>{item[0]}</Button> 
            </Col>
            <Col>
                {item[1].price}
            </Col>
            <Col>
                {item[2]}
            </Col>
            <Col>
           
            </Col>
        </Row>
        <Row></Row>
    </Container>
     )
     )
     
)

}

export default Meals