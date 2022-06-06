import React from 'react';
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
        </Layout>
    );
  }
  export default RootIndex