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
                album_id: null,
                album_link: null,
                track_id: null,
                track_url: null,
                track_preview_link: null,
                track_popularity: null,
                track_popularity_scale: null,
                release_date: null,
                image: null,
                artists_name: null,
                artists_id: null,
                artists_link: null
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
                        track_id: "https://open.spotify.com/embed?uri=spotify:track:" + response.item.id + "&theme=white",
                        track_url: "" + response.item.preview_url + "",
                        track_preview_link: "(Play Preview)",
                        track_popularity: "Popularity: " + response.item.popularity,
                        track_popularity_scale: "(On a scale from 0 to 100)",
                        album_name: "Album: " + response.item.album.name,
                        album_id: "https://open.spotify.com/album/" + response.item.album.id + "",
                        album_link: "(Official Album Page)",
                        release_date: "Release Date: " + response.item.album.release_date,
                        image: response.item.album.images[0].url,
                        artists_name: "Artist: " + response.item.artists[0].name,
                        artists_id: "https://open.spotify.com/artist/" + response.item.artists[0].id + "",
                        artists_link: "(Official Artist Page)",
                    }
                });
            })
    }

    render() {
        return <div class="container p-auto">
            {this.state.loggedIn === true ? <div>
                <div class="row">
                    <img class="d-flex align-self-start img-fluid rounded col-lg-6" src={this.state.nowPlaying.image} width="300" />
                    <div class="media-body col-lg-6">
                        <h3 class="pt-3 track-name">{this.state.nowPlaying.name}<a href={this.state.nowPlaying.track_url} target="_blank"><br /><h6 class="track-link span">{this.state.nowPlaying.track_preview_link}</h6></a></h3>
                        <h3 class="pt-3 album-name">{this.state.nowPlaying.album_name}<a href={this.state.nowPlaying.album_id} target="_blank"><br /><h6 class="track-link span">{this.state.nowPlaying.album_link}</h6></a></h3>
                        <h3 class="pt-3 album-name">{this.state.nowPlaying.artists_name}<a href={this.state.nowPlaying.artists_id} target="_blank"><br /><h6 class="track-link span">{this.state.nowPlaying.artists_link}</h6></a></h3>
                        <h3 class="pt-3 release-date">{this.state.nowPlaying.release_date}</h3>
                        <h3 class="pt-3 pb-3 track-popularity">{this.state.nowPlaying.track_popularity}<br /><h6>{this.state.nowPlaying.track_popularity_scale}</h6></h3>
                        <iframe class="p-auto" src={this.state.nowPlaying.track_id} width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    </div>
                </div>
                <br />
                <a class="btn btn-vaporwave" onClick={() => this.getNowPlaying()}>Now Playing</a>
                <a class="btn btn-vaporwave" onClick={() => this.getNowPlaying()}><i class="fab fa-spotify"></i> Refresh</a>
                <br />
                <h6 class="refresh-help pt-4">Every hour, you must refresh your Spotify OAuth token by pressing the <i class="fab fa-spotify"></i> Refresh button.</h6>
            </div>
                : <a href="/login" class="btn btn-vaporwave"><i class="fab fa-spotify"></i> Login</a>
            }
        </div>;
    }
}