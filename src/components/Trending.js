import React from "react";
import { Card, Container, Row ,Col,Image} from "react-bootstrap";
import duneImage from "../assets/images/trending/dune.jpg";
import infinite from "../assets/images/trending/infinite.jpg";
import lightyear from "../assets/images/trending/lightyear.jpg";
import joker from "../assets/images/trending/joker.jpg";
import morbius from "../assets/images/trending/morbius.jpg";
import everything from "../assets/images/trending/everything.jpg";

const Trending = () => {
  return (
    <Container>
      <br/>
      <br/>
      <h1 className="trendingtitle">TRENDING MOVIES</h1>
      <Row>
        <Col md={4} className="movieWrapper">
          <Card className="bg-dark text-white movieImage" id="trend">
            <Image
              src={duneImage}
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
              src={infinite}
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
              src={joker}
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
              src={morbius}
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
              src={everything}
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
              src={lightyear}
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
  );
};

export default Trending;
