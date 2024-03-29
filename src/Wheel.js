import React from 'react';

const Wheel = (props) => {
    // display wheel content and take care of various click events
    return(
        <div className="outer-circle" id="scroll-wheel" onClick={props.onHandleRotation}>
            <img id="menu-btn" className="menu-btn" src="menu.svg" alt="menu-btn" onClick={props.onMenuButtonClick} />
            <img id="next-btn" className="next-btn" src="fast_forward.svg" alt="next-btn"/>
            <img id="prev-btn" className="prev-btn" src="rewind.svg" alt="prev-btn"/>
            <img id="play-pause-btn" className="play-pause-btn" src="play_pause.svg" alt="play-pause-btn" onClick={props.onPlayPauseClick}/>
            <div className="inner-circle" id="centre-button" onClick={props.onCentreButtonClick}></div>
        </div>
    );
}

export default Wheel;