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
      mode: "welcome",
      subject: { title: "WEB", sub: "World Wide Web" },
      welcome: { title: "Welcome", desc: "Hello React!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is..." },
        { id: 2, title: "CSS", desc: "CSS is..." },
        { id: 3, title: "JavaScript", desc: "JavaScript is..." }
      ]
    };
  }
  render() {
    var _title,
      _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    return (
      <div className="App">
        {/* <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        /> */}
        <header>
          <h1>
            <a
              href="/"
              onClick={function (event) {
                console.log(event);
                event.preventDefault();
              }}
            >
              {this.state.subject.title}
            </a>
          </h1>
          {this.state.subject.sub}
        </header>

        <TOC data={this.state.contents} />
        <Content title={_title} desc={_desc} />
      </div>
    );
  }
}

export default App;
