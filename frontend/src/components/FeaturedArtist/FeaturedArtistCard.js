import styles from "./FeaturedArtistCard.module.css";
import React from "react";

function FeaturedArtistCard({ showFooter }) {

    return (
        <div className={`${styles["card"]}`}>
            <div className={`${styles["Stroke-28"]}`}>
                <div className={`${styles["card_img"]}`}>
                    <img src="https://www.pngitem.com/pimgs/m/135-1356850_blossom-powerpuff-girls-png-transparent-background-powerpuff-girls.png"
                        alt="user-image" />
                </div>
            </div>
            {showFooter ? <div className={`${styles["card_info"]}`}>
                <p>Blossoms </p>
            </div> : null}

        </div>
    );
}

export default FeaturedArtistCard;