import Link from 'next/link'

export default function Header() {
  return (
    <div className="mg-nav-widget-area-back" style={{ backgroundImage: "url('https://hemdohoa.com/wp-content/themes/newses/images/head-back.jpg');" }}>
      <div className="overlay">
        <div className="inner" style={{ backgroundColor: "rgba(18,16,38,0.4)" }}>
          <div className="container">
            <div className="mg-nav-widget-area">
              <div className="row align-items-center">
                <div className="col-md-4 text-center-xs">
                  <span className="navbar-brand">
                    <img width="80" height="80" src="https://i0.wp.com/hemdohoa.com/wp-content/uploads/Asset-2.png?fit=80%2C80&amp;ssl=1" className="custom-logo" alt="" decoding="async" />
                  </span>
                  <div className="site-branding-text">
                    <h1 className="site-title"><a href="https://hemdohoa.com/" rel="home">apship.vn</a></h1>
                    <p className="site-description" style={{ color: "white" }}>Read the best everyday</p>
                  </div>
                </div>
                <div className="col-md-8 text-center-xs">
                  <div className="mg-tpt-tag-area">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
