import React from 'react';
import Wheel from './Wheel';
import Screen from './Screen';
import ZingTouch from 'zingtouch';

class Ipod extends React.Component{
    constructor(){
        super();
        this.state = {
            menu: false,
            submenu: false,
            songs: false,
            albums: false,
            games: false,
            settings: false
        }
    }
    //wheel ka rotation control
    //menu click
    //inner circle click
    handleRotation = () => {
        const target = document.getElementById('scroll-wheel');
        const zt = new ZingTouch.Region(target);
        let angle = 0;
        zt.bind(target, 'rotate', (e) => {
            angle += e.detail.distanceFromLast;
            //angle range in positive and negative 0 se 30 pe aghe and 0 se -30 pe peche jaega menu item selection
            console.log("angle : " + angle + "\n");

            // select different items based on angle
            if((angle > 0 && angle <= 30)||(angle <= 0 && angle > -30)){
                console.log("Song selected");
            }
        })
    }
    render(){
        return (
         <div className="Ipod">
             <div className="container">
                <Screen />
                <Wheel
                onHandleRotation = {this.handleRotation} />
             </div>
         </div>
        );
      }
}

export default Ipod;