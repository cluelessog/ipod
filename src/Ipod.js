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
            bands: false,
            active: ''
        }
    }

    componentDidMount(){
        const audioEl = document.getElementsByClassName("audio-element")[0];
        console.log(audioEl);
        this.setState({
            audio : audioEl,
        });
        // audioEl.play();
    }
    selectSongs(){
        console.log("Song selected");
        // console.log($("#Songs"));
        this.setState({
            songs: true,
            albums: false,
            games: false,
            settings: false,
            submenu: false,
        });
    }

    selectSettings(){
        console.log("Settings Selected");
        this.setState({
            songs: false,
            albums: false,
            games: false,
            settings: true,
            submenu: false,
        });
    }

    selectGames(){
        console.log("Games Selected");
        this.setState({
            songs: false,
            albums: false,
            games: true,
            settings: false,
            submenu: false,
        });
    }
    selectAlbums(){
        console.log("Album Selected");
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
        this.setState({
            favourite: true,
            artist: false,
            bands: false
        });
    }

    selectBands(){
        console.log("Bands Selected");
        this.setState({
            favourite: false,
            artist: false,
            bands: true
        });
    }

    selectArtist(){
        console.log("Artist Selected");
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
            console.log("angle : " + angle + "\n");
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
                    }
                    //submenu
                    else if(this.state.submenu && !this.state.menu){
                        if(this.state.favourite){
                            this.selectArtist();
                        }
                        else if(this.state.artist){
                            this.selectBands();
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

                        if(this.state.albums){
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
                        if(this.state.artist){
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
                let imageUrl = "https://c4.wallpaperflare.com/wallpaper/807/970/560/psychedelic-abstract-colorful-wolf-headphones-hd-wallpaper-preview.jpg";
                $('.screen-container').css('background-image', 'url(' + imageUrl + ')');
                this.setState({
                    menu: !menu,
                    submenu: !submenu,
                    active: 'songs'
                });
            }
            else if(albums){
                let imageUrl = "https://media.giphy.com/media/ThuxekMi9kcAU4euK3/giphy.gif";
                $('.screen-container').css('background-image', 'url(' + imageUrl + ')');
                $('.screen-container').css('background-size', '264px 170px');
                this.setState({
                    menu: false,
                    submenu: false,
                    active: 'albums'
                });
            }
            else if(games){
                let imageUrl = "https://media.giphy.com/media/S7nF0HAVEBxUu76pxR/giphy.gif";
                $('.screen-container').css('background-image', 'url(' + imageUrl + ')');
                this.setState({
                    menu: false,
                    submenu: false,
                    active: 'games'
                });
            }
            else if(settings){
                this.setState({
                    menu: false,
                    submenu: false,
                    active: 'settings'
                });
            }
        }

        if(submenu){
            if(favourite){
                this.setState({
                    menu: false,
                    submenu: false,
                    active: 'favourite'
                });
            }
            else if(artist){
                let imageUrl = "https://static.wikia.nocookie.net/taylor-swift/images/3/3f/The_Weeknd_1.jpg/revision/latest?cb=20190330062206";
                $('.screen-container').css('background-image', 'url(' + imageUrl + ')');
                $('.screen-container').css('background-position', 'relative');
                this.setState({
                    menu: false,
                    submenu: false,
                    active: 'artist'
                });
            }
            else if(bands){
                let imageUrl = "https://flypaper.soundfly.com/wp-content/uploads/2016/10/metal-covers-header.png";
                $('.screen-container').css('background-image', 'url(' + imageUrl + ')');
                this.setState({
                    menu: false,
                    submenu: false,
                    active: 'bands'
                });
            }
        }
    }
    // handle Menu button click, takes back to previous screen
    handleMenuButtonClick = (props) => {
        console.log("Menu Button clicked");
        const {menu, submenu, songs, albums, games, settings, favourite, artist, bands} = this.state;
        // console.log("menu : " + menu + "\n");
        // console.log("submenu : " + submenu + "\n");
        if(menu){
            return;
        }
        else if(submenu && !menu){
            this.setState({
                menu: !menu,
                submenu: !submenu,
                favourite: true,
                artist: false,
                bands: false
            });
            let imageUrl = "https://c4.wallpaperflare.com/wallpaper/738/62/544/naruto-chidori-naruto-naruto-uzumaki-rasengan-naruto-sasuke-uchiha-hd-wallpaper-preview.jpg";
            $('.screen-container').css('background-image', 'url(' + imageUrl + ')');
        }
        else if(!menu && !submenu)
        {
            if(songs){
                this.setState({
                    menu: menu,
                    submenu: !submenu,
                    active: 'songs'
                });
                let imageUrl = "https://c4.wallpaperflare.com/wallpaper/807/970/560/psychedelic-abstract-colorful-wolf-headphones-hd-wallpaper-preview.jpg";
                $('.screen-container').css('background-image', 'url(' + imageUrl + ')');
            }
            else{
                this.setState({
                    menu: !menu,
                    submenu: submenu,
                    active: ''
                });
                let imageUrl = "https://c4.wallpaperflare.com/wallpaper/738/62/544/naruto-chidori-naruto-naruto-uzumaki-rasengan-naruto-sasuke-uchiha-hd-wallpaper-preview.jpg";
                $('.screen-container').css('background-image', 'url(' + imageUrl + ')');
            }
        }
    }
    render(){
        return (
         <div className="Ipod">
            <audio className="audio-element">
                <source src="Despacito.mp3"></source>
            </audio>
             <div className="container">
                <Screen states = {this.state}/>
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