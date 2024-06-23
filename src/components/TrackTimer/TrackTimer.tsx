import { Text } from "@vkontakte/vkui";
import { Icon16MoreVertical } from "@vkontakte/icons";
import styles from "./TrackTimer.module.css";
import { useEffect, useLayoutEffect } from "react";
import { useSecondsCounter } from "../../hooks/useSecondsCounter.tsx";
import trackState from "../../store/trackState.ts";
import { observer } from "mobx-react-lite";

interface Props {
  audio?: HTMLAudioElement | null;
}

const TrackTimer = observer(({ audio }: Props) => {
  const [seconds, setSeconds] = useSecondsCounter(undefined, "default");

  useLayoutEffect(() => {
    if (audio) {
      audio.onloadedmetadata = () => {
        setSeconds(+audio?.duration.toFixed(0));
      };
    }
  }, [audio]);

  useEffect(() => {
    let intervalId: number;
    if (trackState.active) {
      intervalId = setInterval(() => {
        if (audio) {
          setSeconds(+audio.currentTime.toFixed(0));
        }
      }, 400);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [trackState.active, audio]);

  return (
    <div className={styles.trackTimerContainer}>
      <Text
        style={{
          fontSize: "13px",
          fontWeight: 400,
          lineHeight: "16px",
          letterSpacing: "0.2px",
          textAlign: "right",
        }}
      >
        {seconds}
      </Text>
      <div className={styles.iconPadding}>
        <Icon16MoreVertical fill="var(--main-bg-color)" />
      </div>
    </div>
  );
});

export default TrackTimer;
