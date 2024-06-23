import { AppRoot, Panel, SplitCol, SplitLayout, View } from "@vkontakte/vkui";
import "./App.css";
import MusicComponent from "./components/MusicComponent.tsx";
import trackFile from "./assets/The Kiffness x Cala - I Go Meow (Singing Cat).wav";
function App() {
  return (
    <AppRoot>
      <SplitLayout>
        <SplitCol>
          <View activePanel="main">
            <Panel id="main">
              <MusicComponent track={trackFile} />
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
}

export default App;
