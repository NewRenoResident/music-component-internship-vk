import { Headline, Title } from "@vkontakte/vkui";
import { observer } from "mobx-react-lite";
interface ITrackInfoProps {
  trackTitle?: string;
  artistName?: string;
}

const TrackInfo = observer(
  ({ trackTitle = "Трек", artistName = "Исполнитель" }: ITrackInfoProps) => {
    return (
      <div>
        <Title level="3" className="track-title">
          {trackTitle}
        </Title>
        <Headline
          level="2"
          className="secondary-text-color"
          style={{
            fontSize: "13px",
            fontWeight: 400,
            lineHeight: "16px",
            letterSpacing: "0.2px",
            textAlign: "left",
          }}
        >
          {artistName}
        </Headline>
      </div>
    );
  },
);

export default TrackInfo;
