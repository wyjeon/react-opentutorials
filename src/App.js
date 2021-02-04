import "./App.css";
import { Component } from "react";
import TOC from "./components/TOC";
import UpdateContent from "./components/UpdateContent";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import Subject from "./components/Subject";
import Control from "./components/Control";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    //state값 을 초기화
    this.state = {
      mode: "create",
      selected_content_id: 2,
      subject: { title: "WEB", sub: "World Wide Web" },
      welcome: { title: "Welcome", desc: "Hello React!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is..." },
        { id: 2, title: "CSS", desc: "CSS is..." },
        { id: 3, title: "JavaScript", desc: "JavaScript is..." }
      ]
    };
  }

  getreadContent() {
    var i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
        break;
      }
      i = i + 1;
    }
  }

  getContent() {
    var _title,
      _desc,
      _article = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} />;
    } else if (this.state.mode === "read") {
      var _content = this.getreadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc} />;
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            this.max_content_id = this.max_content_id + 1;
            // this.state.contents.push({
            //   id: this.max_content_id,
            //   title: _title,
            //   desc: _desc
            // });
            // this.setState({ contents: this.state.contents });

            // var _contents = this.state.contents.concat({
            //   id: this.max_content_id,
            //   title: _title,
            //   desc: _desc
            // });
            // this.setState({ contents: _contents });

            //배열일 경우 사용할 수 있다. Array.from()
            var newContents = Array.from(this.state.contents);
            newContents.push({
              id: this.max_content_id,
              title: _title,
              desc: _desc
            });
            this.setState({
              contents: newContents,
              mode: "read",
              selected_content_id: this.max_content_id
            });

            //객체일 경우 사용할 수 있다. Object.assign()
            //var a = {name:"egoing"}
            //Object.assign({}, a)
            //console.log(a, b, a===b) {name:"egoing"}, {name:"egoing"}, false
          }.bind(this)}
        />
      );
    } else if (this.state.mode === "update") {
      _content = this.getreadContent();
      _article = (
        <UpdateContent
          data={_content}
          onSubmit={function (_id, _title, _desc) {
            var _contents = Array.from(this.state.contents);
            var i = 0;
            while (i < _contents.length) {
              if (_contents[i].id === _id) {
                _contents[i] = { id: _id, title: _title, desc: _desc };
                break;
              }
              i = i + 1;
            }
            this.setState({ contents: _contents, mode: "read" });
          }.bind(this)}
        />
      );
    }
    return _article;
  }

  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({
              mode: "welcome"
            });
          }.bind(this)}
        />
        <TOC
          onChangePage={function (id) {
            this.setState({
              mode: "read",
              selected_content_id: Number(id)
            });
          }.bind(this)}
          data={this.state.contents}
        />
        <Control
          onChangeMode={function (_mode) {
            if (_mode === "delete") {
              if (window.confirm("really?")) {
                var _contents = Array.from(this.state.contents);
                var i = 0;
                while (i < _contents.length) {
                  if (_contents[i].id === this.state.selected_content_id) {
                    _contents.splice(i, 1);
                    break;
                  }
                  i = i + 1;
                }
                this.setState({
                  mode: "welcome",
                  contents: _contents
                });
                alert("deleted!");
              }
            } else {
              this.setState({
                mode: _mode
              });
            }
          }.bind(this)}
        ></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
