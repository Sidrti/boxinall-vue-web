<template>
    <section class="hero-section niwax-lp1" data-background="images/banner/banner12.png" id="home">
        <div class="text-block">
            <div class="container text-start">
                <div class="row v-center">
                    <div class="col-lg-7">
                        <div class="header-headings">
                            <span class="text-effect-1">Solution-Oriented Services</span>
                            <h1 class="mt20 mb30" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1000">Creative Design Company We Create 
                                <vue-typed-js :strings="['First text', 'Second Text']" class="typed-inline" :startDelay="100" :typeSpeed="50" :backSpeed="100" :backDelay="1000" :loop="true" :showCursor="false">
                                    <span
                                        class="typing" id="main" 
                                        data-delay="100" data-deleteDelay="1000">
                                    </span> 
                                </vue-typed-js>
                                    <span class="cursorx"
                                    data-owner="first-typer">|</span></h1>
                            <p data-aos="fade-in" data-aos-delay="800" data-aos-duration="1000">Niwax is one of the most creative and experienced
                                mobile app development companies in India.</p>
                            <!-- btn set -->
                            <div class="niwaxbtnvideo mt30">
                                <a href="#" class="niwax-btn2">GET STARTED<i class="fas fa-chevron-right fa-icon"></i></a>
                                <div class="video-btn  d-flex v-center gap10">
                                    <div class="video-intro-ppx"><a class="video-link play-video"
                                            href="https://www.youtube.com/watch?v=SZEflIVnhH8?autoplay=1&rel=0"><span
                                                class="triangle-play"></span></a></div>
                                    <div class="title-hero">
                                        <p>Play Video</p>
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
</section></template>
<style scoped>
.typed-inline {
  display: inline;
  color: #ff3870 !important;
}
</style>