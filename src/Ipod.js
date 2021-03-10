import React from 'react';
import Wheel from './Wheel';
import Screen from './Screen';
import ZingTouch from 'zingtouch';
import $ from 'jquery';

class Ipod extends React.Component{
    constructor(){
        super();
        this.state = {
            menu: true,
            submenu: false,
            songs: false,
            albums: false,
            games: false,
            settings: false
        }
    }
    //wheel rotation control
    handleRotation = (props) => {
        const wheel = document.getElementById('scroll-wheel');
        const zt = new ZingTouch.Region(wheel);
        const songs = $("#Songs");
        const albums = $("#Albums");
        const games = $("#Games");
        const settings = $("#Settings");
        let angle = 0;
        zt.bind(wheel, 'rotate', (e) => {
            angle += e.detail.distanceFromLast;

            // console.log("angle : " + angle + "\n");

            // select different items based on angle
            // handle menu item selection
            // Song selection
            if(((angle > 0 && angle <= 30)||(angle <= 0 && angle > -30)) && (this.state.menu && !this.state.submenu)){
                // console.log("Song selected");
                // console.log($("#Songs"));

                songs.addClass("active-item");
                albums.removeClass("active-item");
                games.removeClass("active-item");
                settings.removeClass("active-item");
                this.setState({
                    songs: true,
                    albums: false,
                    games: false,
                    settings: false,
                    submenu: false
                });

            }
            // Album Selection
            else if(((angle > 30 && angle <= 60)||(angle <= -30 && angle > -60)) && (this.state.menu && !this.state.submenu)){
                // console.log("Album Selected");
                songs.removeClass("active-item");
                albums.addClass("active-item");
                games.removeClass("active-item");
                settings.removeClass("active-item");
                this.setState({
                    songs: false,
                    albums: true,
                    games: false,
                    settings: false,
                    submenu: false
                });
            }
            //Games Selection
            else if(((angle > 60 && angle <= 90)||(angle <= -60 && angle > -90)) && (this.state.menu && !this.state.submenu)){
                // console.log("Games Selected");
                songs.removeClass("active-item");
                albums.removeClass("active-item");
                games.addClass("active-item");
                settings.removeClass("active-item");
                this.setState({
                    songs: false,
                    albums: false,
                    games: true,
                    settings: false,
                    submenu: false
                });
            }
            //Settings Selection
            else if(((angle > 90 && angle <= 120)||(angle <= -90 && angle > -120)) && (this.state.menu && !this.state.submenu)){
                // console.log("Settings Selected");
                songs.removeClass("active-item");
                albums.removeClass("active-item");
                games.removeClass("active-item");
                settings.addClass("active-item");
                this.setState({
                    songs: false,
                    albums: false,
                    games: false,
                    settings: true,
                    submenu: false
                });
            }
        });

        // handle submenu item selection

    }
    // handle Centre button click
    handleCentreButtonClick = (props) => {
        console.log("Centre Button Clicked");
        const {menu, submenu, songs, albums, games, settings} = this.state;
        // if we are on the main menu
        if(menu){
            if(songs){
                // change background
                this.setState({
                    menu: false,
                    submenu: true
                });
            }
            else if(albums){
                // change background
                this.setState({
                    menu: false,
                    submenu: false
                });
            }
            else if(games){
                // change background
                this.setState({
                    menu: false,
                    submenu: false
                });
            }
            else if(settings){
                // change background
                this.setState({
                    menu: false,
                    submenu: false
                });
            }
        }

        // TODO: Handle submenu clicks, same as above
    }
    // handle Menu button click, takes back to previous screen
    handleMenuButtonClick = (props) => {
        console.log("Menu Button clicked");
        const {menu, submenu} = this.state;
        if(menu){
            return;
        }
        else if(submenu && !menu){
            this.setState({
                menu: true,
                submenu: false
            });
        }
        else if(!menu)
        {
            this.setState({
                menu: true
            });
        }
    }
    render(){
        const {menu, submenu} = this.state;
        return (
         <div className="Ipod">
             <div className="container">
                <Screen menu={menu} submenu = {submenu}/>
                <Wheel
                onHandleRotation = {this.handleRotation}
                onCentreButtonClick = {this.handleCentreButtonClick}
                onMenuButtonClick = {this.handleMenuButtonClick} />
             </div>
         </div>
        );
      }
}

export default Ipod;