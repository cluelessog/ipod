import React from 'react';

const Wheel = (props) => {
    return(
        <div className="outer-circle" id="scroll-wheel" onClick={props.onHandleRotation}>
            <img id="menu-btn" className="menu-btn" src="menu.svg" alt="menu-btn"/>
            <img id="next-btn" className="next-btn" src="fast_forward.svg" alt="next-btn"/>
            <img id="prev-btn" className="prev-btn" src="rewind.svg" alt="prev-btn"/>
            <img id="play-pause-btn" className="play-pause-btn" src="play_pause.svg" alt="play-pause-btn"/>
            <div className="inner-circle" id="centre-button"></div>
        </div>
    );
}

export default Wheel;