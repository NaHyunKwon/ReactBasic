import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {changeScore} from "../redux/actions";

const Counter = ({id, score, changeScore}) => {
    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={() => changeScore(id, -1)}> - </button>
            <span className="counter-score">{score}</span>
            <button className="counter-action increment" onClick={() => changeScore(id, 1)}> + </button>
        </div>
    )
}


Counter.propTypes = {
    id: PropTypes.number,
    score: PropTypes.number,
    changeScore: PropTypes.func
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeScore: (id, delta) => dispatch(changeScore(id, delta))
    }
}

export default connect(null, mapDispatchToProps)(Counter);