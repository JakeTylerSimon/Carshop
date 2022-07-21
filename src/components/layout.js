import React from "react"
import "./global.scss"
import './variables.css'
import '../index.css'

      import Navigation from './navigation'
      import Footer from './footer'
      class Template extends React.Component {
        render() {
          const { children } = this.props
      
          return (
            <>
              <Navigation />
              <main>{children}</main>
              <Footer />
            </>
          )
        }
      }
      
      export default Template