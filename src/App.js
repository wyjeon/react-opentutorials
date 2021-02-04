import "./App.css";
import { Component } from "react";

//Class Name은 대문자
class Subject extends Component {
  //class안의 fuction render()은 function키워드 생략가능
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

class TOC extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="1.html">HTML</a>
          </li>
          <li>
            <a href="2.html">CSS</a>
          </li>
          <li>
            <a href="3.html">JavaScript</a>
          </li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web" />
        <Subject title="React" sub="For UI" />
        <TOC />
        <Content title="HTML" desc="HTML is..." />
      </div>
    );
  }
}

export default App;
