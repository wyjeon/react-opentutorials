import "./App.css";
import { Component } from "react";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web" />
        <TOC />
        <Content title="HTML" desc="HTML is..." />
      </div>
    );
  }
}

export default App;
