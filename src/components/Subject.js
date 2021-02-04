import React, { Component } from "react";

//Class Name은 대문자
class Subject extends Component {
  //class안의 fuction render()은 function키워드 생략가능
  render() {
    return (
      <header>
        <h1>
          <a href="/">{this.props.title}</a>
        </h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;
