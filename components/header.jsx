import React from 'react'
import Image from 'next/image'
import styles from '../styles/header.module.css'
import logoLight from '../public/images/logo/logo-light.png'

 const header = () => {
  return (
    <>
    <header className={`${styles["header"]} ${styles["header-transparent"]}`}>
          <nav className={`${styles["navbar"]} ${styles["navbar-expand-lg"]} ${styles["sticky-navbar"]}`}>
        <div className={`${styles["container"]}`}>

          <a className={`${styles["navbar-brand"]}`} href="index.html">
            {logoLight}
            <img src="assets/images/logo/logo-dark.png" className="logo-dark" alt="logo"/>
          </a>
          <button className="navbar-toggler" type="button">
            <span className="menu-lines"><span></span></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNavigation">
            <ul className="navbar-nav ml-auto">
              <li className="nav__item  has-dropdown">
                <a href="index.html" data-toggle="dropdown" className="dropdown-toggle nav__item-link active">Home</a>
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <a href="index.html" className="nav__item-link">Home Main</a>
                  </li>

                 {/* <!-- /.nav-item -->  */}
                  <li className="nav__item">
                    <a href="home-modern.html" className="nav__item-link">Home Modern</a>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <a href="home-classNameic.html" className="nav__item-link">Home ClassnclassNameic</a>
                  </li>
                  {/* <!-- /.nav-item --> */}
                </ul>
                {/* <!-- /.dropdown-menu --> */}
              </li>
              {/* <!-- /.nav-item --> */}
              <li className="nav__item  has-dropdown">
                <a href="#" data-toggle="dropdown" className="dropdown-toggle nav__item-link">Company</a>
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <a href="about-us.html" className="nav__item-link">About Us</a>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <a href="why-us.html" className="nav__item-link">Why Choose Us</a>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <a href="leadership-team.html" className="nav__item-link">Leadership Team</a>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <a href="awards.html" className="nav__item-link">Award & Recognition</a>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <a href="pricing.html" className="nav__item-link">Pricing & Plans</a>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <a href="faqs.html" className="nav__item-link">Help & FAQs</a>
                  </li> 
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <a href="careers.html" className="nav__item-link">Careers</a>
                  </li>
                  {/* <!-- /.nav-item --> */}
                </ul>
                {/* <!-- /.dropdown-menu --> */}
              </li>
              {/* <!-- /.nav-item --> */}
              <li className="nav__item  has-dropdown">
                <a href="#" data-toggle="dropdown" className="dropdown-toggle nav__item-link">IT Solutions</a>
                <ul className="dropdown-menu wide-dropdown-menu">
                  <li className="nav__item">
                    <div className="row mx-0">
                      <div className="col-sm-6 dropdown-menu-col">
                        <a href="it-solutions.html" className="nav__item-link dropdown-menu-title">IT Solutions</a>
                        <ul className="nav flex-column">
                          <li className="nav__item"><a className="nav__item-link" href="it-solutions-single.html">IT
                              Management</a>
                          </li> 
                          {/* <!-- /.nav-item --> */}
                          <li className="nav__item"><a className="nav__item-link" href="it-solutions-single.html">Cyber
                              Security</a>
                          </li> 
                          {/* <!-- /.nav-item --> */}
                          <li className="nav__item"><a className="nav__item-link" href="it-solutions-single.html">Cloud
                              Computing</a>
                          </li> 
                          {/* <!-- /.nav-item --> */}
                          <li className="nav__item"><a className="nav__item-link" href="it-solutions-single.html">IT
                              Consulting</a>
                          </li> 
                          {/* <!-- /.nav-item --> */}
                          <li className="nav__item"><a className="nav__item-link" href="it-solutions-single.html">Software
                              Dev</a>
                          </li> 
                          {/* <!-- /.nav-item --> */}
                          <li className="nav__item"><a className="nav__item-link" href="it-solutions-single.html">IT Support</a>
                          </li>
                          
                          {/* <!-- /.nav-item --> */}
                        </ul>
                      </div>
                      {/* <!-- /.col-sm-6 --> */}
                      <div className="col-sm-6 dropdown-menu-col">
                        <a href="industries.html" className="nav__item-link dropdown-menu-title">Industries</a>
                        <ul className="nav flex-column">
                          <li className="nav__item"><a className="nav__item-link"
                              href="industries-single-industry.html">Education,
                              Non-Profit</a></li> 
                              {/* <!-- /.nav-item --> */}
                          <li className="nav__item"><a className="nav__item-link"
                              href="industries-single-industry.html">Accounting,
                              Finance</a></li> 
                              {/* <!-- /.nav-item --> */}
                          <li className="nav__item"><a className="nav__item-link"
                              href="industries-single-industry.html">Government &
                              Public</a></li> 
                              {/* <!-- /.nav-item --> */}
                          <li className="nav__item"><a className="nav__item-link" href="industries-single-industry.html">Energy
                              &
                              Utilities</a></li> 
                              {/* <!-- /.nav-item --> */}
                          <li className="nav__item"><a className="nav__item-link" href="industries-single-industry.html">Legal,
                              Law
                              Firms</a></li> 
                              {/* <!-- /.nav-item --> */}
                          <li className="nav__item"><a className="nav__item-link"
                              href="industries-single-industry.html">Manufacturing</a>
                          </li>
                          
                          {/* <!-- /.nav-item --> */}
                        </ul>
                      </div>
                      {/* <!-- /.col-sm-6 --> */}
                    </div>
                    {/* <!-- /.row --> */}
                  </li>
                  {/* <!-- /.nav-item --> */}
                </ul>
                {/* <!-- /.dropdown-menu --> */}
              </li>
              {/* <!-- /.nav-item --> */}
              <li className="nav__item  has-dropdown">
                <a href="#" data-toggle="dropdown" className="dropdown-toggle nav__item-link">News&Media</a>
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <a href="blog.html" className="nav__item-link">Our Blog</a>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <a href="blog-single-post.html" className="nav__item-link">Single Blog Post</a>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <a href="case-studies-grid.html" className="nav__item-link">Case Studies Grid</a>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <a href="case-studies-carousel.html" className="nav__item-link">Case Studies Carousel</a>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <a href="case-studies-classNameic.html" className="nav__item-link">Case Studies ClassnclassNameic</a>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <a href="case-studies-single.html" className="nav__item-link">Single Case Study</a>
                  </li>
                  {/* <!-- /.nav-item --> */}
                </ul>
                {/* <!-- /.dropdown-menu --> */}
              </li>
              {/* <!-- /.nav-item --> */}
              <li className="nav__item  has-dropdown">
                <a href="#" data-toggle="dropdown" className="dropdown-toggle nav__item-link">Features</a>
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <a href="coming-soon.html" className="nav__item-link">Coming Soon</a>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <a href="404.html" className="nav__item-link">404 Page</a>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <a href="#" className="nav__item-link  open-register-popup">Register</a>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <a href="#" className="nav__item-link  open-login-popup">Login</a>
                  </li>
                  {/* <!-- /.nav-item --> */}
                </ul>
                {/* <!-- /.dropdown-menu --> */}
              </li>
              {/* <!-- /.nav-item --> */}
              <li className="nav__item">
                <a href="contact-us.html" className="nav__item-link">Contacts</a>
              </li>
              {/* <!-- /.nav-item --> */}
            </ul>
            {/* <!-- /.navbar-nav --> */}
          </div>
          {/* <!-- /.navbar-collapse --> */}
          <ul className="navbar-actions list-unstyled mb-0 d-flex align-items-center">
            <li className="d-none d-xl-block">
              <a href="request-quote.html" className="btn action__btn-contact">Request A Quote</a>
            </li>
            <li>
              <button className="action__btn action__btn-login open-login-popup">
                <i className="icon-user"></i><span>Login</span>
              </button>
            </li>
          </ul>
          {/* <!-- /.navbar-actions --> */}
        </div>
        {/* <!-- /.container --> */}
      </nav>
      {/* <!-- /.navabr --></div> */} 
      </header>   
    </>
  )
}
export default header;