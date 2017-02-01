const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      ta: '',
      valid: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.setState({
      ta: event.target.value,
    })
    if(event.target.value) {
    this.setState({valid: validPoem(event.target.value)})
  }}

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.ta} onChange={this.handleClick} />
        {this.state.valid ? null : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>}
      </div>
    );
  }
}

function countWords(line) {
  return line.split(' ').filter(l => l).length;
}

function validPoem(poem) {
  const lineCount = poem.split('\n').filter(l => l);
  const correctLines = lineCount.length === 3;
  const correctWords= countWords(lineCount[0]) === 5 && countWords(lineCount[1]) === 3 && countWords(lineCount[2]) === 5;
  return correctLines && correctWords;
}

module.exports = PoemWriter;
