import React, { useRef } from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet';
import Tools from '../images/tools.png'
import { FaTools } from "react-icons/fa";
import { Booking } from '../components/booking';

const RootIndex = () => {

  const content = useRef(null);

    return (
      <Layout >
      <Helmet>
        <title>Grease Garage</title>
        <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/21995803.js"></script>
      </Helmet>
        <div class="wrapper">
            <div class="hero">
                <h1>Grease Garage</h1>
                <p>The best car shop around</p>
            </div>
        </div>
      
        <div class="centeredCallout">
          <div class="contain">
            <h2>About Grease Garage</h2>
            <p>Here at Grease garage we value commitment, friendly helpfulness and extreme care we put into our customers and their vehicles. We specialize on domestic made vehicles and we guarentee to get the car looking and running brand new like it was coming right off the lot. </p>
            <img src={Tools} alt="" />
          </div>
        </div>
        <div class="featureCallout">
            <div class="features">
                <div class="feature">
                    <FaTools/>
                    <h3>Oil Change</h3>
                    <p>If you change your oil regularly your car will have proper lubrication that reduces the amount of heat produced by the engine. Oil changes also get rid of dirt and debris, which makes your engine run slower. If your engine heats up because of old oil, it will wear down and eventually stop working properly.</p>
                </div>
                <div class="feature">
                    <FaTools/>
                    <h3>Wheel Alignment</h3>
                    <p>The goal of an alignment is to re-optimize the angles of your wheels to each other, and to the road. This is done because a misaligned vehicle affects the way your vehicle drives, affects the stress on larger vehicle components such as your suspension, affects tire wear, and affects gas mileage.</p>
                </div>
                <div class="feature">
                    <FaTools/>
                    <h3>Body Repair</h3>
                    <p>The first thing that is considered again is the cost to repair or replace each part. Body work is like sculpting and requires great skill and repairing a body part on a car can usually be done no matter how bad the damage is. However, the hourly rate to do a repair may be more than the part to be replaced.</p>
                </div>
                <div class="feature">
                    <FaTools/>
                    <h3>Fresh Paint Job</h3>
                    <p>A quality paint job not only makes your car look like new but also protects it against common damages that can destroy your car's lush finish with time. UV-protected paint that doesn't peel or bubble is ideal for protecting your car against the sun.</p>
                </div>
            </div>
        </div>
        <div class="darkCenteredCallout">
          <div class="contain">
            <h2>Enjoy a better driving experience today!</h2>
            <p>You don't even need to create an account, just contact us or set up an appointment to get your car serviced.</p>
            <Booking/>
            </div>
        </div>
      </Layout>
    )
}

export default RootIndex
