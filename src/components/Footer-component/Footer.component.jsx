import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer class="container py-5">
    <div class="row">
      <div class="col-12 col-md">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mb-2" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
        <small class="d-block mb-3 text-muted">&copy; 2017–2021</small>
      </div>
      
      <div class="col-6 col-md">
        <h5>Resources</h5>
        <ul class="list-unstyled text-small">
          <li><Link class="link-secondary" to="/">Business</Link></li>
          <li><Link class="link-secondary" to="/">Education</Link></li>
          <li><Link class="link-secondary" to="/">Government</Link></li>
          <li><Link class="link-secondary" to="/">Gaming</Link></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>About</h5>
        <ul class="list-unstyled text-small">
          <li><Link class="link-secondary" to="/about">Outlivin</Link></li>
          <li><Link class="link-secondary" to="/">Locations</Link></li>
          <li><Link class="link-secondary" to="/">Privacy</Link></li>
          <li><Link class="link-secondary" to="/">Terms</Link></li>
        </ul>
      </div>
    </div>
  </footer>
  )
}

export default Footer