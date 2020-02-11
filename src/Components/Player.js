import React from 'react';
import PropTypes from 'prop-types';

const Player = props => {
  const { name, score, removePlayer, incrementScoreByName } = props;

  return (
    <div className='player'>
      <button className='removeButton' onClick={() => removePlayer(name)}>
        X
      </button>
      <div className='playerName'>{name}:</div>
      <span className='playerScore'>{score}</span>
      <button
        className='scoreButton'
        onClick={() => incrementScoreByName(name, -1)}
      >
        -
      </button>
      <button
        className='scoreButton'
        onClick={() => incrementScoreByName(name, 1)}
      >
        +
      </button>
    </div>
  );
};

export default Player;

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  removePlayer: PropTypes.func.isRequired,
  incrementScoreByName: PropTypes.func.isRequired
};
