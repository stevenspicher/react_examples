import Alert from 'react-bootstrap/Alert';

import Card from 'react-bootstrap/Card';
import List from './List'

function App() {
  return (
    <div className="App">
      <p>auto updates!!!!

      </p>
      {greeting()}
      <List />
      {card()}
    </div>
  );
}

//greeting function
function greeting() {
  let name = "steven"
  return (
    <Alert variant='primary'>{name}</Alert>
    
  )
} 



function card () {
  let carArr = [
    {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDO8S_Ils4x4Hg6qSwSZIq9M4KO3PkpkB4Yw&usqp=CAU", make: "Honda", model: "CRV"},
    {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxnaEX7W-yAOPPQbP_78O9iPdDMjVJjj_pmw&usqp=CAU", make: "Volkswagen", model: "Beetle"},
    {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6N4lJufglyWVja-7UushMDIBESFSCPda2ag&usqp=CAU", make: "Ford", model: "Ranger"},
    {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQFf7lET-249sx_zeZLpam_AFIDf4mlna18g&usqp=CAU", make: "Nissan", model: "300ZX"},
    {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQFf7lET-249sx_zeZLpam_AFIDf4mlna18g&usqp=CAU", make: "Nissan", model: "300ZX"}
]
const createCards = (card, i) => {
  return (
    <div class="frame">
      <Card style={{ width: '18rem' }} key={i} >
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Title>{card.make}</Card.Title>
          <Card.Text>
            {card.model}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

return (
<div>
{carArr.map(createCards)} 
</div>
)
}




export default App;
