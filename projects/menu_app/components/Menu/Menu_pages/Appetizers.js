import { Button } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
const Appetizers = ({ menu, handleChange }) => {

    return (
        
        menu.map(item => (
            <Container key={item}>
        <Row>
            <Col xs={6}>
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
    </Container>
     )
     )
     
)

}
export default Appetizers