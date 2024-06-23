import { AppRoot, Panel, SplitCol, SplitLayout, View } from "@vkontakte/vkui";
import "./App.css";
import MusicComponent from "./components/MusicComponent.tsx";
import trackFile from "./assets/The Kiffness x Cala - I Go Meow (Singing Cat).wav";
import catImage from "./assets/The Kiffness - Topic - I Go Meow [7E9TfDy_Fts - 514x514 - 1m20s].png";
function App() {
  return (
    <AppRoot>
      <SplitLayout>
        <SplitCol>
          <View activePanel="main">
            <Panel id="main">
              <MusicComponent
                track={trackFile}
                duration={163}
                artistName="Кот"
                trackTitle="I go meow"
              />

              <MusicComponent
                img={catImage}
                className=".fit"
                track={trackFile}
                duration={203}
              />
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
}

export default App;
