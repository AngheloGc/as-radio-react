import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import defaultAnimeImage from '../images/default.png';
import equalizer from '../images/audio-spectrum.gif';

import Iframe from '../components/utils/iframe';

import firebase from './utils/firebase';

export default class Streaming extends Component {

    constructor() {
        super();
        //this.updateMessage = this.updateMessage.bind(this);
        //this.submitMessage = this.submitMessage.bind(this);
        this.loadData = this.loadData.bind(this);
        this.state = {
            songNow: [],
            songNext: []
        }
    }

    componentDidMount() {
        this.loadData()
    }

    loadData() {

        let songsArray = []

        firebase.database().ref('songs/').orderByChild('inList').equalTo(true).on('value', songList => {
            songsArray = []
            songList.forEach(function(snap) {
                var song = snap.val();

                songsArray.push({
                    anime: song.name,
                    type: `${song.type} ${song.number}`,
                    image: song.image,
                    date: song.date
                })
            })

            songsArray.sort(function(a, b) { 
                return new Date(a.date) - new Date(b.date);
            })

            this.setState({
                songNow: songsArray[0],
                songNext: songsArray[1]
            })
            
            console.log(this.state.songNow,this.state.songNext)
        })
    }

    render(){
        const songNow = this.state.songNow

        if(songNow) {

        return(
            <section className="App-streaming">
                <div className="App-streaming-header">
                    <div className="App-streaming-header-item Anime-component">
                        <span className="now-listening-tag">Ahora estás escuchando:</span>
                        <img src={songNow.image}/>
                        <p>
                            <h4>{songNow.anime}</h4>
                            <span>{songNow.type} {songNow.number}</span>
                        </p>
                    </div>
                    <a className="App-streaming-header-switcher App-link" href="/"><FontAwesomeIcon icon="exchange-alt" /></a>
                </div>
                <div className="App-streaming-body">
                    <div className="App-streaming-body-player">
                    <iframe src="https://player.twitch.tv/?channel=mirainosoramusic" frameborder="0" allowfullscreen="true" scrolling="no" height="440" width="100%"></iframe>
                    </div>
                    <div style={{ backgroundImage: `url(${songNow.image})` }} className="App-streaming-body-audio">
                        <div className="App-streaming-body-audio-content">
                            <img src={equalizer} />
                            <p>
                            <h2>{songNow.anime}</h2>
                            <span>{songNow.type} {songNow.number}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );

        }else{

            return( 
                <section className="App-streaming">
                <div className="App-streaming-header">
                    <div className="App-streaming-header-item Anime-component">
                        <p>No hay canciones en lista</p>
                    </div>
                    <a className="App-streaming-header-switcher App-link" href="/"><FontAwesomeIcon icon="exchange-alt" /></a>
                </div>
                <div className="App-streaming-body">
                    <div className="App-streaming-body-player">
                    <iframe src="https://player.twitch.tv/?channel=mirainosoramusic" frameborder="0" allowfullscreen="true" scrolling="no" height="440" width="100%"></iframe>
                    </div>
                    <div className="App-streaming-body-audio">
                        <div className="App-streaming-body-audio-content">
                            <img src={equalizer} />
                            <p>
                                <h2>Anime Sama Radio</h2>
                                <span>La mejor música anime solo aquí</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            )
        }
    }
}