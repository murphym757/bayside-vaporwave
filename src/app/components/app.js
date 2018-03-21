import React, { Component } from 'react';
import Footer from './footer';
import LoggedIn from './loggedIn';
import github2 from '../../../images/github2.png';
import baysidewave from '../../../images/baysidewave.jpg';
import logo from '../../../images/BVVLogo.svg';


export default class App extends Component {
    render() {
        return <div>
            <img class="bvVaporwaveLogo pt-5" src="../../../images/BVVLogo.svg" width="200" alt="logo" />
            <h1 class="app-title">Bayside Vaporwave</h1>
                <div class="card">
                    <div class="card-block">
                        <h3 class="card-title">How Bayside Vaporwave Works:</h3>
                        <p class="card-explanation span lead">With supporting text below as a natural lead-in to content.</p>
                        <LoggedIn />
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