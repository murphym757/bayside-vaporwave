import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        const imageClickGithub = () => {
            console.log("https://github.com/murphym757/bayside-vaporwave");
        }
        const imageClickPortfolio = () => {
            console.log("https://mauricemurphyjr.herokuapp.com");
        }
        return (
            <div>
                <a href="https://github.com/murphym757/bayside-vaporwave" target="_blank"><img class="githubLogo" src="../../../images/github2.png" height="100px" width="180px" alt="github" onClick={() => imageClickGithub()} /></ a>
                <a href="https://mauricemurphyjr.herokuapp.com" target="_blank"><img class="portfolioLogo" src="../../../images/mmlogo.png" height="80px" width="150px" alt="portfolio" onClick={() => imageClickPortfolio()} /></a>
            </div>
        );
    }
}
