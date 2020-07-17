import React from 'react';
import ExpensifyPic from '../images/expensifypic.png';
import IndecisionPic from '../images/indecisionpic.png';
import SecretsPic from '../images/secretspic.png';
import DrumKitPic from '../images/drumkitpic.png';
import SimonSaysPic from '../images/simonsayspic.png';
import DiceChallengePic from '../images/dicechallengepic.png';
import {Helmet} from 'react-helmet'

const Portfolio = () => (
  <div className="portfolio-container">
    <Helmet>
      <title>Sal J's Portfolio | Project List</title>
      <meta
        name="description"
        content="List of websites made by, Freelance Web Developer, Salvador Martinez Jr aka @SalvadorChaos."
      />
    </Helmet>
    <div className="portfolio-titles">
      <h1>My Work</h1>
      <p>Things that I've done:</p>
      <p>Websites:</p>
    </div>

    <div className="portfolio-items">
      <div className="portfolio-item">
        <a class="link" href="https://salvadorchaos-expensify.herokuapp.com/">
          <img src={ExpensifyPic} className="item-image" alt="Expensify Project" />
        </a>
      </div>

      <div className="portfolio-item">
        <a class="link" href="https://salvadorchaos-indecision.herokuapp.com/">
          <img src={IndecisionPic} className="item-image" alt="Indecision Project" />
        </a>
      </div>

      <div className="portfolio-item">
        <a class="link" href="https://salvadorchaos-secrets.herokuapp.com/">
          <img src={SecretsPic} className="item-image" alt="Secrets Project" />
        </a>
      </div>
      
      <div className="portfolio-item">
        <a class="link" href="https://salvadorchaos.github.io/Drum-Kit/">
          <img src={DrumKitPic} className="item-image" alt="Drum-Kit Project" />
        </a>
      </div>

      <div className="portfolio-item">
        <a class="link" href="https://salvadorchaos.github.io/Simon-Says/">
          <img src={SimonSaysPic} className="item-image" alt="Simon-Says Project" />
        </a>
      </div>

      <div className="portfolio-item">
        <a class="link" href="https://salvadorchaos.github.io/Dice-Challenge/">
          <img src={DiceChallengePic} className="item-image" alt="Dice-Challenge Project" />
        </a>
      </div>
    </div>

    <div class="portfolio-titles">
      <p>Apps:</p>
    </div>

    <div class="portfolio-items">
      <div class="portfolio-item">
        <a href="https://play.google.com/store/apps/details?id=com.salvadorchaos.todoey">ToDo-E</a>
      </div>

      <div class="portfolio-item">
        <a href="https://play.google.com/store/apps/details?id=com.salvadorchaos.flash_chat">FlashChat</a>
      </div>

      <div class="portfolio-item">
        <a href="https://play.google.com/store/apps/details?id=com.salvadorchaos.crypto_ticker">Crypto Ticker</a>
      </div>

      <div class="portfolio-item">
        <a href="https://play.google.com/store/apps/details?id=com.salvadorchaos.quizzler">Quizzler</a>
      </div>

      <div class="portfolio-item">
        <a href="https://play.google.com/store/apps/details?id=com.salvadorchaos.clima">Clima Weather</a>
      </div>

      <div class="portfolio-item">
        <a href="https://play.google.com/store/apps/details?id=com.salvadorchaos.bmi_calculator">BMI Calculator</a>
      </div>

      <div class="portfolio-item">
        <a href="https://play.google.com/store/apps/details?id=com.salvadorchaos.xylophone_app">Xylophone</a>
      </div>

      <div class="portfolio-item">
        <a href="https://play.google.com/store/apps/details?id=com.salvadorchaos.destini_games">Destini Games</a>
      </div>

      <div class="portfolio-item">
        <a href="https://play.google.com/store/apps/details?id=com.salvadorchaos.magic_8_ball">Magic 8-Ball</a>
      </div>

      <div class="portfolio-item">
        <a href="https://play.google.com/store/apps/details?id=com.salvadorchaos.dice_e">Dice-E</a>
      </div>

      <div class="portfolio-item">
        <a href="https://play.google.com/store/apps/details?id=com.salvadorchaos.business_card">My Digital Business Card</a>
      </div>
    </div>
  </div>
);

export default Portfolio;