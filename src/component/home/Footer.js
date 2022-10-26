import { ALL_CITIES } from "../../allCities";
import { useEffect, useState } from "react";
import './Footer.css'

function Footer(props) {
  const [projectlist, setprojectlist] = useState([]);
  const [localitylist, setLocalitylist] = useState([]);
  const [ProjectArrayLength, setProjectArrayLength] = useState(true);
  const [LocalityArrayLength, setLocalityArrayLength] = useState(true);
  const [homeFooter, setHomeFooter] = useState(false);



  return <footer className="footer">
    <div className="container">
      {/* Upper body of footer */}
      <div className="row mrg-bottom-15">
        <div className="col-sm-3 col-xs-12">
          <div className="footer-links" itemScope="" itemType="https://schema.org/SiteNavigationElement">
            <h3 className="link-heading">Company</h3>
            <a>
              <span itemProp="name">About Us</span></a>
            <a>
              <span itemProp="name">Careers</span></a>
            <a>
              <span itemProp="name">Privacy Policy</span></a>
            <a>
              <span itemProp="name">Terms &amp; Conditions</span></a>
            <a>
              <span itemProp="name">Attributions</span></a>
            <a>
              <span itemProp="name">Disclaimer</span></a>
          </div>
        </div>
        <div className="col-sm-3 col-xs-12">
          <div className="footer-links" itemScope="" itemType="https://schema.org/SiteNavigationElement">
            <h3 className="link-heading">Explore</h3>
            <a target="_blank">News &amp; Articles </a>
            <a target="_blank">Home Decor Ideas </a>
            <a target="_blank">
              <span itemProp="name">Virtual Tour</span></a>
            
            <a target="_blank">
              <span itemProp="name">Loan</span></a>
            <a>
              <span itemProp="name">FAQs</span></a>
          </div>
        </div>
        <div className="col-sm-3 col-xs-12" itemScope="" itemType="https://schema.org/Organization">
          <div className="footer-links contact-col">
            <h3 className="link-heading">Contact</h3>

            <a href="mailto:support@mybuild.com" className="visible-xs" title="support@mybuild.com" itemProp="email">
              <i className="icon-mail-o"></i> support@mybuild.com</a>
            <span href="mailto:support@mybuild.com" className="hidden-xs rb-contact" title="support@mybuild.com" itemProp="email">
              <i className="icon-mail-o"></i> support@mybuild.com</span>
            <a className="no-underline visible-xs ng-binding" href="tel:+91 80108 20000" title="mybuild contact" itemProp="contactOption"><i className="icon-phone"></i>
              {"+91 1234567890"}
            </a>
            <span className="no-underline hidden-xs rb-contact ng-binding" title="mybuild contact" href="tel:+91 80108 20000">
              <i className="icon-phone"></i>
              {"+91 1234567890"}
            </span>
          </div>
          <div className="footer-links contact-col">
            <h3 className="link-heading">Follow us on</h3>
            <div className="social-icon-block footer-links" itemScope="" itemType="http://schema.org/Organization">
              <a className="social-icon" itemProp="sameAs" target="_blank" rel="noopener noreferrer">
                <i className="icon-facebook"></i> </a>
              <a className="social-icon" itemProp="sameAs" target="_blank" rel="noopener noreferrer">
                <i className="icon-twitter"></i> </a>
              <a className="social-icon" itemProp="sameAs" target="_blank" rel="noopener noreferrer">
                <i className="icon-linkedin"></i> </a>
              <a>
                <i className="icon-pinterest"></i> </a>
              <a>
                <i className="icon-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-xs-12">
          <div className="footer-links">
            <h3 className="link-heading">Download the App</h3>
            <div className="app-download-block">
              <div className="mrg-bottom-15">
                <a className="footer-app" title="Download mybuild app from Google Playstore" target="_blank" rel="noopener noreferrer">
                  <div className="app-download-btn google box-shadow">
                    <span className="iconfooter"><i className="icon-google-play"></i></span>
                    <div className="content">
                      <div className="lbl">Get it on</div>
                      <div className="value">Google Play</div>
                    </div>
                  </div></a>
              </div>
              <div>
                <a className="footer-app" title="Download mybuild app from Itunes" target="_blank" rel="noopener noreferrer">
                  <div className="app-download-btn apple box-shadow"><span className="iconfooter"><i className="icon-apple"></i></span>
                    <div className="content">
                      <div className="lbl">Download on the</div>
                      <div className="value">App Store</div>
                    </div>
                  </div></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* links of cities */}
      {homeFooter &&
        <div className="seoLinks">

          {LocalityArrayLength &&
            <div className="topLocalities">
              <ul className="clearfix">
                {localitylist.map((locality, i) => {
                  return (
                    <li className="ng-scope" key={"locality" + i}>
                      <a href={`property-in-${locality.name.toLowerCase().replace(/\s/g, "-")}-${locality.cityName.toLowerCase().replace(/\s/g, "-")}`}>
                        <h2 className="ng-binding">{locality.name.toLowerCase()},&nbsp;{locality.cityName.toLowerCase()}</h2></a>
                    </li>
                  );
                })}
              </ul>
            </div>
          }
        </div>}
      {/* Cities links in footer */}
      <div className={homeFooter ? "footer-cities2 seo-links" : "footer-cities seo-links"}>
        <ul className="clearfix">
          {ALL_CITIES.map((allcity) => {
            return (
              <li className="ng-scope" key={allcity.id}>
                <a href={`property-in-${allcity.name.toLowerCase().replace(' ', '-')}`} title={allcity.name}>
                  <span className="ng-binding">Properties in {allcity.name}</span></a></li>
            )
          })}
        </ul>
      </div>
    </div>
    {/* Copyright start */}
    <div className="copyright">
      <div className="container">
        <div className="clearfix">
          <div className="pull-left">By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. </div>
          <div className="pull-right">&copy; 2017-22 Redbrics ITES India Pvt. Ltd.</div>
        </div>
      </div>
    </div>
  </footer>
}
export default Footer;