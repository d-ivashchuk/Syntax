import styled from "styled-components";

const StyledSubscribe = styled.div`
  width: 100%;
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: stretch;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 800px) {
      justify-content: space-between;
    }
    li {
      flex: 0 1 auto;
      margin-bottom: 1rem;
      @media (max-width: 570px) {
        flex: 1 1 auto;
        margin-right: 1rem;
        margin-bottom: 1rem;
      }

      a {
        background: yellow;
        display: block;
        color: rgba(0, 0, 0, 0.8);
        text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.2);
        box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.05);
        font-size: 1.5rem;
        padding: 0.7rem 1rem;
        text-align: center;
        border-radius: 3px;
        font-family: sans-serif;
        font-weight: 100;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        &:hover {
          box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.4);
        }
        &:before {
          display: inline-block;
          width: 20px;
          height: 20px;
          content: "";
          margin-right: 0.7rem;
          background-size: cover;
          border-radius: 5px;
          box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
        }
      }
    }
  }
`;
const Itunes = styled.li`
  a {
    background: linear-gradient(
      to bottom,
      rgb(205, 102, 246) 0%,
      rgb(154, 61, 209) 80%,
      rgb(142, 52, 201) 100%
    ) !important;
    &:before {
      background-image: url("/static/icons/itunes.jpg");
    }
  }
`;
const Overcast = styled.li`
  a {
    background: linear-gradient(
      to bottom,
      rgb(255, 138, 10) 0%,
      rgb(255, 105, 48) 100%
    ) !important;
    &:before {
      background-image: url("/static/icons/overcast.jpg");
    }
  }
`;
const GooglePodcast = styled.li`
  a {
    background: linear-gradient(
      to bottom,
      rgb(245, 121, 23) 0%,
      rgb(254, 185, 90) 100%
    ) !important;
    &:before {
      background-image: url("/static/icons/google_podcasts.svg");
    }
  }
`;
const Stitcher = styled.li`
  a {
    background: linear-gradient(
      to bottom,
      rgb(204, 213, 87) 0%,
      rgb(200, 208, 91) 94%
    ) !important;
    &:before {
      background-image: url("/static/icons/stitcher.jpg");
    }
  }
`;
const PocketCasts = styled.li`
  a {
    background: linear-gradient(
      to bottom,
      rgb(242, 43, 36) 0%,
      rgb(215, 12, 11) 100%
    ) !important;
    &:before {
      background-image: url("/static/icons/pocketcasts.jpg");
    }
  }
`;
const GooglePlay = styled.li`
  a {
    background: linear-gradient(
      to bottom,
      rgb(37, 187, 195) 0%,
      rgb(56, 215, 223) 100%
    ) !important;
    &:before {
      background-image: url("/static/icons/googleplay.png");
      background-color: white;
    }
  }
`;
const Spotify = styled.li`
  a {
    background: linear-gradient(
      to bottom,
      rgb(4, 160, 59) 0%,
      rgb(16, 172, 71) 100%
    ) !important;
    &:before {
      background-image: url("/static/icons/spotify.svg");
    }
  }
`;
const RSS = styled.li`
  a {
    background: linear-gradient(
      to bottom,
      rgb(247, 163, 54) 0%,
      rgb(235, 109, 30) 96%,
      rgb(235, 108, 30) 100%
    ) !important;
    &:before {
      background-image: url("/static/icons/rss.svg");
    }
  }
`;

const Subscribe = props => (
  <StyledSubscribe>
    <ul>
      <Itunes>
        <a
          target="_blank"
          href="https://itunes.apple.com/ca/podcast/syntax-tasty-web-development-treats/id1253186678?mt=2"
        >
          iTunes
        </a>
      </Itunes>
      <Overcast>
        <a
          target="_blank"
          href="https://overcast.fm/itunes1253186678/syntax-tasty-web-development-treats"
        >
          Overcast
        </a>
      </Overcast>
      <GooglePodcast>
        <a
          target="_blank"
          href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9mZWVkLnN5bnRheC5mbS9yc3M%3D"
        >
          Google Podcast
        </a>
      </GooglePodcast>
      <Stitcher>
        <a
          target="_blank"
          href="http://www.stitcher.com/s?fid=142440&refid=stpr"
        >
          Stitcher
        </a>
      </Stitcher>
      <PocketCasts>
        <a target="_blank" href="http://pca.st/fmx9">
          PocketCasts
        </a>
      </PocketCasts>
      <GooglePlay>
        <a
          target="_blank"
          href="https://playmusic.app.goo.gl/?ibi=com.google.PlayMusic&isi=691797987&ius=googleplaymusic&link=https://play.google.com/music/m/Ityd325x5s5ivr3fc74hvvgeztu?t%3DSyntax_-_Tasty_Web_Development_Treats%26pcampaignid%3DMKT-na-all-co-pr-mu-pod-16"
        >
          Google Play
        </a>
      </GooglePlay>
      <Spotify>
        <a
          target="_blank"
          href="https://open.spotify.com/show/4kYCRYJ3yK5DQbP5tbfZby?si=bOe7-kl6RnOHapMsVnFWgw"
        >
          Spotify
        </a>
      </Spotify>
      <RSS>
        <a target="_blank" href="http://feed.syntax.fm/rss">
          RSS
        </a>
      </RSS>
    </ul>
  </StyledSubscribe>
);

export default Subscribe;
