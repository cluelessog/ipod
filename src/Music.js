import React from 'react';
import $ from 'jquery';
import moment from 'moment';
class Music extends React.Component{

    constructor(){
        super();
        this.state = {
            mounted : true
        }
    }
   
    componentDidMount(){
        let self = this;
        let track = self.props.audio;
        track.play();
        self.props.changePlayState();
        track.addEventListener("timeupdate",function(){
            if(self.state.mounted){
                const currentTime = track.currentTime;
                const totalDuration = track.duration;
                const currentPosition = currentTime/totalDuration;
                self.setState({
                    audio : track
                })
                $("#fill").width(currentPosition*100 + "%");
            }
        })
        
    }

    computeDuration(track,isCurrentTime){
        var seconds;
        if(isCurrentTime){
            seconds = track.currentTime;
        }else{
            seconds = track.duration;
        }
        var duration = moment.duration(seconds, "seconds");
        var time = "";
        var hours = duration.hours();
        if (hours > 0) { time = hours + ":" ; }
        time = time + duration.minutes() + ":" + duration.seconds();
        return time;
    }

    componentWillUnmount(){
        this.state.mounted = false;
    }

    render(){
       const {audio} = this.props;
        return(
            <div className = "playing-track-container">
                <div className = "track-info">
                    <img className = "artist-image" src="https://www.guinnessworldrecords.com/Images/despacito%20header_tcm25-520895.jpg" />
                    <div className = "artist-info">
                    <h4>Despacito</h4>
                        <p>Luis Fonsi</p>
                        <p>Ft. Daddy Yankee</p>
                    </div>
                </div>
                <div className = "track-progress-bar">
                    <p className = "current-point">{audio !== null ? this.computeDuration(audio,true) : '0 / 0'}</p>
                    <div className = "seek-bar">
                        <div className = "fill" id='fill'></div>
                    </div>
                    <p className = "total-duration">{audio != null ? this.computeDuration(audio,false) : '0 / 0'}</p>
                </div>
            </div>
        );
    }

}

export default Music;