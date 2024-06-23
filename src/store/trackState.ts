import { makeAutoObservable } from "mobx";

class TrackState {
  active: boolean = false;
  constructor() {
    makeAutoObservable(this);
  }

  invertActive() {
    this.active = !this.active;
  }
}

export default new TrackState();
