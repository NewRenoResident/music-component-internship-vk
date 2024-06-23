import { makeAutoObservable } from "mobx";
import { formatSeconds } from "../utils/formatSeconds";

class TrackState {
  active: boolean = false;
  currentTrack: string = "";
  audio: HTMLAudioElement | null = null;
  secondsLeft: number = 0;
  formattedSeconds: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  invertActive() {
    this.active = !this.active;
    if (this.active) {
      this.audio?.play();
    } else {
      this.audio?.pause();
    }
  }

  setSeconds(seconds: number) {
    this.secondsLeft = seconds;
    this.formattedSeconds = formatSeconds(seconds);
  }

  setTrack(audio: string) {
    this.currentTrack = audio;
    if (this.audio) {
      this.audio.src = audio;
    } else {
      this.audio = new Audio(audio);
    }
  }

  resetTrack() {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.active = false;
    }
  }
}

export default new TrackState();
