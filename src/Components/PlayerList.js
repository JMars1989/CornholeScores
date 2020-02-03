import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import AddPlayerForm from './AddPlayer';

const PlayerList = props => {
  const {
    players,
    team,
    removePlayer,
    incrementScoreByName,
    addPlayer
  } = props;

  return (
    <div>
      <h2 className='teamName'>Team {team}</h2>
      {players.map((player, index) => (
        <Player
          name={player.name}
          key={index}
          score={player.score}
          index={index}
          removePlayer={removePlayer}
          incrementScoreByName={incrementScoreByName}
        />
      ))}
      <AddPlayerForm addPlayer={addPlayer} team={team} />
    </div>
  );
};

export default PlayerList;

PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
  team: PropTypes.string.isRequired,
  removePlayer: PropTypes.func.isRequired,
  incrementScoreByName: PropTypes.func.isRequired,
  addPlayer: PropTypes.func.isRequired
};
