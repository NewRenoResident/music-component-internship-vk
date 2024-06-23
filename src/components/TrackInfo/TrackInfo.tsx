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
        <Title level="3">{trackTitle}</Title>
        <Headline
          level="2"
          style={{
            letterSpacing: 0.39,
            fontSize: "13px",
            fontWeight: 400,
            lineHeight: "16px",
          }}
          className="secondary-text-color"
        >
          {artistName}
        </Headline>
      </div>
    );
  }
);

export default TrackInfo;
