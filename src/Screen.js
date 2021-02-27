import React from 'react';

const Screen = (props) => {

    return(
        <div className="Screen">
            <div className = "screen-container">
                {/* TODO: Add navbar component here, shows time and battery */}
                <div className = "main-menu-container">
                    {/* add list items here, main menu to be enabled based on conditions */}
                    <span className = "menu-heading">Menu</span>
                    <ul className = "menu-list">
                        {
                            ['Songs', 'Albums', 'Games','Settings'].map(function(item) {
                                return <li key={item} id={item} className = "active-item">{item}</li>;
                            })
                        }
                    </ul>
                    {/* add sub menu list items here, sub menu to be enabled based on conditions */}
                    {/* TODO: Add sub menu here */}
                </div>
            </div>
        </div>
    );

}


export default Screen;