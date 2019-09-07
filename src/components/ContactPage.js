import React from 'react';

const ContactPage = () => (
  <div className="contact-container">
    <div className="contact-div">
      <h1>Contact Me</h1>
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

    <div>
      <br />
      <h3>Send a Direct Message:</h3>
      <br /><br />
      <form action="mailto:salvadormartinez022693@gmail.com" method="post" encType="text/plain" >
        <label>Your Name: </label>
        <input type="text" name="Name" title="Provide your name." required/>
        <br /><br />
        <label>Your Email: </label>
        <input type="email" name="Email" title="Provide your email." required/>
        <br /><br />
        <label>Your Message:</label>
        <br /><br />
        <textarea name="Message" rows="10" cols="33" required></textarea>
        <br /><br />
        <input className="button" type="submit" value="Send"/>
      </form>
    </div> 
  </div>
);

export default ContactPage;