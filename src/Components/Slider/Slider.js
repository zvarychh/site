import React from 'react';
import {Carousel} from "react-bootstrap";

const Slider = () => {
    return (
        <Carousel className="font-f">
            <Carousel.Item>
                <img
                    className="d-block m-auto w-100 bg-fon "
                    src="./img/wp/wp1.jpg"
                    alt=""
                />
                <Carousel.Caption className="d-flex h-100 align-items-center justify-content-center ">
                    <h1>Унас ви зустрінете: </h1>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block m-auto w-100 bg-fon"
                    src="./img/wp/wp2.jpg"
                    alt=""
                />
                <Carousel.Caption className="d-flex h-100 align-items-center justify-content-center">
                    <h1>Лор Dota 2</h1>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block m-auto w-100 bg-fon"
                    src="./img/wp/wp3.jpg"
                    alt=""
                />
                <Carousel.Caption className="d-flex h-100 align-items-center justify-content-center">
                    <h1>Останні новини та Update</h1>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block m-auto w-100 bg-fon"
                    src="./img/wp/wp4.png"
                    alt=""
                />
                <Carousel.Caption className="d-flex h-100 align-items-center justify-content-center">
                    <h1>Інформацію про цікавих героїв</h1>
                </Carousel.Caption>
            </Carousel.Item>


        </Carousel>
    );
};

export default Slider;