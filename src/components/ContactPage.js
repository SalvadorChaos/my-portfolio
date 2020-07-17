import React from 'react';
import {Helmet} from 'react-helmet';

const ContactPage = () => {

  if (!localStorage.getItem("reload")) {
    localStorage.setItem("reload", "true");
    window.location.reload();
  }
  else {
    localStorage.removeItem("reload");
  };

  return (
    <div className="contact-container">
      <Helmet>
        <title>Sal J's Portfolio | Contact Info</title>
        <meta
          name="description"
          content="Get in contact with, Freelance Web Developer, Salvador Martinez Jr aka @SalvadorChaos."
        />
      </Helmet>
      <div className="contact-div">
        <p className="question">Need an app or website?</p>
        <h1 className="contact-me">Contact Me</h1>
        <br />
        <p>
          You can reach me at <a href="mailto:salvadormartinez022693@gmail.com">
          <span className="email">
          salvadormartinez022693</span><span className="gmail">@gmail.com</span>
          </a>
        </p>
        <br />
        <p className="or">or through any of the following:</p>
      </div>

      <div className="networks-div">
        <div className="business">
          <div>
            <a class="link" href="mailto:salvadormartinez022693@gmail.com">
              <i class="fas fa-envelope" title="email"></i>
            </a>
          </div>

          <div>
            <a href="http://www.linkedin.com/in/salvador-martinez-123568186">
              <i class="social-icon fab fa-linkedin" title="linkedin"></i>
            </a>
          </div>

          <div>
            <a href="http://www.github.com/SalvadorChaos">
              <i class="social-icon fab fa-github" title="github"></i>
            </a>
          </div>
        </div>

        <div className="personal">
          <div>
            <a href="http://www.twitter.com/SalvadorChaos">
              <i class="social-icon fab fa-twitter" title="twitter"></i>
            </a>
          </div>

          <div>
            <a href="http://www.instagram.com/SalvadorChaos" className="margin">
              <i class="social-icon fab fa-instagram" title="instagram"></i>
            </a>
          </div>

          <div>
            <a href="http://www.facebook.com/SalvadorChaos" className="margin">
              <i class="social-icon fab fa-facebook-f" title="facebook"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="cv">
        <a href="https://salvadorchaos.github.io/cv/">My CV Site (Curriculum Vitæ)</a>
      </div>

      <div>
        <br />
        <h3>Send a Direct Message:</h3>
        <br /><br />
        <form id="contact-me">
          <input type="hidden" name="contact_number"/>
          <label>Your Name: </label>
          <input type="text" autocomplete="off" name="user_name" title="Provide your name." required/>
          <br /><br />
          <label>Your Email: </label>
          <input type="email" name="user_email" title="Provide your email." required/>
          <br /><br />
          <label>Your Message:</label>
          <br /><br />
          <textarea name="message" rows="10" cols="33" required></textarea>
          <br /><br />
          <input className="button" type="submit" value="Send"/>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
