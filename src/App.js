import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import hotkey from 'react-hotkey';
import './App.css';

hotkey.activate();

class App extends Component {
  constructor() {
    super();
    this.navigateByArrows = this.navigateByArrows.bind(this);

    this.state = {
      msg: 621
    };
  }

  navigateByArrows(e) {
    const { msg } = this.state;

    let next = parseInt(msg, 10);

    switch (e.keyCode) {
      case 37:
        next = msg - 1;
        break;
      case 39:
        next = msg + 1;
        break;
      default: break;
    }

    this.setState({ msg: next });
    browserHistory.push(`/${next}`);

  }

  componentWillMount() {
    const { msg } = this.props.params;

    this.setState({
      msg: msg || 621
    });
  }

  componentDidMount() {
    hotkey.addHandler(this.navigateByArrows);
  }

  componentWillUnmount() {
    hotkey.removeHandler(this.navigateByArrows);
  }

  render() {
    const { msg } = this.state;
    return (
      <div className="App">{ msg }</div>
    );
  }
}

export default App;
