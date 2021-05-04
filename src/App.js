import React, { Component } from "react";
import Screen from "./components/screenComponent";
import TextComponent from "./components/textComponent";
class App extends Component {
  render() {
    return (
      <div className="mx-12 md:mx-12 lg:mx-44 my-12">
        <TextComponent />
        <Screen />
      </div>
    );
  }
}

export default App;
