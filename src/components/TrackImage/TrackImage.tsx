import { ReactElement } from "react";
import imgMusic from "../../assets/img.png";
import { Image } from "@vkontakte/vkui";
import styles from "./TrackImage.module.css";
import { Icon20GraphOutline } from "@vkontakte/icons";
import trackState from "../../store/trackState.ts";

interface ITrackImageProps {
  img?: ReactElement;
}

function TrackImage({ img: PropImage }: ITrackImageProps) {
  return (
    <div
      className={`${styles.trackImageContainer} ${trackState.active ? styles.active : ""}`}
    >
      {PropImage ? (
        PropImage
      ) : (
        <Image
          src={imgMusic}
          style={{ width: "40px", height: "40px" }}
          alt="track image"
        />
      )}
      {trackState.active && (
        <div
          className={styles.overlay}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon20GraphOutline fill="white" />
        </div>
      )}
    </div>
  );
}

export default TrackImage;
