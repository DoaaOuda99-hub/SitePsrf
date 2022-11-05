import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/community_events.json';
import { Helmet } from 'react-helmet-async';

const Portfolio1 = () => {
    const newData = data.map((data) => {
        return (
          <>
          <Helmet>
          <title>أنشطة و فعاليات الإتحاد الفلسطيني للشراع و التجديف</title>
          <meta name='description' content='أنشطة و فعاليات الإتحاد الفلسطيني للشراع و التجديف'></meta>
          <link rel='canonical' href='/portfolio1'></link>
        </Helmet>
            <div key ={data.id} class="col-lg-4 col-md-6">
            <div class="post_wrap style-2">
                  <div class="post_img">
                      <a href="#"><img src={data.image} alt="image"/></a>
                  </div>
                  <div class="post_info">
                  <div class="post_date"><a href="/blog-detail.html"><i class="fa fa-calendar"></i>{data.date}</a></div>
                     <h5><a href="./portfolio-detail.html?id={data.id}">{data.name}</a></h5>
                      <p>{data.title}</p>
                      <div class="post_categorys">
                          <Link to={`/PortfolioDetail1/${data.id}`}>تفاصيل الخبر</Link>
                      </div>
                  </div>
              </div>  
          </div>
          </>



        )
    })
  return (
    <div>
    <aside class="sigma_aside">
      <div class="sigma_close aside-trigger">
        <span></span>
        <span></span>
      </div>
      <div class="sigma_logo-wrapper">
              <Link class="sigma_logo" to="/">
                <img src="/assets/images/logo-1.png" alt="logo"/>
              </Link>
            </div>
         <ul class="navbar-nav">
              <li class="menu-item active">
                <Link to="/">الرئيسية</Link>
              </li>
              <li class="menu-item">
                <Link to="/about-us">من نحن</Link>
              </li>
              <li class="menu-item menu-item-has-children">
              <Link to="#">الأحداث و الفعاليات</Link>
                <ul class="sub-menu">
                  <li class="menu-item"><Link to="/portfolio">الفعاليات الرياضية</Link></li>
                  <li class="menu-item"><Link to="/portfolio1">الأحداث الإجتماعية</Link></li>
                </ul>
                
              </li>
              <li class="menu-item menu-item-has-children">
              <Link to="#">الإتحادات و الأكاديميات التابعة</Link>
                <ul class="sub-menu">
                  <li class="menu-item"><Link to="/champions">أكاديمية تشامبيون</Link></li>
                  <li class="menu-item"><Link to="/gaza-club">نادي غزة الرياضي</Link></li>
                  <li class="menu-item"><Link to="/deir-club">نادي شباب دير البلح</Link></li>
                  <li class="menu-item"><Link to="/rafah">نادي شباب رفح</Link></li>
                </ul>
              </li>
              <li class="menu-item">
                <Link to="/contact-us">تواصل</Link>
              </li>
            </ul>     
    </aside>
    <div class="sigma_aside-overlay aside-trigger"></div>
    
    <header class="sigma_header style-5 can-sticky">
      <div class="sigma_header-middle">
        <div class="container">
          <div class="navbar">
            <ul class="navbar-nav">
              <li class="menu-item active">
                <Link to="/">الرئيسية</Link>
              </li>
              <li class="menu-item">
                <Link to="/about-us">من نحن</Link>
              </li>
              <li class="menu-item menu-item-has-children">
                <ul class="sub-menu">
                  <li class="menu-item"><Link to="/portfolio">الفعاليات الرياضية</Link></li>
                  <li class="menu-item"><Link to="/portfolio1">الأحداث الإجتماعية</Link></li>
                </ul>
                <Link to="#">الأحداث و الفعاليات</Link>
              </li>
              <li class="menu-item menu-item-has-children">
                <ul class="sub-menu">
                  <li class="menu-item"><Link to="/champions">أكاديمية تشامبيون</Link></li>
                  <li class="menu-item"><Link to="/gaza-club">نادي غزة الرياضي</Link></li>
                  <li class="menu-item"><Link to="/deir-club">نادي شباب دير البلح</Link></li>
                  <li class="menu-item"><Link to="/rafah">نادي شباب رفح</Link></li>
                </ul>
                <Link to="#">الإتحادات و الأكاديميات التابعة</Link>
              </li>
              <li class="menu-item">
                <Link to="/contact-us">تواصل</Link>
              </li>
            </ul>
              <div class="sigma_logo-wrapper">
              <Link class="sigma_logo" to="/">
                <img class="logo-img" src="/assets/images/logo-1.png" alt="logo"/>
              </Link>
            </div>
            <div class="sigma_header-controls">
              <ul class="sigma_header-controls-inner">
                <li class="aside-toggle aside-trigger-right desktop-toggler">
                  <span></span>
                  <span></span>
                  <span></span>
                </li>
                
                <li class="aside-toggle aside-trigger">
                  <span></span>
                  <span></span>
                  <span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>

{/* <!-- Subheader --> */}
<div id="inner_header" data-parallax="scroll" data-image-src="/assets/images/زيارة\ صحفي\ كندي\ مايو\ 2022/7.jpg">
<div class="container">
  <div class="inner_intro">
  <h1>نشاطاتنا</h1>
      
  </div>
</div>
</div>
{/* <!-- /Subheader -->

<!-- Portfolio --> */}
<div class="section-padding">
<div class="container">
<div class="section-header text-center">
  <h5>الأحداث الرياضية</h5>
  <div class="heading_arrow">
      <span class="dots_div"></span> 
      <span class="s"></span> 
      <span class="dots_div"></span> 
  </div>
</div>
<div class="row" id="output1">
    {newData}

      {/* <!-- **************************content**************************** --> */}
</div>
</div>
{/* <!-- /Portfolio -->

<!-- Sponsors --> */}
<div class="sponsors section-padding">
<a href="https://www.facebook.com/Jawwal.059" target='_blank'><img src="/assets/images/sponsors/jawwal (2).png" alt="image"/></a>
<a href="https://european-union.europa.eu/index_en" target='_blank'><img src="/assets/images/sponsors/Flag_of_Europe.svg" alt="image"/></a>
<a href="https://www.facebook.com/BankofPalestine" target='_blank'><img src="/assets/images/sponsors/bank.png" alt="image"/></a>
</div>
{/* <!-- /Sponsors -->

<!-- Footer --> */}
<footer class="sigma_footer style-2 section-padding pb-0">
      <div class="container">
          <div class="sigma_footer-top">
            <div class="footer-item">
              <ul class="sigma_footer-links">
                <li>
                  <Link to="/contact-us">تواصل معنا</Link>
                </li>
                <li>
                  <Link to="/about-us">من نحن</Link>
                </li>
                <li>
                  <Link to="/">الصفحة الرئيسية</Link>
                </li>
              </ul>
            </div>
            <div class="sigma_footer-logo">
              <img class="logo-img" src="/assets/images/logo-1.png" alt="logo"/>
            </div>
            <div class="follow_us m-0">
                      <ul>
                          <li><a target='_blank' href="https://www.facebook.com/PSRF2021"><i class="fa fa-facebook"></i></a></li>
                            <li><a target='_blank'  href="https://www.instagram.com/psrf2021/"><i class="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>


          </div>
          <div class="sigma_footer-bottom">
            <div class="sigma_footer-copyright">
              <p class="mb-0"> Copyright © Website 
                <Link to="#">2022</Link>
              </p>
            </div>
          </div>
      </div>
</footer>
{/* <!-- /Footer -->

<!-- Sidebar-Nav --> */}
<div id="sidebar_nav" class="slide_menu">
      <div class="sidebar_logo">
          <img src="/assets/images/logo.png" alt="image"/>
      </div>    
      <div class="sidebar_widget popular_widget">
                      <div class="widget_title">
                          <h4>Feeds</h4>
                      </div>
                      <ul>
                          <li>
                              <div class="post_thumb">
                                  <a href="blog-detail.html"><img src="/assets/images/80x60.jpg" alt="image"/></a>
                              </div>
                              <h6><a href="blog-detail.html">Alonso Kelina Falao Asiano Pero</a></h6>
                              <p><i class="fa fa-clock-o"></i> 6 Hours ago</p>
                          </li>
                          <li>
                              <div class="post_thumb">
                                  <a href="blog-detail.html"><img src="/assets/images/80x60.jpg" alt="image"/></a>
                              </div>
                              <h6><a href="blog-detail.html">It is a long established fact that a reader</a></h6>
                              <p><i class="fa fa-clock-o"></i> 6 Hours ago</p>
                          </li>
                          <li>
                              <div class="post_thumb">
                                  <a href="blog-detail.html"><img src="/assets/images/80x60.jpg" alt="image"/></a>
                              </div>
                              <h6><a href="blog-detail.html">Many desktop publish packages and web</a></h6>
                              <p><i class="fa fa-clock-o"></i> 6 Hours ago</p>
                          </li>
                      </ul>
      </div>
      <div class="sidebar_widget instagram_widget">
                      <div class="widget_title">
                          <h4>Instagram</h4>
                      </div>
                      <ul>
                          <li><a href="#"><img src="/assets/images/200x140.jpg" alt="image"/></a></li>
                          <li><a href="#"><img src="/assets/images/200x140.jpg" alt="image"/></a></li>
                          <li><a href="#"><img src="/assets/images/200x140.jpg" alt="image"/></a></li>
                          <li><a href="#"><img src="/assets/images/200x140.jpg" alt="image"/></a></li>
                          <li><a href="#"><img src="/assets/images/200x140.jpg" alt="image"/></a></li>
                          <li><a href="#"><img src="/assets/images/200x140.jpg" alt="image"/></a></li>
                      </ul>
      </div>
</div>
<div id="overlay_bg"></div>
    </div>
    </div>
  )
}

export default Portfolio1;