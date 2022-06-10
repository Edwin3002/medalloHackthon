import React from 'react'
import { Carousel } from 'react-bootstrap'

export const CarouselC = () => {
    return (
        <Carousel className='car' fade>
            <Carousel.Item c>
                <img
                    className="d-block w-100 carImg"
                    src="https://res.cloudinary.com/edwin3002/image/upload/v1653447492/restaurant/a1_zjc0vn.jpg"
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carImg" 
                    src="https://res.cloudinary.com/edwin3002/image/upload/v1653447509/restaurant/a2_qe5sbi.jpg"
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carImg"
                    src="https://res.cloudinary.com/edwin3002/image/upload/v1653447499/restaurant/a3_zb92on.jpg"
                    alt="Third slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carImg"
                    src="https://res.cloudinary.com/edwin3002/image/upload/v1653447503/restaurant/a4_lh28yf.jpg"
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    )
}
