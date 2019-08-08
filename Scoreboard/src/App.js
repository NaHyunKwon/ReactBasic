import React from 'react';
import './App.css';
import Header from './components/Header';
import AddPlayerForm from './components/AddPlayerForm';
import {connect} from "react-redux";
import PlayerList from "./components/PlayerList";
import SearchPlayer from "./components/SearchPlayer";

class App extends React.Component {

  // getHighScore(){
  //   const highScore = this.props.players.reduce((maxScore, player) => maxScore > player.score ? maxScore : player.score, 0);
  //   return highScore > 0 ? highScore : null;
  // }
  /*render() {

    return (
        <div className="scoreboard">
          <Header title="My scoreboard"  players={this.props.players}/>

          {this.props.players.map((item) =>
              <CustomPlayer name={item.name}
                      score={item.score}
                      key={item.id.toString()}
                      id={item.id} isHighScore={item.score === this.getHighScore()}
              />)
          }
          <AddPlayerForm />
        </div>

    );
  }*/
  /*render() {
    return (
        <div className="scoreboard">
          <Header players={this.props.players} />

          {
            this.props.players.map(player => (
                <CustomPlayer name={player.name} key={player.id} id={player.id}
                              score={player.score}

                              isHighScore={player.score === this.getHighScore()}/>
            ))
          }
          <AddPlayerForm/>
        </div>
    );
  }*/
    render() {
        const {players} = this.props;

        const goodPlayers = players.filter(item => item.score >= 0);
        const badPlayers = players.filter(item => item.score < 0);

        return (
            <div className="scoreboard">
                <Header players={players} />

                <SearchPlayer></SearchPlayer>

                {/*Players List*/}
                {
                    this.props.isSorted?
                    [
                        <PlayerList playerState='Good Players' players={goodPlayers} />,
                        <PlayerList playerState='Bad Players' players={badPlayers} />] :
                        <PlayerList playerState='All Players' players={this.props.filteredPlayers} />
                }
                <AddPlayerForm />
            </div>
        );
    }
}

let mapStateToProps = (state) => {
  return {
      players: state.playerReducer.players,
      filteredPlayers: state.playerReducer.filteredPlayers,
      isSorted: state.playerReducer.isSorted
  }
}


export default connect(mapStateToProps)(App);