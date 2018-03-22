import React, { Component } from 'react';
import Spotify from 'spotify-web-api-js';

const spotifyWebApi = new Spotify();

export default class LoggedIn extends Component {
    constructor() {
        super();
        const params = this.getHashParams();
        this.state = {
            loggedIn: params.access_token ? true : false,
            nowPlaying: {
                name: null,
                album_name: null,
                release_date: null,
                image: null,
                artists_name: null
            }
        }
        if (params.access_token) {
            spotifyWebApi.setAccessToken(params.access_token)
        }
    }
    getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while (e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }

    getNowPlaying() {
        spotifyWebApi.getMyCurrentPlaybackState()
            .then((response) => {
                this.setState({
                    nowPlaying: {
                        name: "Track " + response.item.track_number + ": " + response.item.name,
                        album_name: "Album: " + response.item.album.name,
                        release_date: "Release Date: " + response.item.album.release_date,
                        image: response.item.album.images[0].url,
                        artists_name: "Artist: " + response.item.artists[0].name,
                    }
                });
            })
    }
    pauseSong() {
        spotifyWebApi.searchAlbums()
    }
    render() {
        return <div class="container">
            {this.state.loggedIn === true ? <div>
                <div class="media"> 
                    <div class="row">
                        <img class="d-flex align-self-start img-responsive mr-3 rounded col" src={this.state.nowPlaying.image} width="200" />
                        <div class="media-body col">
                            <h3 class="mt-0 track-name">{this.state.nowPlaying.name}</h3>
                            <a href="/login" class="album-link"><h3 class="mt-0 album-name">{this.state.nowPlaying.album_name}</h3></a>
                            <h3 class="mt-0 release-date">{this.state.nowPlaying.release_date}</h3>
                            <br />
                            <h3 class="mt-0 track-name">{this.state.nowPlaying.artists_name}</h3>
                            <iframe src="https://open.spotify.com/embed?uri=spotify:user:chillin757:playlist:6u3fyYjDRVkUcqnDHWE1B6&theme=white" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                            <div class="row pt-2">
                                <a class="col-4 media-button" onClick={() => this.getNowPlaying()}><i class="fas fa-backward"></i></a>
                                <a class="col-4 media-button" onClick={() => this.pauseSong()}><i class="fas fa-play"></i></a>
                                <a class="col-4 media-button" onClick={() => this.getNowPlaying()}><i class="fas fa-forward"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <a class="btn btn-vaporwave" onClick={() => this.getNowPlaying()}>Now Playing</a>
                <a href="/login" class="btn btn-vaporwave" onClick={() => this.getNowPlaying()}><i class="fab fa-spotify"></i> Refresh</a>
            </div>
                : <a href="/login" class="btn btn-vaporwave" onClick={() => this.getNowPlaying()}><i class="fab fa-spotify"></i> Login</a>
            }
        </div>;
    }
}