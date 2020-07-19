import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {ConfigureStore} from './redux/configureStore'
import './App.css';
import Main from "./components/Main";

const store = ConfigureStore()

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Main/>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
