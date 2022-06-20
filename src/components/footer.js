import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Container from './container'

const Footer = () => (
  <Container as="footer">
    <div class="contain">
      <div class="footerNavigation">
          <div class="signup" id="signup">
            <div id="mc_embed_signup">
              <a href="/"><h6>Grease Garage</h6></a>
              <p>Join our newsletter and stay tuned with the newest news.</p>
              <form class="validate">
                <div id="mc_embed_signup_scroll">
                  <input type="email" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Enter your email" required />
                  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe"  />
                </div>
              </form>
            </div>
            <div className="links">
              <div className="link linkOne">
                <a href="/">Home</a>
                <a href="/service">Services</a>
                <a href="/parts">Parts</a>
                <a href="/contact">Contact</a>
                <a href="/login">login</a>
              </div>
              <div className="social">
                <a href="https://www.facebook.com/"><FaFacebookF/></a>
                <a href="https://www.instagram.com/"><FaInstagram/></a>
                <a href="https://twitter.com/"><FaTwitter/></a>
              </div>
            </div>
          </div>
      </div>
      <div class="copyright">
          <p>&copy; Copyright 2022 Grease Garage - All rights reserved.</p>
          <ul>
              <li><a href="/terms">Terms and conditions</a></li>
              <li><a href="/privacy">Privacy</a></li>
          </ul>
      </div>
    </div>
  </Container>
)

export default Footer
