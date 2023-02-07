import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "components/App";
import { store } from "./redux/store";
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor } from './redux/store';
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <App />
      </PersistGate>
  </Provider>
);