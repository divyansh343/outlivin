import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">dyList</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/stocks">Stocks</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="/" tabindex="-1" aria-disabled="true">Disabled</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      {/* <header className="site-header sticky-top py-1">
        <nav className="container d-flex flex-column flex-md-row justify-content-between navbar sticky-top">
          <Link className="py-2" to="/" aria-label="Product">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="d-block mx-auto" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10" /><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" /></svg>
          </Link>
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          <Link className="nav-link active" aria-current="page" to="/stocks">Stocks</Link>
          <Link className="py-2 d-none d-md-inline-block" to="/">Product</Link>
          <Link className="py-2 d-none d-md-inline-block" to="/">Features</Link>
          <Link className="py-2 d-none d-md-inline-block" to="/">Enterprise</Link>
          <Link className="py-2 d-none d-md-inline-block" to="/">Support</Link>
          <Link className="py-2 d-none d-md-inline-block" to="/">Pricing</Link>
          <Link className="py-2 d-none d-md-inline-block" to="/">Cart</Link>
        </nav>
      </header> */}

    </>
  )
}

export default Header