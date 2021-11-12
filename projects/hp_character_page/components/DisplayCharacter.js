import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import hp from './assets/hp.png'
import Button from 'react-bootstrap/Button'

const DisplayChar = ({ props , loadChar}) => {
    return (
        <Container fluid>
            <Row >
                <Col md={{ span: 3, offset: 3 }}>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img className="cardimage" variant="top" src={props.image? props.image : hp} />
                        <Card.Body>
                            <Card.Title>{props.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{props.actor}</Card.Subtitle>
                            <Card.Text>
                                {Object.keys(props)[4]} {props.house ? props.house : "none"}
                            </Card.Text>
                            <Button onClick={loadChar} variant="primary">Load</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs  ><h1 className="banner" >{props.name}</h1></Col> 
            </Row>
        </Container>
    )
}

export default DisplayChar