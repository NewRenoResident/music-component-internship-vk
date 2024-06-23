import { useEffect, useRef } from "react";

const useAudio = (track: string) => {
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

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return { audioRef, play, pause };
};

export default useAudio;
