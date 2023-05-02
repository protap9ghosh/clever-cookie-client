import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 hero-image"
                        src="https://recipepress.inspirythemes.com/second/wp-content/uploads/sites/2/2017/01/slider-demo1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className='mb-5'>
                        <h3 className='title mb-3'>Curly Cheese & Vegetable Sandwich</h3>
                        <p> Our passion for delicious cuisine and culinary exploration is at the heart of everything we do.
                            From mouthwatering recipes to in-depth articles on the latest food trends, our website is your go-to source for all things food.</p>
                        <Button className='btn-hero fw-semibold fs-5' variant="info">Order Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 hero-image"
                        src="https://recipepress.inspirythemes.com/second/wp-content/uploads/sites/2/2017/01/slider2-demo1.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption className='mb-5'>
                        <h3 className='title mb-3'>Hard Chocolate Mix Coffee</h3>
                        <p> Our passion for delicious cuisine and culinary exploration is at the heart of everything we do.
                            From mouthwatering recipes to in-depth articles on the latest food trends, our website is your go-to source for all things food.</p>
                        <Button className='btn-hero fw-semibold fs-5' variant="info">Order Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 hero-image"
                        src="https://recipepress.inspirythemes.com/second/wp-content/uploads/sites/2/2017/01/slider3-demo1.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption className='mb-5'>
                        <h3 className='title mb-3'>Special Italian Herbs & Cheese Stake</h3>
                        <p> Our passion for delicious cuisine and culinary exploration is at the heart of everything we do.
                            From mouthwatering recipes to in-depth articles on the latest food trends, our website is your go-to source for all things food.</p>
                        <Button className='btn-hero fw-semibold fs-5' variant="info">Order Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HeroSection;