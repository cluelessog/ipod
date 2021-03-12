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
            settings: false,
            favourite: false,
            artist: false,
            bands: false
        }
    }

    //wheel rotation control
    handleRotation = (props) => {
        const wheel = document.getElementById('scroll-wheel');
        const zt = new ZingTouch.Region(wheel);

        // menu items
        const songs = $("#Songs");
        const albums = $("#Albums");
        const games = $("#Games");
        const settings = $("#Settings");

        // submenu items
        const favourite = $("#Favourite");
        const artist = $("#Artist");
        const bands = $("#Bands");
        let angle = 0;
        
        zt.bind(wheel, 'rotate', (e) => {
            angle += e.detail.distanceFromLast;

             console.log("angle : " + angle + "\n");
            // console.log("menu : " + this.state.menu + "\n");
            // console.log("submenu : " + this.state.submenu + "\n");
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
                    submenu: false,
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
                    submenu: false,
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
                    submenu: false,
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
                    submenu: false,
                });
            }

            // handle submenu item selection   
            // console.log("angle : " + angle + "\n");
            // favourite selection
            if(((angle > 0 && angle <= 30)||(angle <= 0 && angle > -30)) && (this.state.submenu)){
                // console.log("favourite selected");
                // console.log($("#Favourite"));
                // console.log("fav : " + this.state.submenu + "\n");
                favourite.addClass("active-item");
                artist.removeClass("active-item");
                bands.removeClass("active-item");
                this.setState({
                    favourite: true,
                    artist: false,
                    bands: false
                });
            }
            // Artist Selection
            else if(((angle > 30 && angle <= 60)||(angle <= -30 && angle > -60)) && (this.state.submenu)){
                // console.log("Artist Selected");
                // console.log("artist : " + this.state.submenu + "\n");
                favourite.removeClass("active-item");
                artist.addClass("active-item");
                bands.removeClass("active-item");
                this.setState({
                    favourite: false,
                    artist: true,
                    bands: false
                });
            }
            //Bands Selection
            else if(((angle > 60 && angle <= 90)||(angle <= -60 && angle > -90)) && (this.state.submenu)){
                // console.log("Bands Selected");
                // console.log("band : " + this.state.submenu + "\n");
                favourite.removeClass("active-item");
                artist.removeClass("active-item");
                bands.addClass("active-item");
                this.setState({
                    favourite: false,
                    artist: false,
                    bands: true
                });
            }

        });
    }
    // handle Centre button click
    handleCentreButtonClick = (props) => {
        console.log("Centre Button Clicked");

        //stop propagation to wheel div
        props.stopPropagation(onclick);
        const {menu, submenu, songs, albums, games, settings, favourite, artist, bands} = this.state;
        // if we are on the main menu
        if(menu){
            if(songs){
                // change background
                this.setState({
                    menu: !menu,
                    submenu: !submenu
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

        if(submenu){
            if(favourite){
                // change background
                this.setState({
                    menu: false,
                    submenu: false
                });
            }
            else if(artist){
                // change background
                this.setState({
                    menu: false,
                    submenu: false
                });
            }
            else if(bands){
                // change background
                this.setState({
                    menu: false,
                    submenu: false
                });
            }
        }
    }
    // handle Menu button click, takes back to previous screen
    handleMenuButtonClick = (props) => {
        console.log("Menu Button clicked");
        const {menu, submenu} = this.state;
        // console.log("menu : " + menu + "\n");
        // console.log("submenu : " + submenu + "\n");
        if(menu){
            return;
        }
        else if(submenu && !menu){
            this.setState({
                menu: !menu,
                submenu: !submenu
            });
        }
        else if(!menu && !submenu)
        {
            this.setState({
                menu: !menu,
                submenu: submenu
            });
        }
        // console.log("after");
        // console.log("menu : " + menu + "\n");
        // console.log("submenu : " + submenu + "\n");
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