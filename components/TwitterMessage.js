const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super()
    this.state = {
      messageLength: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

handleChange(event) {
  this.setState({
    messageLength: event.target.value
  })}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.messageLength} onChange={this.handleChange} />
        <p>{this.props.maxChars - this.state.messageLength.length}</p>
      </div>
    );
  }
}
module.exports = TwitterMessage;
