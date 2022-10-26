import Carousel from 'react-bootstrap/Carousel';
import carouselImg1 from '../images/carousel1.png'
import carouselImg2 from '../images/carousel1.png'
import carouselImg3 from '../images/carousel1.png'
import carouselNextButton from '../images/carousel_next_button.svg';
import React, { useMemo } from "react";
import styles from "./Carousel.module.css";

function UncontrolledExample() {
    const carouselImageList = useMemo(() => [carouselImg1, carouselImg2, carouselImg3], [carouselImg1, carouselImg2, carouselImg3]);
    const nextButton = <img src={carouselNextButton} alt="next button" width="28%"></img>
    const prevButton = <img src={carouselNextButton} className={`${styles["prev-button"]}`} alt="prev button" width="28%"></img>
    return (
        <Carousel indicators={false} prevIcon={prevButton} nextIcon={nextButton}>
            {carouselImageList.map((image, index) =>
                <Carousel.Item key={index} >
                    <img
                        className="d-block w-100"
                        src={image}
                        alt="First slide"
                    />
                    <Carousel.Caption className={`${styles["carousel-caption"]}`}>
                        <div className={`${styles["carousel-text"]}`}>
                            <h4 className={`${styles["carousel-heading-1"]}`}>MUSIC NEVER ENDS</h4>
                            <h4 className={`${styles["carousel-heading-2"]}`}>SING YOUR HEART OUT</h4>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            )}

        </Carousel>
    );
}

export default UncontrolledExample;