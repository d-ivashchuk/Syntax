import React from "react";
import Show from "./Show";
import styled from "styled-components";
import formatTime from "../lib/formatTime";
import { FaPlay, FaPause } from "react-icons/fa";

const StyledPlayer = styled.div`
  bottom: 0;
  width: 100%;
  background: #1d1d1d;
  border-top: 1px solid #f1c15d;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  position: sticky;
  top: -1px;
  z-index: 2;
  button {
    background: #000;
    border: 0;
    color: #fff;
    padding: 1rem;
    border-right: 1px solid rgba(0, 0, 0, 0.6);
    outline-color: #ff0;
  }
`;
const LeftSection = styled.div`
  width: 100px;
  min-width: 80px;
  @media (max-width: 650px) {
    flex: 1;
  }
  &>*width: 100%;
`;
const MiddleSection = styled.div`
  flex: 1 1 auto;
  border-right: 1px solid rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 1.5rem;
    margin: 0;
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    padding-left: 2rem;
    max-width: 650px;
    @media (max-width: 650px) {
      padding: 1rem;
    }
  }
  @media (max-width: 650px) {
    order: 1;
    width: 100%;
  }
`;
const RightSection = styled.div`
  display: flex;
  button {
    background: black;
    border: 0;
    color: white;
    padding: 1rem;
    border-right: 1px solid rgba(0, 0, 0, 0.6);
    outline-color: yellow;
  }
  span {
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 650px) {
    flex: 2;
  }
  &>*width: 100%;
`;
const PlayerIcon = styled.p`
  font-size: 2rem;
  line-height: 0.5;
`;

const Progress = styled.div`
  background: lighten(#000, 5%);
  height: 2rem;
  cursor: crosshair;
  overflow: hidden;
`;
const ProgressTime = styled.div`
  background: green;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  min-width: 20px;
  height: 100%;
  transition: width 0.1s;
  background: linear-gradient(30deg, #d2ff52 0%, #03fff3 100%);
`;

const SrOnly = styled.input`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
  span {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  }
`;
const Volume = styled.div`
  width: 120px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  flex-wrap: wrap;
  flex: 1 0 auto;
  label:hover ~ label {
    border-top: 1px solid #000;
  }
  input ~ label {
    background: #03fff3;
    border-right: 2px solid #1d1d1d;
    display: inline-block;
    width: 8px;
    height: 2.5rem;
  }
  input:checked ~ label {
    background: #808080;
  }
  &:focus-within {
    outline: -webkit-focus-ring-color auto 5px;
  }
  &:hover {
    label {
      border-top: 1px solid yellow;
    }
  }
`;
export default class Player extends React.Component {
  constructor(props) {
    super(props);

    let lastPlayed = 0;

    // for SSR
    if (typeof window !== "undefined") {
      const lp = localStorage.getItem(`lastPlayed${this.props.show.number}`);
      if (lp) lastPlayed = JSON.parse(lp).lastPlayed;
    }

    this.state = {
      progressTime: 50,
      playing: false,
      duration: 0,
      currentTime: lastPlayed,
      playbackRate: 1,
      timeWasLoaded: lastPlayed !== 0
    };
  }

  componentWillUpdate(nextProps, nextState) {
    this.audio.playbackRate = nextState.playbackRate;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.show.number !== prevProps.show.number) {
      const lp = localStorage.getItem(`lastPlayed${this.props.show.number}`);
      if (lp) {
        const data = JSON.parse(lp);
        this.setState({
          currentTime: data.lastPlayed
        });
        this.audio.currentTime = data.lastPlayed;
      }
      this.audio.play();
    } else {
      localStorage.setItem(
        `lastPlayed${this.props.show.number}`,
        JSON.stringify({ lastPlayed: this.state.currentTime })
      );
    }
  }

  timeUpdate = e => {
    console.log("Updating Time");
    // Check if the user already had a curent time
    if (this.state.timeWasLoaded) {
      const lp = localStorage.getItem(`lastPlayed${this.props.show.number}`);
      if (lp) {
        e.currentTarget.currentTime = JSON.parse(lp).lastPlayed;
      }
      this.setState({ timeWasLoaded: false });
    } else {
      const { currentTime = 0, duration = 0 } = e.currentTarget;

      const progressTime = (currentTime / duration) * 100;
      if (Number.isNaN(progressTime)) return;
      this.setState({ progressTime, currentTime, duration });
    }
  };

  togglePlay = () => {
    const method = this.state.playing ? "pause" : "play";
    this.audio[method]();
  };

  scrub = e => {
    const scrubTime =
      (e.nativeEvent.offsetX / this.progress.offsetWidth) * this.audio.duration;
    this.audio.currentTime = scrubTime;
  };

  playPause = () => {
    this.setState({ playing: !this.audio.paused });
    const method = this.audio.paused ? "add" : "remove";
    document.querySelector(".bars").classList[method]("bars--paused"); // 💩
  };

  volume = e => {
    this.audio.volume = e.currentTarget.value;
  };

  speed = () => {
    let playbackRate = this.state.playbackRate + 0.25;
    if (playbackRate > 2.5) {
      playbackRate = 0.75;
    }
    this.setState({ playbackRate });
  };

  render() {
    const { show } = this.props;
    const { playing, progressTime, currentTime, duration } = this.state;

    return (
      <StyledPlayer>
        <LeftSection>
          <button
            onClick={this.togglePlay}
            aria-label={playing ? "pause" : "play"}
          >
            <PlayerIcon>{playing ? <FaPause /> : <FaPlay />}</PlayerIcon>
            <p>
              {formatTime(currentTime)} / {formatTime(duration)}
            </p>
          </button>
        </LeftSection>

        <MiddleSection>
          <Progress onClick={this.scrub} ref={x => (this.progress = x)}>
            <ProgressTime style={{ width: `${progressTime}%` }} />
          </Progress>
          <h3>
            Playing: {show.displayNumber}: {show.title}
          </h3>
        </MiddleSection>

        <RightSection>
          <button onClick={this.speed}>
            <p>FASTNESS</p>
            <span>{this.state.playbackRate} &times; </span>
          </button>

          <Volume>
            <p>LOUDNESS</p>
            <div style={{ fontSize: 0 }}>
              <SrOnly
                onChange={this.volume}
                type="radio"
                name="volume"
                value="0.1"
                id="vol10"
              />
              <label htmlFor="vol10">
                <span>Volume Level 10/100</span>
              </label>
              <SrOnly
                onChange={this.volume}
                type="radio"
                name="volume"
                value="0.2"
                id="vol20"
              />
              <label htmlFor="vol20">
                <span>Volume Level 20/100</span>
              </label>
              <SrOnly
                onChange={this.volume}
                type="radio"
                name="volume"
                value="0.3"
                id="vol30"
              />
              <label htmlFor="vol30">
                <span>Volume Level 30/100</span>
              </label>
              <SrOnly
                onChange={this.volume}
                type="radio"
                name="volume"
                value="0.4"
                id="vol40"
              />
              <label htmlFor="vol40">
                <span>Volume Level 40/100</span>
              </label>
              <SrOnly
                onChange={this.volume}
                type="radio"
                name="volume"
                value="0.5"
                id="vol50"
              />
              <label htmlFor="vol50">
                <span>Volume Level 50/100</span>
              </label>
              <SrOnly
                onChange={this.volume}
                type="radio"
                name="volume"
                value="0.6"
                id="vol60"
              />
              <label htmlFor="vol60">
                <span>Volume Level 60/100</span>
              </label>
              <SrOnly
                onChange={this.volume}
                type="radio"
                name="volume"
                value="0.7"
                id="vol70"
              />
              <label htmlFor="vol70">
                <span>Volume Level 70/100</span>
              </label>
              <SrOnly
                onChange={this.volume}
                type="radio"
                name="volume"
                value="0.8"
                id="vol80"
              />
              <label htmlFor="vol80">
                <span>Volume Level 80/100</span>
              </label>
              <SrOnly
                onChange={this.volume}
                defaultChecked
                type="radio"
                name="volume"
                value="0.9"
                id="vol90"
              />
              <label htmlFor="vol90">
                <span>Volume Level 90/100</span>
              </label>
              <SrOnly
                onChange={this.volume}
                type="radio"
                name="volume"
                value="1"
                id="vol100"
              />
              <label htmlFor="vol100">
                <span>Volume Level 100/100</span>
              </label>
            </div>
          </Volume>
        </RightSection>

        <audio
          ref={audio => (this.audio = audio)}
          onPlay={this.playPause}
          onPause={this.playPause}
          onTimeUpdate={this.timeUpdate}
          onLoadedMetadata={this.timeUpdate}
          src={show.url}
        />
      </StyledPlayer>
    );
  }
}
