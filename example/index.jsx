import React, { Component } from 'react';
import { render } from 'react-dom';
import FlashMessage from '../src';

class App extends Component {
  constructor() {
    super();

    this.state = { messages: [] };
    this.addMessage = this.addMessage.bind(this);
  }

  addMessage() {
    const newMessage = (
      <FlashMessage id={`message-${this.state.messages.length}`}>
        <h1>Message number {this.state.messages.length}</h1>
      </FlashMessage>
    );
    this.setState({
      messages: [...this.state.messages, newMessage],
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.addMessage}>Add Message</button>
        {this.state.messages}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
