import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import carouselNextButton from '../../images/carousel_next_button.svg';
import React, { useMemo } from "react";
import styles from "./TestimonialCarousel.module.css";
import TestimonialCard from "./TestimonialCard";

function TestimonialCarousel() {

    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 }
    };

    const nextButton = <img
        src={carouselNextButton}
        className={`${styles["next-button-img"]}`}
        alt="next button"
        width="84%">
    </img>;
    const prevButton =
        <img
            src={carouselNextButton}
            className={`${styles["prev-button-img"]}`}
            alt="prev button"
            width="84%">
        </img>;

    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
            <div className={styles["carousel-button-group"]}>
                <button className={currentSlide === 0 ? (styles["prev-button-disable"]) : styles["prev-button"]} onClick={() => previous()} >{prevButton} </button>
                <button className={styles["next-button"]} onClick={() => next()} > {nextButton} </button>
            </div>
        );
    };

    const CustomDot = ({ onMove, index, onClick, active }) => {
        // onMove means if dragging or swiping in progress.
        // active is provided by this lib for checking if the item is active or not.
        return (
            <li
                className={active ? styles["dot--active"] : styles["dot--inactive"]}
                onClick={() => onClick()}
            >
                <span className={`${styles["dot"]}`}></span>
            </li>
        );
    };

    return (
        // <!-- Main Carousel Section Start -->
        <div id="main-slide" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <Carousel
                    responsive={responsive}
                    arrows={false}
                    customButtonGroup={<ButtonGroup />}
                    renderButtonGroupOutside={true}
                    infinite
                    renderDotsOutside={true}
                    showDots
                    customDot={<CustomDot />}
                    containerClass={`${styles["carousel-container"]}`}
                >
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                </Carousel>
            </div>
        </div>
        /* <!-- Main Carousel Section End --> */
    );
}

export default TestimonialCarousel;
