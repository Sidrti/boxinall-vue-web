<template>
        
        <section class="contact-page pad-tb bg-contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <h2>
                <vue-typed-js :strings="['Hello !','नमस्ते', 'Hola','Bonjour','Guten tag','Salve','Nǐn hǎo','Olá','Salaam Alaikum','Konnichiwa']" class="typed-inline mb-3 mt-4" :startDelay="100" :typeSpeed="50" :backSpeed="100" :backDelay="1000" :loop="true" :showCursor="false">
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
                <h2 class="mt0 mb0">Get in touch With Boxinall Softech Pvt Ltd.</h2>
                <p class="mb50 mt10">We will catch you as early as we receive the message</p>
              </div>
              <div class="contact-form-card-pr contact-block-sw m0 iconin">
                <div class="form-block niwaxform">
                  <EnquireFreeQuote :showIcons="true" page="CONTACT"></EnquireFreeQuote>
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
                  <a href=""><img src="../assets/images/client/client3.png" alt="icon"></a>
                  <a href=""><img src="../assets/images/client/client2.png" alt="icon"></a>
                  <a href=""><img src="../assets/images/client/client4.png" alt="icon"></a>
                  <a href=""><img src="../assets/images/client/client5.png" alt="icon"></a>
                  <a href=""><img src="../assets/images/client/client6.png" alt="icon"></a>
                  <a href=""><img src="../assets/images/client/client7.png" alt="icon"></a>
                  <!-- <a href="#"><img src="../assets/images/client/customer-logo-7.png" alt="icon"></a>
                  <a href="#"><img src="../assets/images/client/customer-logo-8.png" alt="icon"></a>
                  <a href="#"><img src="../assets/images/client/customer-logo-9.png" alt="icon"></a> -->
                </div>
              </div>
              <VueOwlCarousel class="testimonial-card-a contact-review shadow mt40" :items="1" :nav="false" :autoplay="true" :autoplaySpeed="1500" :loop="true" :dots="false">
                <div class="testimonial-card">
                  <div class="tt-text">
                    <p>Boxinall consistently delivered high-quality coding on time and within budget. The team was highly responsive, and internal stakeholders were particularly impressed with the vendor's cost-effective solutions.</p>
                  </div>
                  <div class="client-thumbs mt20">
                    <div class="media v-center">
                      <div class="user-image bdr-radius"></div>
                      <div class="media-body user-info v-center">
                        <h5>Nitesh Chaudhary</h5>
                        <p>Business Owner, <small>India</small></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="testimonial-card">
                  <div class="tt-text">
                    <p>The client is happy with Boxinall's services. The team delivers work on time, resulting in highly effective project management. Overall, the engagement has been highly successful. </p>
                  </div>
                  <div class="client-thumbs mt20">
                    <div class="media v-center">
                      <div class="user-image bdr-radius"> </div>
                      <div class="media-body user-info">
                        <h5>Ayushi</h5>
                        <p>CEO of skdbservices, <small>UAE</small></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="testimonial-card">
                  <div class="tt-text">
                    <p>From the get-go, Boxinall fully understood the client's requirements, allowing them to deliver a fully functioning solution in a timely manner. They managed each task well and worked with the utmost professionalism, making them an ideal partner for this project.</p>
                  </div>
                  <div class="client-thumbs mt20">
                    <div class="media v-center">
                      <div class="user-image bdr-radius"></div>
                      <div class="media-body user-info">
                        <h5>Rahul Singh</h5>
                        <p>Bigvaluetravels, <small>Delhi, India</small></p>
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
<script>
import EnquireFreeQuote from './EnquireFreeQuote.vue';
export default {
  components: {EnquireFreeQuote}
}
</script>
<style>
.typing {
    color:#ff3870 !important 
}
</style>