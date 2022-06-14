import React, { useRef } from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet';
import Tools from '../images/tools.png'
import { FaTools } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import { AiFillFormatPainter } from "react-icons/ai";
import { AiOutlineCar } from "react-icons/ai";

const RootIndex = () => {

  const content = useRef(null);

    return (
      <Layout >
      <Helmet>
        <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/21995803.js"></script>
      </Helmet>
        <div class="wrapper">
            <div class="hero">
                <h1>Grease Garage</h1>
                <p>The best car service shop around</p>
            </div>
        </div>
      
        <div class="centeredCallout">
          <div class="contain">
            <h2>About Grease Garage</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
                    <BsTools/>
                    <h3>Wheel Alignment</h3>
                    <p>The goal of an alignment is to re-optimize the angles of your wheels to each other, and to the road. This is done because a misaligned vehicle affects the way your vehicle drives, affects the stress on larger vehicle components such as your suspension, affects tire wear, and affects gas mileage.</p>
                </div>
                <div class="feature">
                    <AiOutlineCar/>
                    <h3>Body Repair</h3>
                    <p>The first thing that is considered again is the cost to repair or replace each part. Body work is like sculpting and requires great skill and repairing a body part on a car can usually be done no matter how bad the damage is. However, the hourly rate to do a repair may be more than the part to be replaced.</p>
                </div>
                <div class="feature">
                    <AiFillFormatPainter/>
                    <h3>Fresh Paint Job</h3>
                    <p>A quality paint job not only makes your car look like new but also protects it against common damages that can destroy your car's lush finish with time. UV-protected paint that doesn't peel or bubble is ideal for protecting your car against the sun.</p>
                </div>
            </div>
        </div>
        <div class="darkCenteredCallout">
          <div class="contain">
            <h2>Enjoy a better driving experience today!</h2>
            <p>You don't even need to create an account, just contact us or set up an appointment to get your car serviced.</p>
            {/* put calnder here */}
            </div>
        </div>
      </Layout>
    )
}

export default RootIndex
