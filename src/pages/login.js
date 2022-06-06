import React from 'react';
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
        </Layout>
    );
  }
  export default RootIndex