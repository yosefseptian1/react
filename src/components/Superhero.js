import React from 'react'
import {Container,Row,Col,Card,Image} from 'react-bootstrap';
import antman from "../assets/images/superhero/antman.jpg";
import avenger from "../assets/images/superhero/avenger.jpg";
import batman from "../assets/images/superhero/batman.jpg";
import robinhood from "../assets/images/superhero/robinhood.jpg";
import spiderman from "../assets/images/superhero/spiderman-cover.jpg";
import superman from "../assets/images/superhero/superman.jpg";

const Superhero = () => {
  return (
    <Container>
    <br/>
    <br/>
    <h1 className="trendingtitle mb-3">SUPERHERO MOVIES</h1>
    <Row>
      <Col md={4} className="movieWrapper">
        <Card className="bg-dark text-white movieImage" id="Superhero">
          <Image
            src={antman}
            alt="Dune Movie"
            className="Images"
          />
          <div className="p-4 m-2">
            <Card.Title className="text-center">Card title</Card.Title>
            <Card.Text className="text-left">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
        </Card>
      </Col>

      <Col md={4} className="movieWrapper">
        <Card className="bg-dark text-white movieImage">
          <Image
            src={avenger}
            alt="Dune Movie"
            className="Images"
          />
          <div className="p-4 m-2">
            <Card.Title className="text-center">Card title</Card.Title>
            <Card.Text className="text-left">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
        </Card>
      </Col>

      <Col md={4} className="movieWrapper">
        <Card className="bg-dark text-white movieImage">
          <Image
            src={batman}
            alt="Dune Movie"
            className="Images"
          />
          <div className="p-4 m-2">
            <Card.Title className="text-center">Card title</Card.Title>
            <Card.Text className="text-left">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
        </Card>
      </Col>
      <Col md={4} className="movieWrapper">
        <Card className="bg-dark text-white movieImage">
          <Image
            src={robinhood}
            alt="Dune Movie"
            className="Images"
          />
          <div className="p-4 m-2">
            <Card.Title className="text-center">Card title</Card.Title>
            <Card.Text className="text-left">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
        </Card>
      </Col>
      <Col md={4} className="movieWrapper">
        <Card className="bg-dark text-white movieImage">
          <Image
            src={spiderman}
            alt="everything Movie"
            className="Images"
          />
          <div className="p-4 m-2">
            <Card.Title className="text-center">Card title</Card.Title>
            <Card.Text className="text-left">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
        </Card>
      </Col>
      <Col md={4} className="movieWrapper">
        <Card className="bg-dark text-white movieImage">
          <Image
            src={superman}
            alt="Dune Movie"
            className="Images"
          />
          <div className="p-4 m-2">
            <Card.Title className="text-center">Card title</Card.Title>
            <Card.Text className="text-left">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
        </Card>
      </Col>
    </Row>
  </Container>
  )
}

export default Superhero