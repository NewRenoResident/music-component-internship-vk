import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AdaptivityProvider, ConfigProvider } from "@vkontakte/vkui";
import "./index.css";
import "@vkontakte/vkui/dist/vkui.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider appearance="light">
      <AdaptivityProvider>
        <App />
      </AdaptivityProvider>
    </ConfigProvider>
  </React.StrictMode>,
);
