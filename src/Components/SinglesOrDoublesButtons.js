import React from 'react'
import PropTypes from 'prop-types';

const SinglesOrDoublesButtons = ({ choose, currentState }) => {

    return (
        <div>
            <button className="singlesOrDoubles" style={ currentState === 'singles' ? {borderWidth: '5px' } : null } onClick={() => choose('singles')}>Singles</button>
            <button className="singlesOrDoubles" style={ currentState === 'doubles' ? {borderWidth: '5px' } : null } onClick={() => choose('doubles')}>Doubles</button>
        </div>
    )
}

export default SinglesOrDoublesButtons;

SinglesOrDoublesButtons.propTypes = {
    choose: PropTypes.func.isRequired,
    currentState: PropTypes.string.isRequired
};