import React from 'react';
import { Link } from 'react-router-dom';
 
const Home = () => {
  return(
    <div>
      {/* <!-- Mobile Aside --> */}
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

<div id="intro">
	<div class="container">
    	<div class="intro_text text-right">
        	<h1 class="head">الإتحاد الفلسطيني للشراع و التجديف</h1>
            <Link to="/about-us" class="btn">معلومات عنا</Link>
            <Link to="/contact-us" class="btn light-bg">اتصل الان</Link>
                    {/* <!-- <Link class="popup-youtube sigma_video-btn" to="https://www.youtube.com/watch?v=ySITvuQ1K74"><i class="fa fa-play"></i></Link> --> */}
                  </div>      
                </div>
        </div>
{/* <!-- /Intro -->
<!-- Mission Vision --> */}
<div class="section-padding">
    <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="info_box has-animation">
              <span></span>
              <span></span>
                <div class="icon">
                    <img src="assets/images/icons8-forward-button-48.png" alt="image"/>
                </div>
                <h5>أهدافنا</h5>
             <p class="mb-0">رعاية ونشر وتنظيم وإدارة وتمثيل رياضة القوارب واليخوت والتزلج و التجديف بأنواعهم محليا ودوليا وبين أوساط الشباب الفلسطيني والناشئة  ، التمثيل الفلسطيني للقوارب والبحارة الفلسطيني و رياضة الشراع بأنواعها والتجديف والتزلج ،  والإشراف في البطولات  
                </p>
            </div>
        </div>
            <div class="col-lg-4 col-md-6">
                <div class="info_box has-animation">
                  <span></span>
                  <span></span>
                    <div class="icon">
                        <img src="assets/images/icons8-tailwind-css-48.png" alt="image"/>
                    </div>
                    <h5>رؤيتنا</h5>
                    <p class="mb-0">يسعى الإتحاد الفلسطيني للشراع و التجديف الى أن يكون مؤسسة رياضية في رياضات التجديف والشراع ، محترفة ومنافسة للاتحادات الدولية في جودة وكفاءة الخدمات المقدمة للمجتمع الفلسطيني المحلي وفي الشتات ، ومشارك فعال في المسابقات الدولية </p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="info_box  has-animation">
                  <span></span>
                  <span></span>
                    <div class="icon">
                        <img src="assets/images/icons8-gps-48.png" alt="image"/>
                   </div>
                    <h5>من نحن</h5>
                    <p class="mb-0">الاتحاد الفلسطيني للشراع والتجديف هو منظمة رياضية غير ربحية ، تمثل دولة فلسطين في الاجتماعات الرياضية وورش العمل والمسابقات المحلية والدولية في رياضة التجديف والشراع ، بالإضافة إلى دعم الرياضيين والأندية والمهتمين بالرياضات المائية                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- /Mission Vision --> */}

{/* <!-- About-us --> */}
<div class="section-padding pt-0">
  <div class="container">
        
        
        <div class="row">
          
          <div class="col-md-6">
              <div class="about_img">
          <img src="assets/images/رعاية بطولة التجديف الشاطئي الأولى/rowing.png" alt="image"/>
                </div>
            </div>
            <div class="col-md-6">
              <div class="about_company">
                  
                  <h3>ماذا تعرف عن رياضة التجديف؟</h3>
                    <p>تُصنف رياضة التجديف من الرياضات المائية، وهي عبارة عن تجديف باستخدام مجداف ثنائي الشفرة، داخل قارب عادًة ما يكون صغير الحجم، ويُسمى الكاياك، وهي موجودة بأحجام وأنواع متنوعة ومختلفة بحسب الهدف من استخدامها، وتتميز بأن غالبية القوراب تغطي منطقة الأرجل، وتبقى في الغالب على مستوى منخفض في الماء</p>
                    <Link to="#" class="btn">تعلم المزيد</Link>
                    {/* <!-- <p>We are one of the few companies that can truly offer worldwide trip support services with the highest service standards, is ISO certified and cost efficient, and will effectively allow you to save valuable time and resources.</p> --> */}

                </div>
                
            </div>
            <div class="section-header text-center">
              <div class="heading_arrow">
                    <span class="dots_div"></span> 
                    <span class="s"></span> 
                    <span class="dots_div"></span> 
                    <span class="s"></span> 
                    <span class="dots_div"></span> 
                    <span class="s"></span> 
                    <span class="dots_div"></span> 
                    <span class="s"></span> 
                    <span class="dots_div"></span> 
                </div>
            </div>
        </div>
        {/* <div class="space-60"></div> */}
        <div class="row">
          <div class="col-md-6 order-md-12">
              <div class="about_img">
          <img src="assets/images/رعاية بطولة التجديف الشاطئي الأولى/federation.png" alt="image"/>
                </div>
            </div>
            <div class="col-md-6">
              <div class="about_company">
                  {/* <!-- <h6 class="sub-heading">Why Is the Surfing Club</h6> --> */}
                  <h3>ماذا تعرف عن رياضة ركوب الأمواج</h3>
                    <p>تعتبر رياضة ركوب الأمواج من الأنشطة الرياضية الفردية المسلية، ويستخدم الفرد الذي يقوم بممارسة هذا النشاط الرياضي لوح لركوب الأمواج، حيث يقف على الجزء الأمامي من الموجة المائية المتحركة، ومن ثم تحمل هذه الأمواج الراكب نحو الشاطئ، وهنالك العديد من الموجات الملائمة لركوب الأمواج، وتكون متواجدة بشكل أساسي على شواطئ المحيط، ولكن من الممكن أن يتم العثور عليها أيضاً في الموجات الواقفة في المحيط المفتوح، وفي البحيرات في الأنهار على شكل تجويف المد والجزر أو في برك الأمواج بصورة عامة.</p>
                    <Link to="#" class="btn">تعلم المزيد</Link>
                    {/* <!-- <p>We are one of the few companies that can truly offer worldwide trip support services with the highest service standards, is ISO certified and cost efficient, and will effectively allow you to save valuable time and resources.</p> --> */}
                </div>
            </div>
            
        </div>
        {/* <div class="space-60"></div> */}
        <div class="section-header text-center">
          <div class="heading_arrow">
                <span class="dots_div"></span> 
                <span class="s"></span> 
                <span class="dots_div"></span> 
                <span class="s"></span> 
                <span class="dots_div"></span> 
                <span class="s"></span> 
                <span class="dots_div"></span> 
                <span class="s"></span> 
                <span class="dots_div"></span> 
            </div>
        </div>
        <div class="row">
          
          <div class="col-md-6">
              <div class="about_img">
                <img src="assets/images/رعاية بطولة التجديف الشاطئي الأولى/sailing.png" alt="image"/>

                </div>
            </div>
            <div class="col-md-6">
              <div class="about_company">
               {/* <!-- <h6 class="sub-heading">مرحبا بكم في إتحاد التجديف</h6> --> */}
                  <h3>ماذا تعرف عن رياضة التزلج</h3>
                    <p>رياضة التزلج هي رياضة مائية سطحية يتم فيها سحب الفرد خلف قارب أو تركيب تزلج بالكابل فوق مسطح مائي، أو قشط السطح على زلاجتين أو تزلج واحد. تتطلب الرياضة مساحة كافية على امتداد سلس من الماء، وزلاجة واحدة أو اثنتين، وقارب سحب بحبل، واثنين أو ثلاثة أشخاص (حسب قوانين القوارب المحلية)، وسيلة الطفو الشخصية. بالإضافة إلى ذلك، يجب أن يتمتع المتزلج بالقوة الكافية للجزء العلوي والسفلي من الجسم، والتحمل العضلي، والتوازن الجيد.</p>
                    <Link to="#" class="btn">تعلم المزيد</Link>
                    {/* <p>We are one of the few companies that can truly offer worldwide trip support services with the highest service standards, is ISO certified and cost efficient, and will effectively allow you to save valuable time and resources.</p>  */}
                {/* </div>  */}
                
            </div>

        </div>
    </div>
</div>
{/* <!-- /About-us -->

<!-- More-Info --> */}
<div class="section-padding pt-0">
	<div class="container">
    <div class="section-header text-center">
      <h5>المزيد عنا</h5>
      <div class="heading_arrow">
            <span class="dots_div"></span> 
            <span class="s"></span> 
            <span class="dots_div"></span> 
        </div>
      <h3>تعرف على المزيد عنا</h3>
    </div>
        <div class="row">
          <div class="col-md-6">
            <p> يعتبر الإتحاد جهة مستقلة بذاتها لا يتبع لأي جهة سياسية أو دينية و ليس له أي صبغة أو انتماء 
             سياسي أو طائفي و يقدم خدماته لكافة فئات المجتمع بالتساوي . و يستنبط قوانينه و لوائحه وفقاُ لسياسة الدولة وطبقاً للقوانين المتعامل بها بالإتحادات العربية و الدولية</p>
            <p>تاسس الإتحاد في الشتات عام 1996 في مدينه القاهره و تم نقل مقره الي الوطن واعتماده من 
              قبل اللجنة الأولمبية و وزارة الشباب في 23نوفمبر2005
              .
              و يعتبر هذا الإتحاد منذ تأسيسه اتحاد أهلي مستقل بذاته تدعمه الدولة مادياٌ و معنوياٌ
               ، و مقر الإتحاد الدائم هو مدينة غزة 
               الشعار والوانه هو عباره عن شراع بشكل المثلث يتوسطه دائره القياده باللون الأخضر 
              وعليه احرف PSRF واسفل الشراع خط مائل يمثل الماء 
               ومكتوب حوله علي شكل دائري اسم الإتحاد باللغتين العربي و
              الإنجليزي</p>
            <img src="assets/images/رعاية بطولة التجديف الشاطئي الأولى/15.jpg" alt="image"/>
        </div>
            <div class="col-md-6">
                <div class="web_intro">
                    <div class="text-right btn_wp">
                        <Link to="/about-us" class="btn-link">المزيد عنا <i class="fa fa-long-arrow-right"></i></Link>
                    </div>
                    <div class="img_wp">
                    	<div class="blue_box">
                        	<h6>نحن هنا</h6>
                        	<h4>الإتحاد الفلسطيني للشراع والتجديف</h4>
                        </div>	
	                    <img src="assets/images/540x600.jpg" alt="image"/>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</div>
{/* <!-- /More-Info --> */}


{/* <!-- /Portfolio -->


<!-- Blog --> */}
<div class="section-padding-2 pt-0">
    <div class="container">
        <div class="section-header text-center">
            <h5>أخبارنا</h5>
            <div class="heading_arrow">
                <span class="dots_div"></span> 
                <span class="s"></span> 
                <span class="dots_div"></span> 
            </div>
            <h2>مدونتنا</h2>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="post_wrap style-2">
                    <div class="post_img">
                        <Link to="/PortfolioDetail/12"><img src="assets/images/رعاية بطولة التجديف الشاطئي الأولى/17.jpg" alt="image"/></Link>
                    </div>
                    <div class="post_info">
                        <div class="post_date"><Link to="blog-detail.html"><i class="fa fa-calendar"></i> September 14, 2022</Link></div>
                       <h5><Link to="/PortfolioDetail/12">بطولة التجديف الشاطئية الأولى على شاطئ بحر غزة</Link></h5>
                        <p> نظّم الاتحاد الفلسطيني للشراع والتجديف، بطولة التجديف الشاطئية الأولى، على شاطئ بحر مدينة غزة ، وذلك بتاريخ 14/9/2022 </p>
                        <div class="post_categorys">
                            <Link to="/PortfolioDetail/12">تفاصيل الخبر</Link>
                        </div>
                    </div>
                </div>  
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="post_wrap style-2">
                    <div class="post_img">
                        <Link to="#"><img src="assets/images/يوم البيئة الفلسطيني/6.jpg" alt="image"/></Link>
                    </div>
                    <div class="post_info">
                        <div class="post_date"><Link to="blog-detail.html"><i class="fa fa-calendar"></i>September 14, 2022</Link></div>
                       <h5><Link to="/PortfolioDetail1/3">الحملة التطوعية لتنظيف شواطئ بحر غزة</Link></h5>
                        <p> بتنفيذ من مكتب الإتحاد الأوروبي، مشاركة الإتحاد الفلسطيني للشراع و التجديف في الحملة التطوعية لتنظيف شواطئ غزة ضمن الحملة العالمية</p>
                        <div class="post_categorys">
                            <Link to="/PortfolioDetail1/3">تفاصيل الخبر</Link>
                        </div>
                    </div>
                </div>  
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="post_wrap style-2">
                    <div class="post_img">
                        <Link to="#"><img src="assets/images/بطولة التشيك/3.jpg" alt="image"/></Link>
                 </div>
                    <div class="post_info">
                        <div class="post_date"><Link to="blog-detail.html"><i class="fa fa-calendar"></i>September 11-25, 2022</Link></div>
                       <h5><Link to="/PortfolioDetail/15">
                        بطولة العالم للتجديف في العاصمة التشيكية براغ</Link></h5>
                        <p>شارك ممثل المنتخب الفلسطيني اللاعب امل يونس في بطولة العالم للتجديف في العاصمة التشيكية براغ، وذلك في تاريخ 11-25 سبتمبر </p>
                        <div class="post_categorys">
                            <Link to="/PortfolioDetail/15">تفاصيل الخبر</Link>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</div>
{/* <!-- Blog -->
<!-- Contact-Us --> */}
<div>
	<div class="container">
    	<div class="section-header text-center">
        	<h5>ابقى على تواصل</h5>
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
                    {/* <!-- <div class="direction_btn">
                      <Link to="#"><i class="fa fa-long-arrow-right"></i></Link>
                    </div> --> */}
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
    {/* <!-- <div class="map_wp">
    	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7060970.521913474!2d-102.60272453381052!3d37.588245893295074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited+States!5e0!3m2!1sen!2sin!4v1495005824042" style="border:0" allowfullscreen></iframe>
    </div> --> */}
</div>
{/* <!-- /Contact-Us --> */}
{/* <!-- Footer --> */}
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
                          <li><Link target='_blank' to="https://www.facebook.com/PSRF2021"><i class="fa fa-facebook"></i></Link></li>
                            <li><Link target='_blank'  to="https://www.instagram.com/psrf2021/"><i class="fa fa-instagram"></i></Link></li>
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
{/* <!-- /Footer --> */}

{/* <!-- Sidebar-Nav --> */}
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
                                        <Link to="blog-detail.html"><img src="assets/images/80x60.jpg" alt="image"/></Link>
                                 </div>
                                    <h6><Link to="blog-detail.html">Alonso Kelina Falao Asiano Pero</Link></h6>
                                    <p><i class="fa fa-clock-o"></i> 6 Hours ago</p>
                                </li>
                                <li>
                                    <div class="post_thumb">
                                        <Link to="blog-detail.html"><img src="assets/images/80x60.jpg" alt="image"/></Link>
                                 </div>
                                    <h6><Link to="blog-detail.html">It is a long established fact that a reader</Link></h6>
                                    <p><i class="fa fa-clock-o"></i> 6 Hours ago</p>
                                </li>
                                <li>
                                    <div class="post_thumb">
                                        <Link to="blog-detail.html"><img src="assets/images/80x60.jpg" alt="image"/></Link>
                                  </div>
                                    <h6><Link to="blog-detail.html">Many desktop publish packages and web</Link></h6>
                                    <p><i class="fa fa-clock-o"></i> 6 Hours ago</p>
                                </li>
                            </ul>
            </div>
            <div class="sidebar_widget instagram_widget">
                            <div class="widget_title">
                                <h4>Instagram</h4>
                            </div>
                            <ul>
                                <li><Link to="#"><img src="assets/images/200x140.jpg" alt="image"/></Link></li>
                              <li><Link to="#"><img src="assets/images/200x140.jpg" alt="image"/></Link></li>
                          <li><Link to="#"><img src="assets/images/200x140.jpg" alt="image"/></Link></li>
                              <li><Link to="#"><img src="assets/images/200x140.jpg" alt="image"/></Link></li>
                           <li><Link to="#"><img src="assets/images/200x140.jpg" alt="image"/></Link></li>
                              <li><Link to="#"><img src="assets/images/200x140.jpg" alt="image"/></Link></li>
                          </ul>
            </div>
    </div>
<div id="overlay_bg"></div>
</div>
</div>
  );
};
export default Home;