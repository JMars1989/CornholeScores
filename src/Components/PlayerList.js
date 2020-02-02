import React from 'react';
import Player from './Player';
import AddPlayerForm from './AddPlayer';

const PlayerList = props => {
  const {
    players,
    team,
    removePlayer,
    incrementScoreByName,
    decrementScoreByName,
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
          decrementScoreByName={decrementScoreByName}
        />
      ))}
      <AddPlayerForm addPlayer={addPlayer} team={team} />
    </div>
  );
};

export default PlayerList;
