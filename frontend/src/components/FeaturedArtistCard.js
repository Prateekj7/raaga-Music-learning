import styles from "./FeaturedArtistCard.module.css";
import React, { useState } from "react";

function FeaturedArtistCard({
    showFooter,
    imgUrl,
    skeleton
}) {

    const defaultImg = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
    const [cardImg, setCardImg] = useState(imgUrl ?? defaultImg);
    const handleDefaultImage = () => {
        setCardImg(defaultImg);
    };

    return (
        <div className={`${styles["card"]}`}>
            <div className={`${styles["Stroke-28"]}`}>
                <div className={`${styles["card_img"]} ${skeleton ? styles["skeleton"] : ""}`}>
                    {skeleton ? null :
                        <img
                            onError={handleDefaultImage}
                            src={cardImg}
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