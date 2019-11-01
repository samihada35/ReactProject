import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Navbar from "./components/Navbar/Navbar.js";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs.js";
import News from "./components/News/News.js";
import Music from "./components/Music/Music.js";
import Settings from "./components/Settings/Settings.js";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />

        <Navbar />

        <div className="app-wrapper-cotent">
          <Route
            path="/my/src/components/Profile/Profile.js"
            component={Profile}
          />

          <Route /*exact*/
            path="/my/src/components/Dialogs/Dialogs.js"
            component={Dialogs}
          />

          <Route path="/my/src/components/News/News.js" component={News} />

          <Route path="/my/src/components/Music/Music.js" component={Music} />

          <Route
            path="/my/src/components/Settings/Settings.js"
            component={Settings}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
