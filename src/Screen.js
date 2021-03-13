import React from 'react';
const Screen = (props) => {
    const {menu, submenu} = props;
    return(
        <div className="Screen">
            <div className = "screen-container">
                {
                    (!menu && !submenu) ? 
                    <div className = "titleBar" style={{backgroundColor: 'white'}}>
                        <span className = "menu-heading">iPod</span>
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
                            <li key="Songs" id="Songs" className = "active-item">Songs</li>
                            <li key="Albums" id="Albums" className = "">Albums</li>
                            <li key="Games" id="Games" className = "">Games</li>
                            <li key="Settings" id="Settings" className = "">Settings</li>
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
                            <li key="Favourite" id="Favourite" className = "active-item">Favourite</li>
                            <li key="Artist" id="Artist" className = "">Artist</li>
                            <li key="Bands" id="Bands" className = "">Bands</li>
                        </ul>
                    </div>
                    : null
                }
            </div>
        </div>
    );

}


export default Screen;