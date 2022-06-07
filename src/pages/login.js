import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout'

const RootIndex = () => {
    return (
        <Layout>
            <div className="container">
                <div class="contact-box">
                    <div class="left"></div>
                    <div class="right">
                        <h2 className='login-h2'>Admin Login</h2>
                        <input type="text" class="field" placeholder="Email"/>
                        <input type="password" class="field" placeholder="Password"/>
                        <button class="btn">Log In</button>
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