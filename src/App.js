import React, { Component } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import Header from "./components/header.js";
import Content from "./components/content";
import GoogleAuth from "./components/google-auth";

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <GoogleAuth />
        <Content />
      </Container>
    );
  }
}

export default App;
