import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Card1() {
    const [open, setOpen] = useState(false);
  return (
    <div style={{ padding: '20px' }} className="cards">
      <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://mielboumiza.com/media/catalog/product/cache/2047a477da1a42ed82c0fcbaeffa530b/m/i/miel-d_aloe-vera-400g_1.png" />
      <Card.Body>
        <Card.Title>Miel D'Aloe Vera</Card.Title>
        <Card.Text>
          a partir de 34,000DT
       

        </Card.Text>
        
      </Card.Body>
      <Card.Body>
        
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Description
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        * Soutient l'élimination des toxines du foie<br/>
        * Les propriétés antibactériennes du miel à l'aloe vera <br/>
        *  Nourrit profondément les cheveux,<br/>
        * Renforce et revitalise l'ensemble du corps, procurant vitalité et énergie.<br/>
        * Agit comme un édulcorant naturel pour les enfants.

        <Card.Link href="#">400g</Card.Link>
        <Card.Link href="#">1kg</Card.Link>
  </div>
        
      </Collapse>
      </Card.Body>
     
    </Card>

    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://mielboumiza.com/media/catalog/product/cache/2047a477da1a42ed82c0fcbaeffa530b/u/n/untitled-2_0001_0f1a9118.jpg" />
      <Card.Body>
        <Card.Title>Miel aux amandes</Card.Title>
        <Card.Text>
          a partir de 42,000DT
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">400g</Card.Link>
        <Card.Link href="#">1kg</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://mielboumiza.com/media/catalog/product/cache/2047a477da1a42ed82c0fcbaeffa530b/m/i/miel-d_aloe-vera-400g_1.png" />
      <Card.Body>
        <Card.Title>Miel D'eucalyptus</Card.Title>
        <Card.Text>
          a partir de 34,000DT
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">400g</Card.Link>
        <Card.Link href="#">1kg</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://mielboumiza.com/media/catalog/product/cache/2047a477da1a42ed82c0fcbaeffa530b/m/i/miel-aux-fruits-secs-900g.png" />
      <Card.Body>
        <Card.Title>Miel aux Fruits Secs</Card.Title>
        <Card.Text>
          a partir de 35,000DT
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">250g</Card.Link>
        <Card.Link href="#">450g</Card.Link>
        <Card.Link href="#">900g</Card.Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://mielboumiza.com/media/catalog/product/cache/2047a477da1a42ed82c0fcbaeffa530b/m/i/miel-de-foret-400g_1.png" />
      <Card.Body>
        <Card.Title>Miel de  Foret</Card.Title>
        <Card.Text>
          a partir de 43,000DT
       
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">400g</Card.Link>
        <Card.Link href="#">1kg</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://mielboumiza.com/media/catalog/product/cache/2047a477da1a42ed82c0fcbaeffa530b/m/i/miel-de-montagne-400g_1.png" />
      <Card.Body>
        <Card.Title>Miel De Montagne</Card.Title>
        <Card.Text>
          a partir de 38,000DT
       

        </Card.Text>
        
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">400g</Card.Link>
        <Card.Link href="#">1kg</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://mielboumiza.com/media/catalog/product/cache/2047a477da1a42ed82c0fcbaeffa530b/m/i/miel-de-thym-400g_1.png" />
      <Card.Body>
        <Card.Title>Miel de Thym</Card.Title>
        <Card.Text>
          a partir de 38,000DT
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">400g</Card.Link>
        <Card.Link href="#">1kg</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://mielboumiza.com/media/catalog/product/cache/2047a477da1a42ed82c0fcbaeffa530b/m/i/miel-pour-enfant-f_2.png" />
      <Card.Body>
        <Card.Title>Miel pour Enfant</Card.Title>
        <Card.Text>
          a partir de 27,000DT
        </Card.Text>
      </Card.Body>
      <Card.Body>
        
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Description
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
       
        <Card.Link href="#">900g</Card.Link>
  </div>
        
      </Collapse>
      </Card.Body>
    </Card>




    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://mielboumiza.com/media/catalog/product/cache/2047a477da1a42ed82c0fcbaeffa530b/u/n/untitled-5_0004_0f1a9199.png" />
      <Card.Body>
        <Card.Title>Mélange Prise de Poids</Card.Title>
        <Card.Text>
          a partir de 39,000DT
        </Card.Text>
      </Card.Body>
      <Card.Body>
        
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Description
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
       * La nigelle .<br/>
       * Le pollen d’abeille<br/>
       * Les fruits secs<br/>
       * L’avoine <br/>
       * Les graines de lin <br/>
       * le miel de jujubier <br/>
        <Card.Link href="#">900g</Card.Link>
  </div>
        
      </Collapse>
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://mielboumiza.com/media/catalog/product/cache/2047a477da1a42ed82c0fcbaeffa530b/u/n/untitled-2_0005_0f1a9205.jpg" />
      <Card.Body>
        <Card.Title>Miélange Énergétique</Card.Title>
        <Card.Text>
          a partir de 39,000DT
       

        </Card.Text>
        
      </Card.Body>
      <Card.Body>
        
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Description
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
       * Le chocolat noir <br/>
       * Les fruits déshydratés <br/>
       * Le pollen <br/>
       * Le miel de jujubier <br/>
        <Card.Link href="#">450g</Card.Link>
        <Card.Link href="#">900g</Card.Link>
  </div>
        
      </Collapse>
      </Card.Body>
    </Card>

    <img   className="img1" src="https://mielboumiza.com/media/wysiwyg/notre-histoir.png" />
    <div className="videos">
    <iframe  src="https://www.youtube.com/embed/E5VeDekCo4o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <iframe  src="https://www.youtube.com/embed/MVoCkz3OchE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <iframe  src="https://www.youtube.com/embed/RODBuHPBhpY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <iframe  src="https://www.youtube.com/embed/JdyW2EnpToE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  
  <button className="you"> <a href="https://www.youtube.com/@mielboumiza1488" >
  Visitez notre chaîne YouTube
</a></button>
    </div>
  )
}

export default Card1
