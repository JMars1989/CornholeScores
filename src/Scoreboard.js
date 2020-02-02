import React, { Component } from 'react';
import PlayerList from './Components/PlayerList';
// import Player from './Components/Player';
// import AddPlayerForm from './Components/AddPlayer';
import Header from './Components/Header';
import './App.css';

class Scoreboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [
        {
          name: 'John',
          score: 0,
          team: 'one'
        },
        {
          name: 'Jack',
          score: 0,
          team: 'two'
        }
      ]
    };
    this.handleAddPlayer = this.handleAddPlayer.bind(this);
    this.handleRemovePlayer = this.handleRemovePlayer.bind(this);
    this.handleIncrementScoreByName = this.handleIncrementScoreByName.bind(
      this
    );
    this.handleDecrementScoreByName = this.handleDecrementScoreByName.bind(
      this
    );
  }

  handleIncrementScoreByName = name => {
    const playersCopy = [...this.state.players];

    playersCopy.map(player => {
      if (player.name === name) {
        player.score = player.score + 1;
      }
      return player;
    });

    this.setState({
      players: playersCopy
    });
  };

  handleDecrementScoreByName = name => {
    const playersCopy = [...this.state.players];

    playersCopy.map(player => {
      if (player.name === name) {
        player.score = player.score + 1;
      }
      return player;
    });

    this.setState({
      players: playersCopy
    });
  };

  handleAddPlayer = (name, team) => {
    const newPlayer = {
      name: name,
      score: 0,
      team: team
    };

    const playersCopy = [...this.state.players];
    const newPlayers = playersCopy.concat([newPlayer]);

    this.setState({
      players: newPlayers
    });
  };

  handleRemovePlayer = name => {
    const newPlayers = [...this.state.players].filter(
      player => player.name !== name
    );

    this.setState({
      players: newPlayers
    });
  };

  render() {
    const teamOne = this.state.players.filter(player => player.team === 'one');
    const teamTwo = this.state.players.filter(player => player.team === 'two');
    return (
      <div>
        <Header />

        <PlayerList
          players={teamOne}
          team={'one'}
          removePlayer={this.handleRemovePlayer}
          incrementScoreByName={this.handleIncrementScoreByName}
          decrementScoreByName={this.handleDecrementScoreByName}
          addPlayer={this.handleAddPlayer}
        />

        <PlayerList
          players={teamTwo}
          team={'two'}
          removePlayer={this.handleRemovePlayer}
          incrementScoreByName={this.handleIncrementScoreByName}
          decrementScoreByName={this.handleDecrementScoreByName}
          addPlayer={this.handleAddPlayer}
        />
      </div>
    );
  }
}

export default Scoreboard;
