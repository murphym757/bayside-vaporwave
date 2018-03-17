import React, { Component } from 'react';
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
                        <img class="footerTwiiter" src="../../../images/github2.png" width="200" alt="twitter" />
                        <img class="iceCream" src="../../../images/baysidewave.jpg" width="200" alt="dairy" />
                        <h3 class="card-title">How Bayside Vaporwave Works:</h3>
                        <p class="card-explanation span">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-vaporwave">Sign In</a>
                    </div>
                </div>
                <hr />
        </div>;
    }
}