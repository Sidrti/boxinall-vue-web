<template>
    <section class="hero-card-web mobile-app-">
        <div class="hero-main-rp container-fluid text-start">
            <div class="row">
                <div class="col-lg-6 v-center">
                    <div class="hero-heading-sec2 niwax" data-rellax-speed="3">
                        <h1 class="" data-aos="fadeIn" :data-aos-delay="200" data-aos-duration="1000">Top Rated Mobile App Development Company</h1>
                        <p class="" data-aos="fadeIn" :data-aos-delay="400" data-aos-duration="1000">Schedule a Consultation with Our Team to Discuss Your Idea. If We Believe in It, You Could be One of Our Exclusive Clients This Month. We Can't Wait to Hear About Your Vision! </p>
                        <div class="content-sec  d-flex mt30 v-center text-w" data-aos="fadeIn" :data-aos-delay="600" data-aos-duration="1000">
                            <div class="mr25"><a href="#/contact" class="btn-main bg-btn4 lnk">Lets Discuss your Idea<i
                                        class="fas fa-chevron-right fa-icon"></i><span class="circle"></span></a></div>
                            <!-- <div class="video-intro-pp v-center"><a class="video-link play-video"
                                    href="https://www.youtube.com/watch?v=SZEflIVnhH8?autoplay=1&amp;rel=0"><span
                                        class="triangle-play"></span></a></div>
                            <div class="title-hero-oth v-center">
                                <p>See liv demo</p>
                            </div> -->
                        </div>
                        <div class="awrd-sec text-w mt40" data-aos="fadeIn" :data-aos-delay="500" >
                            <h5>Our Achievements</h5>
                                <VueOwlCarousel class="bages-slider mt20" :autoplay="true" :nav="false" :loop="true" :items= "3" :autoplaySpeed="2000" :dots="false" :autoplayTimeout="1900">
                                           
                                <div class="img-badge- margin-right20"><a> <img src="../assets/images/icons/clutch.png"
                                            alt="niwax mobile app development company" class="img100w"></a> </div>
                                <div class="img-badge- margin-right20"><a> <img src="../assets/images/icons/mobile.png"
                                            alt="niwax mobile app development company" class="img100w"></a> </div>
                                <div class="img-badge- margin-right20"><a> <img src="../assets/images/icons/business of apps.png"
                                            alt="niwax mobile app development company" class="img100w"></a> </div>
                                <div class="img-badge- margin-right20"><a> <img src="../assets/images/icons/goodfirms.png"
                                            alt="niwax mobile app development company" class="img100w"></a> </div>
                                </VueOwlCarousel>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 v-center">
                    
            <div>
              <div class="form-block formcover shadow">
                <h4>Request a Free Quote</h4>
                <form id="contactForm" data-bs-toggle="validator" class="shake mt30">
                  <div class="row">
                    <div class="form-group col-sm-6">
                      <input type="text"  id="name" placeholder="Enter name" required data-error="Please fill Out">
                      <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group col-sm-6">
                      <input type="email"  id="email" placeholder="Enter email" required>
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-sm-6">
                      <input type="text" id="mobile" placeholder="Enter mobile" required data-error="Please fill Out">
                      <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group col-sm-6">
                      <select name="Dtype" id="Dtype" required>
                        <option value="">Select Requirement</option>
                        <option value="web">web</option>
                        <option value="graphic">graphic</option>
                        <option value="video">video</option>
                      </select>
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="form-group">
                    <textarea id="message" rows="5" placeholder="Enter your message" required></textarea>
                    <div class="help-block with-errors"></div>
                  </div>
                  <button type="submit" id="form-submit" class="btn btn-main bg-btn3">Submit</button>
                  <div id="msgSubmit" class="h3 text-center hidden"></div>
                  <div class="clearfix"></div>
                </form>
              </div>
            </div>
                    <!-- <div class="app-hero-bnr" data-aos="fadeIn" :data-aos-delay="400" data-aos-duration="1000"> <img
                            src="../assets/images/hero/mobile_hero_banner.png" alt="niwax mobile app development company"
                            class="img-fluid"> </div> -->
                </div>
            </div>
        </div>
    </section>
    <!-- <section class="hero-section niwax-lp1" data-background="../assets/images/banner/banner12.png" id="home">
        <div class="text-block">
            <div class="container text-start">
                <div class="row v-center">
                    <div class="col-lg-7">
                        <div class="header-headings">
                            <span class="text-effect-1">We build that people love</span>
                            <h1 class="mt20 mb30" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1000">At our organization, we excel at unlocking the power of 
                                <vue-typed-js :strings="['Mobile Apps', 'Websites','Custum Softwares', 'UI/UX Design']" class="typed-inline" :startDelay="100" :typeSpeed="50" :backSpeed="100" :backDelay="1000" :loop="true" :showCursor="false">
                                    <span
                                        class="typing" id="main" 
                                        data-delay="100" data-deleteDelay="1000">
                                    </span> 
                                </vue-typed-js>
                                    <span class="cursorx"
                                    data-owner="first-typer">|</span></h1>
                            <p data-aos="fade-in" data-aos-delay="800" data-aos-duration="1000">Schedule a Consultation with Our Team to Discuss Your Idea. If We Believe in It, You Could be One of Our Exclusive Clients This Month. We Can't Wait to Hear About Your Vision! </p>

                            <div class="niwaxbtnvideo mt30">
                                <a href="#" class="niwax-btn2">Lets Discuss Your Idea<i class="fas fa-chevron-right fa-icon"></i></a>
                                <div class="video-btn  d-flex v-center gap10">
                                    <div class="video-intro-ppx"><a class="video-link play-video"
                                            href="https://www.youtube.com/watch?v=SZEflIVnhH8?autoplay=1&rel=0"><span
                                                class="triangle-play"></span></a></div>
                                    <div class="title-hero">
                                        <p>Play video</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 v-center">
                        <div class="form-block formcover shadow">
                            <h4>Request a Free Quote</h4>
                            <form id="contactForm" data-bs-toggle="validator" class="shake mt30">
                                <div class="row">
                                    <div class="form-group col-sm-6">
                                        <input type="text" id="name" placeholder="Enter name" required
                                            data-error="Please fill Out">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                    <div class="form-group col-sm-6">
                                        <input type="email" id="email" placeholder="Enter email" required>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-sm-6">
                                        <input type="text" id="mobile" placeholder="Enter mobile" required
                                            data-error="Please fill Out">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                    <div class="form-group col-sm-6">
                                        <select name="Dtype" id="Dtype" required>
                                            <option value="">Select Requirement</option>
                                            <option value="web">web</option>
                                            <option value="graphic">graphic</option>
                                            <option value="video">video</option>
                                        </select>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <textarea id="message" rows="5" placeholder="Enter your message" required></textarea>
                                    <div class="help-block with-errors"></div>
                                </div>
                                <button type="submit" id="form-submit" class="btn btn-main bg-btn3">Submit</button>
                                <div id="msgSubmit" class="h3 text-center hidden"></div>
                                <div class="clearfix"></div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> --></template>
<style scoped>
.typed-inline {
    display: inline;
    color: #ff3870 !important;
}
.margin-right20 {
    margin-right: 20px;
}
</style>