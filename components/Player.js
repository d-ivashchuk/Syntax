import React from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import formatTime from '../lib/formatTime';
import { theme, mixins, media } from '../styles';

const PlayerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: sticky;
  top: -1px;
  bottom: 0;
  width: 100%;
  background: ${theme.colors.black};
  border-top: 1px solid ${theme.colors.yellow};
  color: ${theme.colors.white};
  z-index: 2;

  button {
    ${mixins.flexCenter};
    justify-content: space-around;
    flex-direction: column;
    background: ${theme.colors.black};
    color: ${theme.colors.white};
    border: 0;
    padding: 1rem;
    border-right: 1px solid rgba(0, 0, 0, 0.6);
    outline-color: ${theme.colors.yellow};
  }
`;
const PlayerSection = styled.div`
  order: 2;
  background: ${theme.colors.black};
`;
const PlayerLeft = styled(PlayerSection)`
  width: 100px;
  min-width: 80px;
  ${media.phablet`
    flex: 1;
  `};
`;
const PlayButton = styled.button`
  width: 100%;
`;
const PlayerIcon = styled.div`
  font-size: 1.25rem;
  line-height: 0.5;
  margin: 1rem 0;
`;
const PlayerTime = styled.span`
  margin-bottom: 10px;
`;
const PlayerMiddle = styled(PlayerSection)`
  border-right: 1px solid rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  ${media.phablet`
    order: 1;
    width: 100%;
  `};
`;
const PlayerRight = styled(PlayerSection)`
  display: flex;
  ${media.phablet`
    flex: 2;
  `};
`;
const PlayerSpeed = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  flex: 0 1 auto;
  padding: 1rem;
  ${media.phablet`
    flex-grow: 1;
  `};
`;
const SpeedDisplay = styled.span`
  height: 1.5rem;
  line-height: 2;
`;
const Progress = styled.div`
  background: #0d0d0d;
  width: 100%;
  height: 1rem;
  cursor: crosshair;
  overflow: hidden;
`;
const ProgressTime = styled.div`
  min-width: 20px;
  height: 100%;
  transition: width 0.1s;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  background: ${theme.colors.green};
  background: ${theme.colors.grad};
`;
const PlayerTitle = styled.h3`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  max-width: 650px;
  width: 100%;
  margin: 0;
  padding-left: 1rem;
  font-size: 1rem;
  ${media.phablet`
    padding: 1rem;
  `};
`;
const PlayerInputs = styled.div`
  font-size: 0;
`;
const SRInput = styled.input`
  ${mixins.sr};
`;
const SRLabel = styled.span`
  ${mixins.sr};
`;
const PlayerVolume = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 120px;
  padding: 1rem;
  text-align: center;
  outline-color: ${theme.colors.yellow};
  font-weight: normal;
  letter-spacing: 0px;

  ${media.phablet`
    flex-grow: 0;
  `};

  &:focus-within {
    outline: -webkit-focus-ring-color auto 5px;
  }
  &:hover {
    label {
      border-top: 1px solid ${theme.colors.yellow};
    }
  }
  label {
    border-top: 1px solid ${theme.colors.green};
    &:hover {
      & ~ label {
        border-top: 1px solid ${theme.colors.black};
      }
    }
  }
  input {
    ~ label {
      background: ${theme.colors.green};
      border-right: 2px solid ${theme.colors.black};
      display: inline-block;
      width: 8px;
      height: 1.5rem;
    }
    &:checked {
      ~ label {
        background: ${theme.colors.grey};
      }
      + label {
        background: ${theme.colors.green};
      }
    }
  }
`;
class Player extends React.Component {
  constructor(props) {
    super(props);

    let lastPlayed = 0;

    // for SSR
    if (typeof window !== 'undefined') {
      const { show } = this.props;
      const lp = localStorage.getItem(`lastPlayed${show.number}`);
      if (lp) {
        lastPlayed = JSON.parse(lp).lastPlayed;
      }
    }

    this.state = {
      progressTime: 50,
      playing: false,
      duration: 0,
      currentTime: lastPlayed,
      playbackRate: 1,
      timeWasLoaded: lastPlayed !== 0,
    };
  }

  componentWillUpdate(nextProps, nextState) {
    this.audio.playbackRate = nextState.playbackRate;
  }

  componentDidUpdate(prevProps) {
    const { show } = this.props;
    const { currentTime } = this.state;

    if (show.number !== prevProps.show.number) {
      const lp = localStorage.getItem(`lastPlayed${show.number}`);

      if (lp) {
        const data = JSON.parse(lp);
        this.setState({ currentTime: data.lastPlayed });
        this.audio.currentTime = data.lastPlayed;
      }

      this.audio.play();
    } else {
      localStorage.setItem(
        `lastPlayed${show.number}`,
        JSON.stringify({ lastPlayed: currentTime })
      );
    }
  }

  timeUpdate = e => {
    console.log('Updating Time');
    const { timeWasLoaded } = this.state;
    const { show } = this.props;

    // Check if the user already had a curent time
    if (timeWasLoaded) {
      const lp = localStorage.getItem(`lastPlayed${show.number}`);
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
    const { playing } = this.state;
    const method = playing ? 'pause' : 'play';
    this.audio[method]();
  };

  scrub = e => {
    const scrubTime =
      (e.nativeEvent.offsetX / this.progress.offsetWidth) * this.audio.duration;
    this.audio.currentTime = scrubTime;
  };

  playPause = () => {
    const { getPlayerState } = this.props;
    getPlayerState(!this.audio.paused);
    this.setState({ playing: !this.audio.paused });
  };

  volume = e => {
    this.audio.volume = e.currentTarget.value;
  };

  speed = () => {
    const { playbackRate } = this.state;
    let pbRate = playbackRate + 0.25;
    if (pbRate > 2.5) {
      pbRate = 0.75;
    }
    this.setState({ playbackRate: pbRate });
  };

  render() {
    const { show } = this.props;
    const {
      playing,
      progressTime,
      currentTime,
      duration,
      playbackRate,
    } = this.state;

    return (
      <PlayerContainer>
        <PlayerLeft>
          <PlayButton
            onClick={this.togglePlay}
            aria-label={playing ? 'pause' : 'play'}
            type="button"
          >
            <PlayerIcon>{playing ? <FaPause /> : <FaPlay />}</PlayerIcon>
            <PlayerTime>
              {formatTime(currentTime)} / {formatTime(duration)}
            </PlayerTime>
          </PlayButton>
        </PlayerLeft>

        <PlayerMiddle>
          <Progress
            onClick={this.scrub}
            innerRef={x => {
              this.progress = x;
            }}
          >
            <ProgressTime style={{ width: `${progressTime}%` }} />
          </Progress>
          <PlayerTitle>
            Playing: {show.displayNumber}: {show.title}
          </PlayerTitle>
        </PlayerMiddle>

        <PlayerRight>
          <PlayerSpeed onClick={this.speed} type="button">
            <span>FASTNESS</span>
            <SpeedDisplay>{playbackRate} &times;</SpeedDisplay>
          </PlayerSpeed>

          <PlayerVolume>
            <span>LOUDNESS</span>
            <PlayerInputs>
              <SRInput
                onChange={this.volume}
                type="radio"
                name="volume"
                value="0.1"
                id="vol10"
              />
              <label htmlFor="vol10">
                <SRLabel>Volume Level 10/100</SRLabel>
              </label>
              <SRInput
                onChange={this.volume}
                type="radio"
                name="volume"
                value="0.2"
                id="vol20"
              />
              <label htmlFor="vol20">
                <SRLabel>Volume Level 20/100</SRLabel>
              </label>
              <SRInput
                onChange={this.volume}
                type="radio"
                name="volume"
                value="0.3"
                id="vol30"
              />
              <label htmlFor="vol30">
                <SRLabel>Volume Level 30/100</SRLabel>
              </label>
              <SRInput
                onChange={this.volume}
                type="radio"
                name="volume"
                value="0.4"
                id="vol40"
              />
              <label htmlFor="vol40">
                <SRLabel>Volume Level 40/100</SRLabel>
              </label>
              <SRInput
                onChange={this.volume}
                type="radio"
                name="volume"
                value="0.5"
                id="vol50"
              />
              <label htmlFor="vol50">
                <SRLabel>Volume Level 50/100</SRLabel>
              </label>
              <SRInput
                onChange={this.volume}
                type="radio"
                name="volume"
                value="0.6"
                id="vol60"
              />
              <label htmlFor="vol60">
                <SRLabel>Volume Level 60/100</SRLabel>
              </label>
              <SRInput
                onChange={this.volume}
                type="radio"
                name="volume"
                value="0.7"
                id="vol70"
              />
              <label htmlFor="vol70">
                <SRLabel>Volume Level 70/100</SRLabel>
              </label>
              <SRInput
                onChange={this.volume}
                type="radio"
                name="volume"
                value="0.8"
                id="vol80"
              />
              <label htmlFor="vol80">
                <SRLabel>Volume Level 80/100</SRLabel>
              </label>
              <SRInput
                onChange={this.volume}
                defaultChecked
                type="radio"
                name="volume"
                value="0.9"
                id="vol90"
              />
              <label htmlFor="vol90">
                <SRLabel>Volume Level 90/100</SRLabel>
              </label>
              <SRInput
                onChange={this.volume}
                type="radio"
                name="volume"
                value="1"
                id="vol100"
              />
              <label htmlFor="vol100">
                <SRLabel>Volume Level 100/100</SRLabel>
              </label>
            </PlayerInputs>
          </PlayerVolume>
        </PlayerRight>

        <audio
          ref={audio => {
            this.audio = audio;
          }}
          onPlay={this.playPause}
          onPause={this.playPause}
          onTimeUpdate={this.timeUpdate}
          onLoadedMetadata={this.timeUpdate}
          src={show.url}
        />
      </PlayerContainer>
    );
  }
}

Player.propTypes = {
  show: PropTypes.object.isRequired,
  getPlayerState: PropTypes.func.isRequired,
};

export default Player;
