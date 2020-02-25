import React, { Component } from 'react';
import Header from './Components/Header';
import PlayerList from './Components/PlayerList';
import SinglesOrDoublesButtons from './Components/SinglesOrDoublesButtons';
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
      ],
      singlesOrDoubles: 'doubles'
    };
    this.handleAddPlayer = this.handleAddPlayer.bind(this);
    this.handleRemovePlayer = this.handleRemovePlayer.bind(this);
    this.handleIncrementScoreByName = this.handleIncrementScoreByName.bind(
      this
    );
    this.handleSinglesOrDoublesButton = this.handleSinglesOrDoublesButton.bind(this);
  }

  handleIncrementScoreByName = (name, increment) => {
    const playersCopy = [...this.state.players];

    playersCopy.map(player => {
      if (player.name === name) {
        player.score = player.score + increment;
      }
      return player;
    });

    this.setState({
      players: playersCopy
    });
  };

  // handleAddPlayer = (name, team) => {
  //   const newPlayer = {
  //     name: name,
  //     score: 0,
  //     team: team
  //   };

  //   const playersCopy = [...this.state.players];
  //   const newPlayers = playersCopy.concat([newPlayer]);

  //   this.setState({
  //     players: newPlayers
  //   });
  // };

  //singles or doubles version
  handleAddPlayer = (name, team) => {
    //sum total players with player.team === team
    let playersOnTeam = 1;
    this.state.players.forEach(player => {
      if (player.team === team) {
        playersOnTeam++;
      }
    });

    console.log(playersOnTeam);
    if (this.state.singlesOrDoubles === "singles" && playersOnTeam > 1) {
      alert('Team is full!');
      return
    } else if (this.state.singlesOrDoubles === "doubles" && playersOnTeam > 2) {
      alert('Team is full!');
      return
    }

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

  // componentDidUpdate() {
  //   //Check for a single winner, break this out later
  //   const playersCopy = [...this.state.players];
  //   playersCopy.map(player => {
  //     if (player.score === 21) {
  //       alert(`${player.name} is the Winner!`);
  //       return player;
  //     }
  //     return player;
  //   });
  // }

  handleSinglesOrDoublesButton = singlesOrDoubles => {
    this.setState({
      singlesOrDoubles: singlesOrDoubles
    })
  }

  render() {
    const teamOne = this.state.players.filter(player => player.team === 'one');
    const teamTwo = this.state.players.filter(player => player.team === 'two');

    return (
      <div>
        <Header />
        <SinglesOrDoublesButtons choose={this.handleSinglesOrDoublesButton} currentState={this.state.singlesOrDoubles} />
        <PlayerList
          players={teamOne}
          team={'one'}
          removePlayer={this.handleRemovePlayer}
          incrementScoreByName={this.handleIncrementScoreByName}
          addPlayer={this.handleAddPlayer}
        />

        <PlayerList
          players={teamTwo}
          team={'two'}
          removePlayer={this.handleRemovePlayer}
          incrementScoreByName={this.handleIncrementScoreByName}
          addPlayer={this.handleAddPlayer}
        />
      </div>
    );
  }
}

export default Scoreboard;
