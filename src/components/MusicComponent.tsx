import { Cell } from "@vkontakte/vkui";
import { ReactElement, useEffect, useRef } from "react";
import TrackImage from "./TrackImage/TrackImage.tsx";
import TrackTimer from "./TrackTimer/TrackTimer.tsx";
import TrackInfo from "./TrackInfo/TrackInfo.tsx";
import MusicLayoutWrapper from "./MusicLayoutWrapper/MusicLayoutWrapper.tsx";
import styles from "./MusicComponent.module.css";
import trackState from "../store/trackState.ts";
import { observer } from "mobx-react-lite";

interface IMusicComponentProps {
  img?: ReactElement;
  artistName?: string;
  trackTitle?: string;
  track: string;
}

const MusicComponent = observer(
  ({ img: PropImage, track, artistName, trackTitle }: IMusicComponentProps) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    useEffect(() => {
      if (!audioRef.current) {
        audioRef.current = new Audio(track);
      } else {
        audioRef.current.src = track;
      }
      return () => {
        if (audioRef.current) {
          audioRef.current.pause();
        }
      };
    }, [track]);

    const changeTrackStatus = () => {
      if (audioRef.current && trackState.active) {
        audioRef.current.play();
      } else if (audioRef.current) {
        audioRef.current.pause();
      }
    };

    return (
      <MusicLayoutWrapper className={styles.container}>
        <Cell
          onClick={() => {
            trackState.invertActive();
            changeTrackStatus();
          }}
          activated={trackState.active}
          activeMode=""
          Component="label"
          before={<TrackImage img={PropImage} />}
          indicator={<TrackTimer audio={audioRef.current} />}
        >
          <TrackInfo artistName={artistName} trackTitle={trackTitle} />
        </Cell>
      </MusicLayoutWrapper>
    );
  }
);

export default MusicComponent;
