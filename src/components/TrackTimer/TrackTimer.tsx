import { Text } from "@vkontakte/vkui";
import { Icon16MoreVertical } from "@vkontakte/icons";
import styles from "./TrackTimer.module.css";
import { observer } from "mobx-react-lite";
import trackState from "../../store/trackState.ts";
import { formatSeconds } from "../../utils/formatSeconds.ts";
import { useTrackTimer } from "../../hooks/useTrackTimer.ts";

interface Props {
  duration?: number;
  audio?: HTMLAudioElement | null;
}

const TrackTimer = observer(({ audio, duration }: Props) => {
  useTrackTimer({ audio });

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
        {trackState.formattedSeconds || formatSeconds(duration || 0)}
      </Text>
      <div className={styles.iconPadding}>
        <Icon16MoreVertical fill="var(--main-bg-color)" />
      </div>
    </div>
  );
});

export default TrackTimer;
