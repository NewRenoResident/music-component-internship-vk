import { useEffect } from "react";
import trackState from "../store/trackState";

interface UseTrackTimerProps {
  audio?: HTMLAudioElement | null;
}

export const useTrackTimer = ({ audio }: UseTrackTimerProps) => {
  useEffect(() => {
    let intervalId: number;
    if (trackState.active) {
      intervalId = setInterval(() => {
        if (audio) {
          trackState.setSeconds(+audio.currentTime.toFixed(0));
          console.log(trackState.secondsLeft);
        }
      }, 400);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [trackState.active, audio]);
};
