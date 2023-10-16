import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

const cardData = [
    {
        id: 1,
        title: 'Card 1',
        imageSrc: "ganesh1.png",
        description: 'Description for Card 1',
    },
    {
        id: 2,
        title: 'Card 2',
        imageSrc: "ganesh-7.jpg",
        description: 'Description for Card 2',
        
    },
    {
        id: 3,
        title: 'Card 3',
        imageSrc:" ganesh-4.jpg",
        description: 'Description for Card 3',
    },
];

function Bootstrap() {
    return (
        <div>
            <div>
                <header>
                    <nav class="navbar navbar-dark bg-dark">
                        <a class="navbar-brand">Navbar</a>
                        <form class="form-inline">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </nav>
                </header>
            </div><br></br>
            <body>
                <section>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="ganesh1.png" // Add the path to your image here
                                alt="ViNAYAKA"
                            />
                            <Carousel.Caption>
                                <h3>First Slide</h3>
                                <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="ganesh-4.jpg" // Add the path to your image here
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Second Slide</h3>
                                <p>This is the second slide's caption.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="ganesh-5.jpg" // Add the path to your image here
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Third Slide</h3>
                                <p>This is the third slide's caption.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </section><br></br>
                <section>
                    <div className="card-container"> m
                        <div className="row">
                            {cardData.map((card) => (
                                <div key={card.id} className="col-md-4">
                                    <Card style={{ width: '100%' }}>
                                        <Card.Img variant="top" src={card.imageSrc} alt={card.title} width={"500px"} height={"450px"} />
                                        <Card.Body>
                                            <Card.Title>{card.title}</Card.Title>
                                            <Card.Text>{card.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </body>
        </div>
    )
}
export default Bootstrap


