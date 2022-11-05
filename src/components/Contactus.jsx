import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Contactus = () => {
  return (
    <div>
        <Helmet>
          <title>تواصل مع الإتحاد الفلسطيني للشراع و التجديف</title>
          <meta name='description' content=' تواصل مع الإتحاد الفلسطيني للشراع و التجديف مع أكاديمية تشامبيون'></meta>
          <link rel='canonical' href='/contact-us'></link>
        </Helmet>
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
                <img class="logo-img" src="assets/images/logo-1.png" alt="logo"/>
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
{/* <!-- Intro -->  */}
<div class="contact">
<div class="container">
<div class="intro_text text-center">
    <h1 class="mb-5">إتصل بنا</h1>
              {/* <!-- <a class="popup-youtube sigma_video-btn" href="https://www.youtube.com/watch?v=ySITvuQ1K74"><i class="fa fa-play"></i></a> --> */}
            </div>      
          </div>
  </div>
{/* <!-- /Intro -->
<!-- Contact-Us --> */}
<div>
<div class="container">
<div class="section-header text-center">
    {/* <!-- <h5>ابقى على تواصل</h5> --> */}
    <div class="heading_arrow">
          <span class="dots_div"></span> 
          <span class="s"></span> 
          <span class="dots_div"></span> 
      </div>
    <h2>اتصل بنا</h2>
  </div>
<div class="contact_wp box_wp">
    <div class="row">
    <div class="col-md-4">
            <div class="contact_info secondary-bg">
                <div class="box_heading white_text">
                    <h4>اتصل الآن</h4>
                      <div class="heading_arrow">
                        <span class="dots_div"></span> 
                          <span class="s"></span> 
                          <span class="dots_div"></span> 
                      </div>
                  </div>
                  <ul>
                    <li>
                        <h6>عنوان الموقع</h6>
                          <p>فلسطين ، غزة / الشيخ عجلين ، نقطة الساحل / الكورنيش السفلي</p>
                      </li>
                      <li>
                        <h6>رقم التواصل</h6>
                          <p>+972 567772077</p>
                      </li>
                      <li>
                        <h6>عنوان البريد</h6>
                          <p>Psrf@poc.ps</p>
                      </li>
                  </ul>

              </div>
          </div>
      <div class="col-md-8">
        <div class="form_wrap">
            <div class="box_heading">
                <h4>ابقى على تواصل</h4>
                  <div class="heading_arrow">
                    <span class="dots_div"></span> 
                      <span class="s"></span> 
                      <span class="dots_div"></span> 
                  </div>
              </div>
              <form class="mf_form_validate ajax_submit" action="https://slidesigma.com/themes/html/kanety/sendmail.php" method="post" enctype="multipart/form-data">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                          <input type="text" placeholder="الإسم الأول" class="form-control" name="fullname"/>
                          </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <input type="text" placeholder="الإسم الأخير" class="form-control" name="lastname"/>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                          <input type="email" placeholder="عنوان البريد" class="form-control" name="email"/>
                          </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <input type="text" placeholder="الموضوع" class="form-control" name="subject"/>
                          </div>
                      </div>
                  </div>
                  <div class="form-group">
                    <textarea class="form-control" rows="3" placeholder="أدحل الرسالة"name="message"></textarea>
                  </div>
                  <div class="text-center">
                      <button type="submit" class="btn">أرسل</button>
                       <div class="server_response w-100"></div>
                  </div>
              </form>
          </div>	
      </div>


      </div>
  </div>
</div>

</div>
{/* <!-- /Contact-Us -->

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
              <img class="logo-img" src="assets/images/logo-1.png" alt="logo"/>
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
          <img src="assets/images/logo-1.png" alt="image"/>
      </div>    
      <div class="sidebar_widget popular_widget">
                      <div class="widget_title">
                          <h4>Feeds</h4>
                      </div>
                      <ul>
                          <li>
                              <div class="post_thumb">
                                  <a href="blog-detail.html"><img src="assets/images/80x60.jpg" alt="image"/></a>
                              </div>
                              <h6><a href="blog-detail.html">Alonso Kelina Falao Asiano Pero</a></h6>
                              <p><i class="fa fa-clock-o"></i> 6 Hours ago</p>
                          </li>
                          <li>
                              <div class="post_thumb">
                                  <a href="blog-detail.html"><img src="assets/images/80x60.jpg" alt="image"/></a>
                              </div>
                              <h6><a href="blog-detail.html">It is a long established fact that a reader</a></h6>
                              <p><i class="fa fa-clock-o"></i> 6 Hours ago</p>
                          </li>
                          <li>
                              <div class="post_thumb">
                                  <a href="blog-detail.html"><img src="assets/images/80x60.jpg" alt="image"/></a>
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
                          <li><a href="#"><img src="assets/images/200x140.jpg" alt="image"/></a></li>
                          <li><a href="#"><img src="assets/images/200x140.jpg" alt="image"/></a></li>
                          <li><a href="#"><img src="assets/images/200x140.jpg" alt="image"/></a></li>
                          <li><a href="#"><img src="assets/images/200x140.jpg" alt="image"/></a></li>
                          <li><a href="#"><img src="assets/images/200x140.jpg" alt="image"/></a></li>
                          <li><a href="#"><img src="assets/images/200x140.jpg" alt="image"/></a></li>
                     </ul>
      </div>
</div>
<div id="overlay_bg"></div>
    </div>
  )
}

export default Contactus;