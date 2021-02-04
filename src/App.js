import "./App.css";
import { Component } from "react";

//Class Name은 대문자
class Subject extends Component {
  //class안의 fuction render()은 function키워드 생략가능
  render() {
    return (
      <header>
        <h1>WEB</h1>
        World Wide Web!
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
        <h2>HTML</h2>
        HTML is...
      </article>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject />
        <TOC />
        <Content />
      </div>
    );
  }
}

export default App;
