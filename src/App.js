import "./App.css";
import { Component } from "react";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";

class App extends Component {
  constructor(props) {
    super(props);
    //state값 을 초기화
    this.state = {
      subject: { title: "WEB", sub: "World Wide Web" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is..." },
        { id: 2, title: "CSS", desc: "CSS is..." },
        { id: 3, title: "JavaScript", desc: "JavaScript is..." }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        />
        <TOC data={this.state.contents} />
        <Content title="HTML" desc="HTML is..." />
      </div>
    );
  }
}

export default App;
