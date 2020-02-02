import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value) {
      this.props.addPlayer(this.state.value, this.props.team);
      this.setState({ value: '' });
    }
  };

  render() {
    return (
      <div className='form'>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type='text'
              value={this.state.value}
              onChange={this.handleChange}
              placeholder='Add a player...'
            />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default AddPlayer;

AddPlayer.propTypes = {
  addPlayer: PropTypes.func.isRequired
};
