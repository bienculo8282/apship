import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer><div className="overlay">
      <div className="mg-footer-bottom-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="site-branding-text">
                <p className="site-title-footer">
                  <a href="https://apship.vn/" rel="home">Daily Express</a>
                </p>
                <p className="site-description-footer">Read the best everyday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mg-footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-xs">
              <p>
                <a href="https://wordpress.org/">Proudly powered by WordPress</a>
                <span className="sep"> | </span> Theme: Newses by <a href="https://apship.vn/" rel="designer">Themeansar</a>.
              </p>
            </div>
            <div className="col-md-6 text-right footer-menu text-xs">
              <ul className="info-right">
                <li className="nav-item menu-item active">
                  <a className="nav-link " href="https://apship.vn/" title="Home">Home</a>
                </li>
                <li className="nav-item menu-item page_item dropdown page-item-49">
                  <a className="nav-link" href="https://apship.vn/ccpa-california-consumer-privacy-act/">CCPA – California Consumer Privacy Act</a>
                </li>
                <li className="nav-item menu-item page_item dropdown page-item-46">
                  <a className="nav-link" href="https://apship.vn/dmca/">DMCA</a>
                </li>
                <li className="nav-item menu-item page_item dropdown page-item-39">
                  <a className="nav-link" href="https://apship.vn/privacy-policy/">Privacy Policy</a>
                </li>
                <li className="nav-item menu-item page_item dropdown page-item-43">
                  <a className="nav-link" href="https://apship.vn/terms-of-use/">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>)
}
