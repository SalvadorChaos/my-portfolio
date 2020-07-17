import React from 'react';
import ExpensifyPic from '../images/expensifypic.png';
import IndecisionPic from '../images/indecisionpic.png';
import SecretsPic from '../images/secretspic.png';
import DrumKitPic from '../images/drumkitpic.png';
import SimonSaysPic from '../images/simonsayspic.png';
import DiceChallengePic from '../images/dicechallengepic.png';
import {Helmet} from 'react-helmet'
import ToDoE from '../images/todo-e.png';
import FlashChat from '../images/flashchat.png';
import CryptoTicker from '../images/crypto-ticker.png';
import ClimaWeather from '../images/clima-weather.png';
import BMICalculator from '../images/bmi-calculator.png';
import DestiniGames from '../images/destini-games.png';
import Quizzler from '../images/quizzler.png';
import Xylophone from '../images/xylophone.png';
import Magic8Ball from '../images/magic-8-ball.png';
import DiceE from '../images/dice-e.png';
import MyDigitalBusinessCard from '../images/my-digital-business-card.png';

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
      <h3>Websites:</h3>
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
      <h3>Apps:</h3>
    </div>

    <div>
      <div class="portfolio-item">
        <a href="https://play.google.com/store/apps/details?id=com.salvadorchaos.todoey">
          <img src={ToDoE} className="item-banner" alt="ToDo-E Project" />
        </a>
      </div>

      <div class="portfolio-item">
        <a href="https://play.google.com/store/apps/details?id=com.salvadorchaos.flash_chat">
          <img src={FlashChat} className="item-banner" alt="FlashChat Project" />
        </a>
      </div>

      <div class="portfolio-item">
        <a href="https://play.google.com/store/apps/details?id=com.salvadorchaos.crypto_ticker">
          <img src={CryptoTicker} className="item-banner" alt="Crypto-Ticker Project" />
        </a>
      </div>

      <div class="portfolio-item">
        <a href="https://play.google.com/store/apps/details?id=com.salvadorchaos.clima">
          <img src={ClimaWeather} className="item-banner" alt="Clima-Weather Project" />
        </a>
      </div>

      <div class="portfolio-item">
        <a href="https://play.google.com/store/apps/details?id=com.salvadorchaos.bmi_calculator">
          <img src={BMICalculator} className="item-banner" alt="BMI-Calculator Project" />
        </a>
      </div>

      <div class="portfolio-item">
        <a href="https://play.google.com/store/apps/details?id=com.salvadorchaos.destini_games">
          <img src={DestiniGames} className="item-banner" alt="Destini-Games Project" />
        </a>
      </div>

      <div class="portfolio-item">
        <a href="https://play.google.com/store/apps/details?id=com.salvadorchaos.quizzler">
          <img src={Quizzler} className="item-banner" alt="Quizzler Project" />
        </a>
      </div>

      <div class="portfolio-item">
        <a href="https://play.google.com/store/apps/details?id=com.salvadorchaos.xylophone_app">
          <img src={Xylophone} className="item-banner" alt="Xylophone Project" />
        </a>
      </div>

      <div class="portfolio-item">
        <a href="https://play.google.com/store/apps/details?id=com.salvadorchaos.magic_8_ball">
          <img src={Magic8Ball} className="item-banner" alt="Magic-8-Ball Project" />
        </a>
      </div>

      <div class="portfolio-item">
        <a href="https://play.google.com/store/apps/details?id=com.salvadorchaos.dice_e">
          <img src={DiceE} className="item-banner" alt="Dice-E Project" />
        </a>
      </div>

      <div class="portfolio-item">
        <a href="https://play.google.com/store/apps/details?id=com.salvadorchaos.business_card">
          <img src={MyDigitalBusinessCard} className="item-banner" alt="My-Digital-Business-Card Project" />
        </a>
      </div>
    </div>
  </div>
);

export default Portfolio;