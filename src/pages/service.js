import React, { useRef } from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { FaTools } from "react-icons/fa"
import { Booking } from "../components/booking"

const RootIndex = () => {
  const content = useRef(null)

  return (
    <Layout>
      <Helmet>
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js-na1.hs-scripts.com/21995803.js"
        ></script>
      </Helmet>
      <div class="darkCenteredCallout">
        <div class="contain">
          <h2>Enjoy a better driving experience today!</h2>
          <p>
            You don't even need to create an account, just contact us or set up
            an appointment to get your car serviced.
          </p>
          <Booking />
        </div>
      </div>
      <div class="featureCallout">
        <div class="features">
          <div class="feature">
            <FaTools />
            <h3>Oil Change</h3>
            <p>
              If you change your oil regularly your car will have proper
              lubrication that reduces the amount of heat produced by the
              engine. Oil changes also get rid of dirt and debris, which makes
              your engine run slower. If your engine heats up because of old
              oil, it will wear down and eventually stop working properly.
            </p>
            <img
              className="serviceImg"
              src="https://media.ed.edmunds-media.com/non-make/howto/howto_12141111_600.jpg"
              alt="oil change"
            />
          </div>
          <div class="feature">
            <FaTools />
            <h3>Wheel Alignment</h3>
            <p>
              The goal of an alignment is to re-optimize the angles of your
              wheels to each other, and to the road. This is done because a
              misaligned vehicle affects the way your vehicle drives, affects
              the stress on larger vehicle components such as your suspension,
              affects tire wear, and affects gas mileage.
            </p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/84/Wheel_alignment_on_a_Ford_Focus_1.jpg"
              alt=""
              className="serviceImg"
            />
          </div>
          <div class="feature">
            <FaTools />
            <h3>Body Repair</h3>
            <p>
              The first thing that is considered again is the cost to repair or
              replace each part. Body work is like sculpting and requires great
              skill and repairing a body part on a car can usually be done no
              matter how bad the damage is. However, the hourly rate to do a
              repair may be more than the part to be replaced.
            </p>
            <img
              src="https://www.cccollision.net/wp-content/uploads/2021/01/bigstock-Car-Service-Worker-Examining-V-354492014.jpg"
              alt=""
              className="serviceImg"
            />
          </div>
          <div class="feature">
            <FaTools />
            <h3>Fresh Paint Job</h3>
            <p>
              A quality paint job not only makes your car look like new but also
              protects it against common damages that can destroy your car's
              lush finish with time. UV-protected paint that doesn't peel or
              bubble is ideal for protecting your car against the sun.
            </p>
            <img
              src="https://cfx-wp-images.imgix.net/2020/10/GettyImages-178122792-scaled.jpg?auto=compress%2Cformat&ixlib=php-3.3.0&s=7122bd9ad9a191c3a20767addd819419"
              alt=""
              className="serviceImg imgService"
            />
          </div>
        </div>
      </div>
      <div className="centeredCallout">
          <h2>Why To Service Your Car</h2>
        <iframe className="video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BGSYTWR-klc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </Layout>
  )
}

export default RootIndex
