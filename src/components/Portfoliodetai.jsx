import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import data from '../data/sporting_events.json';
import { Helmet } from 'react-helmet-async';

const Portfoliodetai = () => {
    const proid = useParams();
    const proDeatil = data.filter( (x) => x.id == proid.id);
    const event = proDeatil[0];

    
  return (
    <div>
        <Helmet>
          <title>أنشطة و فعاليات الإتحاد الفلسطيني للشراع و التجديف</title>
          <meta name='description' content=' تفاصيل الأنشطة و الفعاليات البحرية للإتحاد الفلسطيني للشراع و التجديف '></meta>
          <link rel='canonical' href={`/PortfolioDetail/:${event.id}`}></link>
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
{/* <!-- Subheader --> */}
<div id="inner_header" data-parallax="scroll" data-image-src="/assets/images/زيارة\ صحفي\ كندي\ مايو\ 2022/7.jpg">
<div className="container">
  <div className="inner_intro">
  <h1>تفاصيل الخبر</h1>
  </div>
</div>
</div>
{/* <!-- /Subheader -->

<!-- Portfolio Details --> */}
<div className="section-padding">
   <div className="container">
      <div className="row" key={event.id}>
      <div className="col-lg-8">
 <div className="post_content">
 <h4>{event.name}</h4>
 <p>{event.description}</p>
 <blockquote>
   <p>
 الإتحاد الفلسطيني للشراع و التجديف يرعى  وينشر وينظم رياضة القوارب و اليخوت بأنواعها والتزلج والتجديف والشراع بأنواعهم ويشرف في البطولات الدولية و المحلية والأولمبية
   </p>
 </blockquote>
 
 <div className="row">
    <div className="col-md-6 pt-0">
      <Link to={event.image1}>
       <img src={event.image1} alt="post"/>
     </Link>
    </div>
    <div className="col-md-6">
      <Link to={event.image2}>
       <img src={event.image2} alt="post"/>
     </Link>
    </div>
 </div>
 
 <div className="row">
    <div className="col-md-6 pt-0">
      <Link to={event.image3}>
       <img src={event.image3} alt="post"/>
     </Link>
    </div>
    <div className="col-md-6">
      <Link to={event.image4}>
       <img src={event.image4} alt="post"/>
     </Link>
    </div>
 </div>
 
 <div className="sigma_single-pagination">
 
 <div className="sigma_single-pagination-item sigma_single-pagination-prev">
 
 </div>
 </div>
 </div>
 </div>
 <aside className="col-lg-4">
  <div className="sidebar_wrap sidebar-2">
     <div className="sidebar_widget">
        <div className="widget_title">
           <h4>تفاصيل الحدث</h4>
        </div>
          <div className="sigma_list-item">
            <label>  الحدث : </label>
            <span>{event.name}</span>
          </div>
 
          <div className="sigma_list-item">
            <label> الموقع : </label>
            <span>{event.place}</span>
          </div>
          <div className="sigma_list-item">
            <label>التاريخ : </label>
            <span>{event.date}</span>
          </div>
     </div>
      <div className="sidebar_widget categories_widget">
        <div className="widget_title">
           <h4>أحدث خدماتنا</h4>
        </div>
        <ul>
        <li>
        <Link to="/index">
        تصفح    <i className="fa fa-chevron-left"></i>
        </Link>
        </li>
           <li>
            <Link to="/portfolio">
            أحداث رياضية <i className="fa fa-chevron-left"></i>
            </Link>
            </li>
           <li>
            <Link to="/portfolio1">
            فعاليات إجتماعية <i className="fa fa-chevron-left"></i>
            </Link>
            </li>
        </ul>
     </div>
  </div>
 </aside>
      </div>
   </div>
</div>
{/* <!-- /Portfolio Details -->

<!-- Sponsors --> */}
<div class="sponsors section-padding">
<a href="https://www.facebook.com/Jawwal.059" target='_blank'><img src="/assets/images/sponsors/jawwal (2).png" alt="image"/></a>
<a href="https://european-union.europa.eu/index_en" target='_blank'><img src="/assets/images/sponsors/Flag_of_Europe.svg" alt="image"/></a>
<a href="https://www.facebook.com/BankofPalestine" target='_blank'><img src="/assets/images/sponsors/bank.png" alt="image"/></a>
</div>
{/* <!-- /Sponsors -->

<!-- Footer --> */}
<footer className="sigma_footer style-2 section-padding pb-0">
      <div className="container">
          <div className="sigma_footer-top">
            <div className="footer-item">
              <ul className="sigma_footer-links">
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
            <div className="sigma_footer-logo">
              <img className="logo-img" src="/assets/images/logo-1.png" alt="logo"/>
            </div>
            <div class="follow_us m-0">
                      <ul>
                          <li><a target='_blank' href="https://www.facebook.com/PSRF2021"><i class="fa fa-facebook"></i></a></li>
                            <li><a target='_blank'  href="https://www.instagram.com/psrf2021/"><i class="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>


          </div>
          <div className="sigma_footer-bottom">
            <div className="sigma_footer-copyright">
              <p className="mb-0"> Copyright © Website 
                <Link to="#">2022</Link>
              </p>
            </div>
          </div>
      </div>
</footer>
{/* <!-- /Footer -->
<!-- Sidebar-Nav --> */}
<div id="sidebar_nav" className="slide_menu">
      <div className="sidebar_logo">
          <img src="/assets/images/logo.png" alt="image"/>
      </div>    
      <div className="sidebar_widget popular_widget">
                      <div className="widget_title">
                          <h4>Feeds</h4>
                      </div>
                      <ul>
                          <li>
                              <div className="post_thumb">
                                  <Link to="blog-detail.html"><img src="/assets/images/80x60.jpg" alt="image"/></Link>
                              </div>
                              <h6><Link to="blog-detail.html">Alonso Kelina Falao Asiano Pero</Link></h6>
                              <p><i className="fa fa-clock-o"></i> 6 Hours ago</p>
                          </li>
                          <li>
                              <div className="post_thumb">
                                  <Link to="blog-detail.html"><img src="/assets/images/80x60.jpg" alt="image"/></Link>
                              </div>
                              <h6><Link to="blog-detail.html">It is a long established fact that a reader</Link></h6>
                              <p><i className="fa fa-clock-o"></i> 6 Hours ago</p>
                          </li>
                          <li>
                              <div className="post_thumb">
                                  <Link to="blog-detail.html"><img src="/assets/images/80x60.jpg" alt="image"/></Link>
                              </div>
                              <h6><Link to="blog-detail.html">Many desktop publish packages and web</Link></h6>
                              <p><i className="fa fa-clock-o"></i> 6 Hours ago</p>
                          </li>
                      </ul>
      </div>
      <div className="sidebar_widget instagram_widget">
                      <div className="widget_title">
                          <h4>Instagram</h4>
                      </div>
                      <ul>
                          <li><Link to="#"><img src="/assets/images/200x140.jpg" alt="image"/></Link></li>
                          <li><Link to="#"><img src="/assets/images/200x140.jpg" alt="image"/></Link></li>
                          <li><Link to="#"><img src="/assets/images/200x140.jpg" alt="image"/></Link></li>
                          <li><Link to="#"><img src="/assets/images/200x140.jpg" alt="image"/></Link></li>
                          <li><Link to="#"><img src="/assets/images/200x140.jpg" alt="image"/></Link></li>
                          <li><Link to="#"><img src="/assets/images/200x140.jpg" alt="image"/></Link></li>
                      </ul>
      </div>
</div>
<div id="overlay_bg"></div>
    </div>
  )
}

export default Portfoliodetai