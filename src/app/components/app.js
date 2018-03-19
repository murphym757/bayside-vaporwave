import React, { Component } from 'react';
import Footer from './footer';
import github2 from '../../../images/github2.png';
import baysidewave from '../../../images/baysidewave.jpg';
import logo from '../../../images/BVVLogo.svg';
import Spotify from 'spotify-web-api-js';

const spotifyWebApi = new Spotify();

export default class App extends Component {
    constructor(){
        super();
        const params = this.getHashParams();
        this.state = {
            loggedIn: params.access_token ? true : false,
            nowPlaying: {
                name: null,
                image: null
            }
        }
        if (params.access_token){
            spotifyWebApi.setAccessToken(params.access_token)
        }
    }
    getHashParams() {
          var hashParams = {};
          var e, r = /([^&;=]+)=?([^&;]*)/g,
              q = window.location.hash.substring(1);
          while ( e = r.exec(q)) {
             hashParams[e[1]] = decodeURIComponent(e[2]);
          }
          return hashParams;
        }

    getNowPlaying() {
        spotifyWebApi.getMyCurrentPlaybackState()
            .then((response) => {
                this.setState({
                    nowPlaying: {
                        name: response.item.name,
                        image: response.item.album.images[0].url
                    }
                });
            })
    }
    render() {
        return <div>
            <img class="bvVaporwaveLogo pt-5" src="../../../images/BVVLogo.svg" width="200" alt="logo" />
            <h1 class="app-title">Bayside Vaporwave</h1>
                <div class="card">
                    <div class="card-block">
                        <h3 class="card-title">How Bayside Vaporwave Works:</h3>
                        <p class="card-explanation span lead">With supporting text below as a natural lead-in to additional content.</p>
                        { this.state.loggedIn === true  ? <div>
                            <h3 class="artist-name"> Now Playing: {this.state.nowPlaying.name}</h3>
                            <img src={this.state.nowPlaying.image} width="200" />
                            <br />
                            <a class="btn btn-vaporwave" onClick={() => this.getNowPlaying()}>Now Playing</a>
                        </div>
                        : <a href="/login" class="btn btn-vaporwave" onClick={() => this.getNowPlaying()}><i class="fab fa-spotify"></i> Login</a>
                        }
                    </div>
                </div>
                <h5 class="address-line1 pt-3">COMING SOON TO BRICKELL CITY CENTRE</h5>
                <h5 class="address-line2 lead">701 SOUTH MIAMI AVENUE</h5>
                <h3 class="brickell-japanese lead">ブリッケル</h3>
                <hr />
            <Footer />
        </div>;
    }
}