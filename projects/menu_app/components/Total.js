import { Card } from 'react-bootstrap'
import React from 'react';

const Total = (order) => {
    
let sum = 0;

for (let i = 0; i < order.order.length; i++) {
    sum += order.order[i].price;
    
}
console.log(sum)
    return (       
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Order Total</Card.Title>
          <Card.Text>
           ${sum}
          </Card.Text>
          <Card body>Thank you for your patronage!</Card>
        </Card.Body>
      </Card>
    )
}

export default Total