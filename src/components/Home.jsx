import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <Carousel className="bg-dark">
      <Carousel.Item>
        <img
          className="d-block w-50 m-auto "
          src="https://mir-s3-cdn-cf.behance.net/projects/404/897d1c162633027.Y3JvcCwyNDgxLDE5NDAsMCw3ODY.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 m-auto "
          src="https://avatars.dzeninfra.ru/get-zen_doc/2404796/pub_5ecce8e98ab85d61ea0a2922_5ecce93d2c0fea2ffe95de40/scale_1200"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 m-auto"
          src="https://staticg.sportskeeda.com/editor/2022/07/e8620-16578236091910-1920.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
