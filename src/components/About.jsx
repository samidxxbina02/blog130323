import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function About() {
  return (
    <div className="d-flex flex-direction-row flex-wrap">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1663663573"
        />
        <Card.Body>
          <Card.Title>Cyberpank</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://upload.wikimedia.org/wikipedia/ru/a/a2/The_Witcher_3-_Wild_Hunt_Cover.jpg"
        />
        <Card.Body>
          <Card.Title>The_Witcher_3</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://genshin.keitaro.ru/media/posts/7/2021-11-07_002643.jpg"
        />
        <Card.Body>
          <Card.Title>Genshin Impact</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://store-images.s-microsoft.com/image/apps.51903.71972716530068101.ccdcadf1-1d2a-49f2-9c37-0b0a27e5a53c.08e06d2d-1104-4c80-b879-91facf8348d5"
        />
        <Card.Body>
          <Card.Title>Assasin`s creed</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://play-lh.googleusercontent.com/VSwHQjcAttxsLE47RuS4PqpC4LT7lCoSjE7Hx5AW_yCxtDvcnsHHvm5CTuL5BPN-uRTP"
        />
        <Card.Body>
          <Card.Title>Minecraft</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;
