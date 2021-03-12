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
            songs: true,
            albums: false,
            games: false,
            settings: false,
            favourite: true,
            artist: false,
            bands: false
        }
    }

    selectSongs(){
        const songs = $("#Songs");
        const albums = $("#Albums");
        const games = $("#Games");
        const settings = $("#Settings");
        console.log("Song selected");
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

    selectSettings(){
        const songs = $("#Songs");
        const albums = $("#Albums");
        const games = $("#Games");
        const settings = $("#Settings");
        console.log("Settings Selected");
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

    selectGames(){
        const songs = $("#Songs");
        const albums = $("#Albums");
        const games = $("#Games");
        const settings = $("#Settings");
        console.log("Games Selected");
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
    
    selectAlbums(){
        const songs = $("#Songs");
        const albums = $("#Albums");
        const games = $("#Games");
        const settings = $("#Settings");
        console.log("Album Selected");
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

    selectFavourite(){

        console.log("favourite selected");
        // console.log($("#Favourite"));
        const favourite = $("#Favourite");
        const artist = $("#Artist");
        const bands = $("#Bands");
        favourite.addClass("active-item");
        artist.removeClass("active-item");
        bands.removeClass("active-item");
        this.setState({
            favourite: true,
            artist: false,
            bands: false
        });
    }

    selectBands(){
        const favourite = $("#Favourite");
        const artist = $("#Artist");
        const bands = $("#Bands");
        console.log("Bands Selected");
        favourite.removeClass("active-item");
        artist.removeClass("active-item");
        bands.addClass("active-item");
        this.setState({
            favourite: false,
            artist: false,
            bands: true
        });
    }

    selectArtist(){
        const favourite = $("#Favourite");
        const artist = $("#Artist");
        const bands = $("#Bands");
        console.log("Artist Selected");
        favourite.removeClass("active-item");
        artist.addClass("active-item");
        bands.removeClass("active-item");
        this.setState({
            favourite: false,
            artist: true,
            bands: false
        });
    }
    //wheel rotation control
    handleRotation = (props) => {
        const wheel = document.getElementById('scroll-wheel');
        const zt = new ZingTouch.Region(wheel);
        let angleMoved = 0;
        let angle = 0;
        
        zt.bind(wheel, 'rotate', (e) => {
            angle = e.detail.distanceFromLast;
            // console.log("angle : " + angle + "\n");
            // select different items based on angle moved
            // handle menu and submenu item selection
            //if angle moved is negative
            if(angle > 0){
                angleMoved++;
                console.log("angleMoved : " + angleMoved + "\n");
                if(angleMoved === 30){
                    angleMoved = 0;
                    //menu
                    if(this.state.menu && !this.state.submenu){
                        if(this.state.songs){
                            this.selectAlbums();
                        }
                        else if(this.state.albums){
                            this.selectGames();
                        }
                        else if(this.state.games){
                            this.selectSettings();
                        }
                        else if(this.state.settings){
                            this.selectSongs();
                        }
                    }
                    //submenu
                    else if(this.state.submenu && !this.state.menu){
                        if(this.state.favourite){
                            this.selectArtist();
                        }
                        else if(this.state.artist){
                            this.selectBands();
                        }
                        else if(this.state.bands){
                            this.selectFavourite();
                        }
                    }
                }
            }
            //angle moved is negative
            else{
                angleMoved++;
                console.log("angleMoved : " + angleMoved + "\n");
                if(angleMoved === 30){
                    angleMoved = 0;
                    //menu
                    if(this.state.menu && !this.state.submenu){
                        if(this.state.songs){
                            this.selectSettings();
                        }
                        else if(this.state.albums){
                            this.selectSongs();
                        }
                        else if(this.state.games){
                            this.selectAlbums()
                        }
                        else if(this.state.settings){
                            this.selectGames();
                        }
                    }
                    //submenu
                    else if(this.state.submenu && !this.state.menu){
                        if(this.state.favourite){
                            this.selectBands();
                        }
                        else if(this.state.artist){
                            this.selectFavourite();
                        }
                        else if(this.state.bands){
                            this.selectArtist();
                        }
                    }
                }
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