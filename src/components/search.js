import React, { Component } from 'react';

import defaultAnimeImage from '../images/default.png';

import Anime from './anime';

import firebase from './utils/firebase';

export default class Search extends Component {

    constructor() {
        super();
        //this.updateMessage = this.updateMessage.bind(this);
        //this.submitMessage = this.submitMessage.bind(this);
        this.searchSong = this.searchSong.bind(this);
        this.getInputValue = this.getInputValue.bind(this);
        this.state = {
            songs: [],
            inputValue: ''
        }
    }

    getInputValue(e) {

        this.setState({
            inputValue: e.target.value
        })

        this.searchSong(e)
    }

    searchSong(e) {

        let songsArray = []

        const text = this.state.inputValue

        if(e) {

            firebase.database().ref('songs/').orderByChild('name').startAt(text).limitToFirst(10).on('value', songList => {
                songsArray = []
                songList.forEach(function(snap) {
                    let song = snap.val()
                    let key = snap.key
    
                    songsArray.push({
                        id: key,
                        anime: song.name,
                        type: `${song.type} ${song.number}`,
                        image: song.image,
                        date: song.date,
                        inList: song.inList
                    })
                })
    
                this.setState({
                    songs: songsArray
                })
                
            })

        }
        
    }

    addSongToList(id) {

        firebase.database().ref('songs/' + id).update({
            inList: true,
            date: Date.now()
        })
    }

    render(){
        return(
            <section className="App-search">
                <div className="App-search-header">
                    <form>
                        <input id="search-song" onChange={e => this.getInputValue(e)} type="text" placeholder="Pide una canción..." />
                    </form>
                </div>
                <div id="container2" className="App-search-body container">
                    { this.state.songs.map( (song,i) => {
                        return <div onClick={e => {this.addSongToList(song.id)}}><Anime songInList={song.inList} key={i} imageSrc={song.image} animeName={song.anime} songName={song.type} /></div>
                    })}
                </div>
            </section>

        );
    }
}