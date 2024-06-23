import { Cell } from "@vkontakte/vkui";
import { useEffect } from "react";
import TrackImage from "./TrackImage/TrackImage.tsx";
import TrackTimer from "./TrackTimer/TrackTimer.tsx";
import TrackInfo from "./TrackInfo/TrackInfo.tsx";
import MusicLayoutWrapper from "./MusicLayoutWrapper/MusicLayoutWrapper.tsx";
import styles from "./MusicComponent.module.css";
import trackState from "../store/trackState.ts";
import { observer } from "mobx-react-lite";

/**
 * Interface for MusicComponent props
 * @typedef {Object} IMusicComponentProps
 * @property {number} [duration] - The duration of the track in seconds
 * @property {ReactElement} [img] - The image element for the track
 * @property {string} [artistName] - The name of the artist
 * @property {string} [trackTitle] - The title of the track
 * @property {string} track - The URL of the track.You should pass the same URLs to all component entities
 * @property {string} [className] - Additional class name for styling
 */
interface IMusicComponentProps {
  duration?: number;
  img?: string;
  artistName?: string;
  trackTitle?: string;
  track: string;
  className?: string;
}

/**
 * MusicComponent - A component to display music track information and controls.
 * @param {IMusicComponentProps} props - The properties for the MusicComponent.
 * @returns {ReactElement} The MusicComponent element.
 */
const MusicComponent = observer(
  ({
    img,
    track,
    artistName,
    trackTitle,
    duration,
    className,
  }: IMusicComponentProps) => {
    useEffect(() => {
      trackState.setTrack(track);
      return () => {
        trackState.resetTrack();
      };
    }, [track]);

    return (
      <MusicLayoutWrapper className={className || styles.container}>
        <Cell
          onClick={() => {
            trackState.invertActive();
          }}
          activated={trackState.active}
          activeMode=""
          Component="label"
          before={<TrackImage img={img} />}
          indicator={
            <TrackTimer audio={trackState.audio} duration={duration} />
          }
        >
          <TrackInfo artistName={artistName} trackTitle={trackTitle} />
        </Cell>
      </MusicLayoutWrapper>
    );
  }
);

export default MusicComponent;
