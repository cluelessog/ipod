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
                            {
                                ['Songs', 'Albums', 'Games','Settings'].map(function(item) {
                                    return <li key={item} id={item} className = "">{item}</li>;
                                })
                            }
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
                            {
                                ['Favourite', 'Artist', 'Bands'].map(function(item) {
                                    return <li key={item} id={item} className = "">{item}</li>;
                                })
                            }
                        </ul>
                    </div>
                    : null
                }
            </div>
        </div>
    );

}


export default Screen;