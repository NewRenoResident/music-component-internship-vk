import { useCallback, useState } from "react";
import { formatSeconds } from "../utils/formatSeconds.ts";

export function useSecondsCounter(
  initialValue?: number | string,
  formatType?: "default"
): [string, (seconds: number) => void] {
  if (!initialValue) {
    initialValue = "";
  } else if (formatType === "default") {
    initialValue = formatSeconds(+initialValue);
  }
  const [seconds, setSeconds] = useState("" + initialValue);

  const setFormattedSeconds = useCallback((seconds: number): void => {
    setSeconds(formatSeconds(seconds));
  }, []);

  return [seconds, setFormattedSeconds];
}
