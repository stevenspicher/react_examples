import {ListGroup, Badge, Card} from 'react-bootstrap/';

const Order = (ticket) => {
 console.log(ticket.order)
    return (   
        <Card style={{ width: '18rem' }}>
        {ticket.order.map(choice => (    
        <ListGroup as="ol" >
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{choice.item}</div>
            
          </div>
          <Badge variant="primary" pill>
            {choice.price}
          </Badge>
        </ListGroup.Item>
      
        </ListGroup>
        )
        )}
        </Card>
    )
}

export default Order