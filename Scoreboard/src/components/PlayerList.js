import {CustomPlayer} from "./CustomPlayer";
import React from 'react';

class PlayerList extends React.Component{
    getHighScore(){
        const highScore = this.props.players.reduce((maxScore,player) => maxScore > player.score ? maxScore : player.score, 0);
        return highScore > 0 ? highScore : null;
    }

    render(){
        let titleClass = '';
        if (this.props.playerState.indexOf('All') >=0){
            titleClass = 'all-title';

        }else if (this.props.playerState.indexOf('Good') >=0){
            titleClass = 'good-title';
        }else if (this.props.playerState.indexOf('Bad') >= 0){
            titleClass = 'bad-title';
        }

        return(
            <>
                <p className={titleClass}>{this.props.playerState}</p>

                {
                    this.props.players.map((player) =>
                        <CustomPlayer name={player.name}
                                      score={player.score}
                                      key={player.id.toString()}
                                      isHighScore={player.score === this.getHighScore()}
                                      id={player.id} />)
                }
            </>

        )
    }
}
export default PlayerList;