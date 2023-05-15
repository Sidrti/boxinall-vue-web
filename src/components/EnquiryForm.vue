<template>
        <section class="contact-page pad-tb bg-gradient3">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <h2>
                <vue-typed-js :strings="['Hello !','नमस्ते', 'Hola','Bonjour','Guten tag','Salve','Nǐn hǎo','Olá','Salaam Alaikum','Konnichiwa']" class="typed-inline" :startDelay="100" :typeSpeed="50" :backSpeed="100" :backDelay="1000" :loop="true" :showCursor="false">
                    <span
                        class="typing mb-5" id="main" 
                        data-delay="100" data-deleteDelay="1000">
                    </span> 
                </vue-typed-js>
            </h2>
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col-lg-7">
            <div class="niwax23form shadow">
              <div class="common-heading text-l">
                <h2 class="mt0 mb0">Get in touch</h2>
                <p class="mb50 mt10">We will catch you as early as we receive the message</p>
              </div>
              <div class="contact-form-card-pr contact-block-sw m0 iconin">
                <div class="form-block niwaxform">
                  <form action="#" id="contactform" method="post">
                    <div class="fieldsets row">
                      <div class="col-md-6 form-group floating-label">
                        <div class="formicon"><i class="fas fa-user"></i></div>
                        <input type="text" placeholder=" " required="required" id="name" class="floating-input" name="fullname">
                        <label>Full Name*</label>
                        <div class="error-label"></div>
                      </div>
                      <div class="col-md-6 form-group floating-label">
                        <div class="formicon"><i class="fas fa-phone-alt"></i></div>
                        <input type="tel" placeholder=" " required="required" id="mobile_number" class="floating-input" name="mobile_number">
                        <label>Mobile Number*</label>
                        <div class="error-label"></div>
                      </div>
                    </div>
                    <div class="fieldsets row">
                      <div class="col-md-6 form-group floating-label">
                        <div class="formicon"><i class="fas fa-envelope"></i></div>
                        <input type="email" placeholder=" " required="required" id="email" class="floating-input" name="email">
                        <label>Email Address*</label>
                        <div class="error-label"></div>
                      </div>
                      <div class="col-md-6 form-group floating-label">
                        <div class="formicon"><i class="fas fa-file-alt"></i></div>
                        <select required="required" id="interested_in" class="floating-select" name="interested_in">
                          <option value="">&nbsp;</option>
                          <option value="Graphic Design" >Graphic Design</option>
                          <option value="Web Design" >Web Design</option>
                          <option value="App Design" >App Design</option>
                          <option value="Other" >Other</option>
                        </select>
                        <label>Interested In*</label>
                        <div class="error-label"></div>
                      </div>
                    </div>
                    <div class="fieldsets row">
                      <div class="col-md-6 form-group floating-label">
                        <div class="formicon"><i class="fas fa-map-marker-alt"></i></div>
                        <input type="text" placeholder=" " required="required" id="your_location" class="floating-input" name="your_location">
                        <label>Your Location*</label>
                        <div class="error-label"></div>
                      </div>
                      <div class="col-md-6 form-group floating-label">
                        <div class="formicon"><i class="fab fa-skype"></i></div>
                        <input type="text" placeholder=" " required="required" id="skype_whatsapp_no" class="floating-input" name="skype_whatsapp_no">
                        <label>Skype ID/Whatsapp No.*</label>
                        <div class="error-label"></div>
                      </div>
                    </div>
                    <div class="fieldsets row textareax">
                      <div class="col-md-12 form-group floating-label">
                        <div class="formicon"><i class="fas fa-comment-dots"></i></div>
                        <textarea placeholder=" " required="required" id="description" class="floating-input" name="description"></textarea>
                        <label>Brief about the project*</label>
                        <div class="error-label"></div>
                      </div>
                    </div>
                    <div class="custom-control custom-checkbox ctmsetsw">
                      <input type="checkbox" class="custom-control-input ctminpt" id="agree" name="agree" checked="checked">
                      <label class="custom-control-label ctmlabl" for="agree">By clicking the “Submit” button you agree to our  <a href="javascript:void(0)">Terms &amp; Conditions</a>.</label>
                    </div>
                    <div class="fieldsets mt20"> <button type="submit" name="submit" class="btn btn-main bg-btn w-fit mb20"><span>Submit <i class="fas fa-chevron-right fa-icon"></i></span> <span class="loader"></span></button> </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 m-mt30">
            <div class="pl--50">
              <h2>Trusted by</h2>
              <p class="mt10">Clients belive us and we deliverd them good service</p>
              <div class="client-trust-us mt30">
                <div class="clientsicons">
                  <a href="#"><img src="../assets/images/client/customer-logo-1.png" alt="icon"></a>
                  <a href="#"><img src="../assets/images/client/customer-logo-2.png" alt="icon"></a>
                  <a href="#"><img src="../assets/images/client/customer-logo-3.png" alt="icon"></a>
                  <a href="#"><img src="../assets/images/client/customer-logo-4.png" alt="icon"></a>
                  <a href="#"><img src="../assets/images/client/customer-logo-5.png" alt="icon"></a>
                  <a href="#"><img src="../assets/images/client/customer-logo-6.png" alt="icon"></a>
                  <a href="#"><img src="../assets/images/client/customer-logo-7.png" alt="icon"></a>
                  <a href="#"><img src="../assets/images/client/customer-logo-8.png" alt="icon"></a>
                  <a href="#"><img src="../assets/images/client/customer-logo-9.png" alt="icon"></a>
                </div>
              </div>
              <VueOwlCarousel class="testimonial-card-a contact-review shadow mt40" :items="1" :nav="false" :autoplay="true" :autoplaySpeed="1500" :loop="true" :dots="false">
                <div class="testimonial-card">
                  <div class="tt-text">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                  <div class="client-thumbs mt20">
                    <div class="media v-center">
                      <div class="user-image bdr-radius"><img src="../assets/images/client/client-pic-x.jpg" alt="girl" class="img-fluid" /></div>
                      <div class="media-body user-info v-center">
                        <h5>Mike Smith</h5>
                        <p>Business Owner, <small>Sydney, Australia</small></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="testimonial-card">
                  <div class="tt-text">
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                  <div class="client-thumbs mt20">
                    <div class="media v-center">
                      <div class="user-image bdr-radius"><img src="../assets/images/client/client-pic-x.jpg" alt="girl" class="img-fluid" /></div>
                      <div class="media-body user-info">
                        <h5>Fred Chener</h5>
                        <p>CEO of Aramxx, <small>Ohio, US State</small></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="testimonial-card">
                  <div class="tt-text">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                  <div class="client-thumbs mt20">
                    <div class="media v-center">
                      <div class="user-image bdr-radius"><img src="../assets/images/client/client-pic-x.jpg" alt="girl" class="img-fluid" /></div>
                      <div class="media-body user-info">
                        <h5>Mathilda Burns</h5>
                        <p>Backery Shop, <small>Tronto, Italy</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </VueOwlCarousel>
                      
              <!-- <div class="owl-carousel testimonial-card-a contact-review shadow mt40">
                <div class="testimonial-card">
                  <div class="tt-text">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                  <div class="client-thumbs mt20">
                    <div class="media v-center">
                      <div class="user-image bdr-radius"><img src="../assets/images/client/client-pic-x.jpg" alt="girl" class="img-fluid" /></div>
                      <div class="media-body user-info v-center">
                        <h5>Mike Smith</h5>
                        <p>Business Owner, <small>Sydney, Australia</small></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="testimonial-card">
                  <div class="tt-text">
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                  <div class="client-thumbs mt20">
                    <div class="media v-center">
                      <div class="user-image bdr-radius"><img src="../assets/images/client/client-pic-x.jpg" alt="girl" class="img-fluid" /></div>
                      <div class="media-body user-info">
                        <h5>Fred Chener</h5>
                        <p>CEO of Aramxx, <small>Ohio, US State</small></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="testimonial-card">
                  <div class="tt-text">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                  <div class="client-thumbs mt20">
                    <div class="media v-center">
                      <div class="user-image bdr-radius"><img src="../assets/images/client/client-pic-x.jpg" alt="girl" class="img-fluid" /></div>
                      <div class="media-body user-info">
                        <h5>Mathilda Burns</h5>
                        <p>Backery Shop, <small>Tronto, Italy</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
              
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
<style>
.typing {
    color:#ff3870 !important 
}
</style>