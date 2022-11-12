import styles from "./FeaturedArtistCard.module.css";
import React from "react";

function FeaturedArtistCard({
    showFooter,
    imgUrl = "https://www.pngitem.com/pimgs/m/135-1356850_blossom-powerpuff-girls-png-transparent-background-powerpuff-girls.png",
    skeleton
}) {

    return (
        <div className={`${styles["card"]}`}>
            <div className={`${styles["Stroke-28"]}`}>
                <div className={`${styles["card_img"]} ${skeleton ? styles["skeleton"] : ""}`}>
                    {skeleton ? null :
                        <img src={imgUrl}
                            alt="user-image" />
                    }
                </div>
            </div>
            {showFooter ? <div className={`${styles["card_info"]}`}>
                <p>Blossoms </p>
            </div> : null}

        </div>
    );
}

export default FeaturedArtistCard;