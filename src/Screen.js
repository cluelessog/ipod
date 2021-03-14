import React from 'react';
import Music from './Music';
const Screen = (props) => {
    const {menu, submenu, songs, albums, games, settings, favourite, artist, bands, active, audio} = props.states;
    return(
        <div className="Screen">
            <div className = "screen-container">
                {
                    (!menu && !submenu) ? 
                    <div className = "titleBar" style={{backgroundColor: 'white'}}>
                        <span className = "menu-heading">iPod.js</span>
                        <img className="battery" src="https://image.flaticon.com/icons/svg/3103/3103446.svg"></img>
                    </div>
                    : null
                }
                {/* menu to be enabled based on conditions */}
                {
                    menu ? 
                    <div className = "menu-container">
                        <div className = "titleBar">
                            <span className = "menu-heading">Home</span>
                            <img className="battery" src="https://image.flaticon.com/icons/svg/3103/3103446.svg"></img>
                        </div>
                        <ul className = "menu-list">
                            <li key="Songs" id="Songs" className = {songs ? "active-item": ""}>Songs</li>
                            <li key="Albums" id="Albums" className = {albums ? "active-item": ""}>Albums</li>
                            <li key="Games" id="Games" className = {games ? "active-item": ""}>Games</li>
                            <li key="Settings" id="Settings" className = {settings ? "active-item": ""}>Settings</li>
                        </ul>
                    </div>
                    : null
                }
                
                {/* sub menu to be enabled based on conditions */}
                {
                    (!menu && submenu) ? 
                    <div className = "menu-container">
                        <div className = "titleBar">
                            <span className = "menu-heading">Songs</span>
                            <img className="battery" src="https://image.flaticon.com/icons/svg/3103/3103446.svg"></img>
                        </div>
                        <ul className = "menu-list">
                            <li key="Favourite" id="Favourite" className = {favourite ? "active-item": ""}>Favourite</li>
                            <li key="Artist" id="Artist" className = {artist ? "active-item": ""}>Artist</li>
                            <li key="Bands" id="Bands" className = {bands ? "active-item": ""}>Bands</li>
                        </ul>
                    </div>
                    : null
                }

                {
                    (active === 'settings') ?

                    <div className = "setting-screen">
                        iPod.js
                        <img className = "react-logo" src="logo512.png" />
                        Made with <span className="heart">❤</span> by Sourabh
                    </div>

                    : null
                }

                {
                    (active === "favourite") ?
                        <Music audio = {audio}/>
                    : null
                }
            </div>
        </div>
    );

}


export default Screen;