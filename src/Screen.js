import React from 'react';
const Screen = (props) => {
    const {menu, submenu} = props;
    return(
        <div className="Screen">
            <div className = "screen-container">
                {/* TODO: Add navbar component here, shows time and battery */}
                {
                    menu ? 
                    <div className = "menu-container">
                        {/* add list items here, main menu to be enabled based on conditions */}
                        <span className = "menu-heading">Menu</span>
                        <ul className = "menu-list">
                            <li key="Songs" id="Songs" className = "active-item">Songs</li>
                            <li key="Albums" id="Albums" className = "">Albums</li>
                            <li key="Games" id="Games" className = "">Games</li>
                            <li key="Settings" id="Settings" className = "">Settings</li>
                        </ul>
                    </div>
                    : null
                }
                
                {/* add sub menu list items here, sub menu to be enabled based on conditions */}
                {
                    (!menu && submenu) ? 
                    <div className = "menu-container">
                        {/* add list items here, main menu to be enabled based on conditions */}
                        <span className = "menu-heading">Songs</span>
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