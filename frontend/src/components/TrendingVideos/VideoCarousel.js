import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import playBtn from "../../images/playBtn.svg";
import videoThumbnail from "../../images/videoCardImg.png";
import carouselNextButton from '../../images/carousel_next_button.svg';
import React, { useMemo } from "react";
import styles from "./VideoCarousel.module.css";

function VideoCarousel() {
    const responsive = useMemo(() => ({
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 30
        }
    }), []);

    const nextButton = <img
        src={carouselNextButton}
        className={`${styles["next-button-img"]}`}
        alt="next button"
        width="50%">
    </img>;
    const prevButton =
        <img
            src={carouselNextButton}
            className={`${styles["prev-button-img"]}`}
            alt="prev button"
            width="50%">
        </img>;

    const videoCard = useMemo(() =>
        <img
            className={`${styles["video-card-img"]}`}
            src={videoThumbnail}
            alt="First slide"
        />
        , []);

    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
            <div className={styles["carousel-button-group"]}>
                <button className={currentSlide === 0 ? (styles["prev-button-disable"]) : styles["next-button"]} onClick={() => previous()} >{prevButton} </button>
                <button className={styles["next-button"]} onClick={() => next()} > {nextButton} </button>
            </div>
        );
    };

    return (
        <div className={`${styles["carousel"]}`}>
            <Carousel
                responsive={responsive}
                partialVisible={true}
                arrows={false}
                customButtonGroup={<ButtonGroup />}
                renderButtonGroupOutside={true}
                itemClass={`${styles["video-card-img"]}`}
                containerClass={`${styles["carousel-container"]}`}
                infinite={true}
            >
                <div>{videoCard}</div>
                <div>{videoCard}</div>
                <div>{videoCard}</div>
                <div>{videoCard}</div>
            </Carousel>
        </div>
    )
}

export default VideoCarousel;
