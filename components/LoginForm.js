const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClickUser = this.handleClickUser.bind(this)
    this.handleClickPass = this.handleClickPass.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    if(this.state.username.length > 0 && this.state.password.length > 0) {
      this.props.onSubmit()
}}

  handleClickUser(event) {
    this.setState({
      username: event.target.value
    })}

  handleClickPass(event) {
    this.setState({
      password: event.target.value
    })}

  render() {
    return (
      <form onSubmit={this.handleClick}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleClickUser} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handleClickPass} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

module.exports = LoginForm;
