import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout'

const RootIndex = () => {
    return (
        <Layout>

        <div className="containery">
            <div class="contact-boxy">
                <div class="lefty"></div>
                <div class="righty">
                    <h2>Contact Us</h2>
                    <input type="text" class="field" placeholder="Your Name"/>
                    <input type="text" class="field" placeholder="Your Email"/>
                    <input type="text" class="field" placeholder="Phone"/>
                    <textarea placeholder="Message" class="field"></textarea>
                    <button class="btn">Send</button>
                </div>
            </div>
        </div>
        <Helmet>
        <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/21995803.js"></script>
      </Helmet>
        </Layout>
    );
  }
  export default RootIndex