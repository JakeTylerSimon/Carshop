import React, { useRef } from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet';
import Tools from '../images/tools.png'

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
                    <img src="/images/DriveyLinks.png" />
                    <h3>DRVY Shortcuts</h3>
                    <h4>ORGANIZE FILES, FOLDERS, AND WEB LINKS ACROSS ANY CLOUD DRIVE</h4>
                    <p>Organizing files shared with you in one drive provider is annoying enough, but across multiple clouds?! Forget it. With new .drvy links you can finally organize your content across any drive, no matter what cloud storage provider. You can even add web links to keep non-files organized together.</p>
                </div>
                <div class="feature">
                <img src="/images/Multi-DriveSearch.png" />
                    <h3>Multi-drive search</h3>
                    <h4>FIND FILES FASTER WITH FILTERABLE, CROSS-CLOUD SEARCH</h4>
                    <p>Move your files from OneDrive to Google Drive, or Google Drive to Dropbox, or Dropbox to OneDrive. With our intuitive interface, you can easily organize all of your files no matter the provider.</p>
                </div>
                <div class="feature">
                <img src="/images/Multi-DriveTransfer.png" />
                    <h3>Cross-drive Transfer </h3>
                    <h4>TRANSFER FILES AND FOLDERS TO ANY DRIVE WITH EASE</h4>
                    <p>Drivey's search allows you to search across any attached drive from Google Drive, OneDrive, Dropbox personal, or Dropbox business. Advanced filters help you to find the files you need faster.</p>
                </div>
                <div class="feature">
                <img src="/images/EncryptAndBackup.png" />
                    <h3>Encrypt & Backup</h3>
                    <h4>KEEP SENSITIVE INFORMATION SECURE AND BACKED UP</h4>
                    <p>Drivey provides advanced security features like 256 bit encryption, and off-site cold storage backups to give you added piece of mind about the security of your cloud storage files.</p>
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
