import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import FormPage from "./Pages/FormPage";

import "./App.css";
import { ToastContainer } from "react-toastify";
import SwitchContextProvider from "./Contexts/SwitchContext";
import LangContextProvider from "./Contexts/LanguageContext";

function App() {
  return (
    <LangContextProvider>
      <SwitchContextProvider>
        <div className="App total-width">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/contact-me">
              <FormPage />
            </Route>
          </Switch>
          <ToastContainer />
        </div>
      </SwitchContextProvider>
    </LangContextProvider>
  );
}

export default App;
