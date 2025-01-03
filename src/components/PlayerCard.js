import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function PlayerCard({player}) {

  return (
    <div className="card-container">
    <Card className="card" style={{ width: '18rem' }}>
      <Card.Img 
        variant="top" 
        src={player.img} 
        className="card-img"
      />
      <Card.Body>
        <Card.Title className="card-title">{player.name}</Card.Title>
        <Card.Text className="card-text">{player.age}</Card.Text>
        <Button variant="primary">Détail</Button>
      </Card.Body>
    </Card>

    
  </div>
  )
}

export default PlayerCard
