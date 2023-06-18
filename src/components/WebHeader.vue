<template>
  <div>
    <header class="nav-bg-b main-header navfix fixed-top menu-white" :class="{ sticky: isSticky }">
    <div class="container m-pad">
      <div class="menu-header">
        <div class="dsk-logo"><a class="nav-brand" href="/">
            <img src="../assets/../assets/images/biaLOGO.png" alt="Logo" class="mega-white-logo" />
            <img src="../assets/../assets/images/black_logo.png" alt="Logo" class="mega-darks-logo" />
          </a>
        </div>
        <div class="custom-nav" role="navigation">
          <ul class="nav-list onepge">
            <li><router-link to="/" class="menu-links">Home</router-link></li>


            <li class="sbmenu rpdropdown text-start">
              <router-link to="/services" class="menu-links">Services</router-link>
              <div class="nx-dropdown menu-dorpdown">
                <div class="sub-menu-section">
                  <div class="sub-menu-center-block">
                    <div class="sub-menu-column smfull">
                      <ul>
                        <li class="underline" v-for="item, index in servicesList" :data="item" :key="index">
                        <router-link :to="item.to">{{ item.title }}</router-link>  
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li><router-link class="menu-links" to="/about">About</router-link></li>
            <li><router-link class="menu-links" to="/portfolio">Portfolio</router-link></li>
            <li><router-link class="btn-outline lnk" to="/contact">Contact Us<i class=""></i></router-link> </li>
          </ul>
          <!-- <div class="custom-nav" role="navigation">
            <ul class="nav-list">
              <li><a data-bs-toggle="offcanvas" href="#offcanvasExample" class="btn-round- btn-br bg-btn2"><i class="fas fa-bars"></i></a></li>
              <li><a data-bs-toggle="offcanvas" href="#offcanvasExample" class="btn-br bg-btn3 btshad-b2 lnk floating-button ">Request A Quote <span class="circle"></span></a> </li>
            </ul>
          </div> -->
        </div>
        <!-- <div class="mobile-menu2">
          <ul class="mob-nav2">
            <li><a href="#" class="btn-round- trngl btn-br bg-btn btshad-b1" data-bs-toggle="modal"
                data-bs-target="#menu-popup"><i class="fas fa-envelope-open-text"></i></a></li>
            <li class="navm-"> <a class="toggle" href="#"><span></span></a></li>
          </ul>
        </div> -->
        <a href="#offcanvasExample" class="position-fixed fixed-bottom fixed-end btn-roundbtn-round- trngl btn-br bg-btn btshad-b1 w-10 mb-2 ms-3" data-bs-toggle="offcanvas"
                ><i class="fas fa-envelope-open-text" data-bs-toggle="tooltip" data-bs-placement="right" title="Book Consultation"></i></a>
        <!-- <a data-bs-toggle="offcanvas" href="#offcanvasExample" class="position-fixed fixed-bottom fixed-end btn-round- trngl btn-br bg-btn btshad-b1"></a> -->
      </div>
      <!--Mobile Menu-->
      <nav id="main-nav">
        <ul class="first-nav">
          <li><a href="#home" class="menu-links">Home</a></li>
          <li><a href="#services" class="menu-links">Services</a></li>
          <li><a href="#work" class="menu-links">Work</a></li>
          <li><a href="#price" class="menu-links">Price</a></li>
        </ul>
        <ul class="bottom-nav">
          <li class="prb">
            <a href="tel:+11111111111">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384">
                <path
                  d="M353.188,252.052c-23.51,0-46.594-3.677-68.469-10.906c-10.719-3.656-23.896-0.302-30.438,6.417l-43.177,32.594
                    c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208,11.167-20.198,7.635-31.448
                    c-7.26-21.99-10.948-45.063-10.948-68.583C132.146,13.823,118.323,0,101.333,0H30.813C13.823,0,0,13.823,0,30.813
                    C0,225.563,158.438,384,353.188,384c16.99,0,30.813-13.823,30.813-30.813v-70.323C384,265.875,370.177,252.052,353.188,252.052z" />
              </svg>
            </a>
          </li>
          <li class="prb">
            <a href="mailto:somewebmedia@gmail.com">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </a>
          </li>
          <li class="prb">
            <a href="skype:niwax.company?call">
              <svg enable-background="new 0 0 24 24" height="18" viewBox="0 0 24 24" width="18"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m23.309 14.547c1.738-7.81-5.104-14.905-13.139-13.543-4.362-2.707-10.17.352-10.17 5.542 0 1.207.333 2.337.912 3.311-1.615 7.828 5.283 14.821 13.311 13.366 5.675 3.001 11.946-2.984 9.086-8.676zm-7.638 4.71c-2.108.867-5.577.872-7.676-.227-2.993-1.596-3.525-5.189-.943-5.189 1.946 0 1.33 2.269 3.295 3.194.902.417 2.841.46 3.968-.3 1.113-.745 1.011-1.917.406-2.477-1.603-1.48-6.19-.892-8.287-3.483-.911-1.124-1.083-3.107.037-4.545 1.952-2.512 7.68-2.665 10.143-.768 2.274 1.76 1.66 4.096-.175 4.096-2.207 0-1.047-2.888-4.61-2.888-2.583 0-3.599 1.837-1.78 2.731 2.466 1.225 8.75.816 8.75 5.603-.005 1.992-1.226 3.477-3.128 4.253z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <div class="niwaxofcanvas offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample">
      <div class="offcanvas-body">
        <div class="cbtn animation">
          <div class="btnclose"> <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button></div>
        </div>
        <div class="form-block sidebarform">
          <h4>Request A Quote</h4>
          <EnquireFreeQuote></EnquireFreeQuote>
        </div>
        <div class="getintouchblock mt30">
          <h4>Get In Touch</h4>
          <p class="mt10">Please fill out the form below if you have a plan or project in mind that you'd like to share with us.</p>
          <div class="media mt15">
            <div class="icondive"><img src="../assets/images/icons/call.svg" alt="icon"></div>
            <div class="media-body getintouchinfo">
              <a href="tel:+918279607423">+91-827 9607 423 <span>Mon-Fri 9am - 6pm</span></a>
            </div>
          </div>
          <div class="media mt15">
            <div class="icondive"><img src="../assets/images/icons/whatsapp.svg" alt="icon"></div>
            <div class="media-body getintouchinfo">
              <a href="tel:+918279607423">+91-827 9607 423 <span>Mon-Fri 9am - 6pm</span></a>
            </div>
          </div>
          <div class="media mt15">
            <div class="icondive"><img src="../assets/images/icons/mail.svg" alt="icon"></div>
            <div class="media-body getintouchinfo">
              <a href="mailto:info@boxinallsoftech.com">info@boxinallsoftech.com <span>Online Support</span></a>
            </div>
          </div>
          <div class="media mt15">
            <div class="icondive"><img src="../assets/images/icons/map.svg" alt="icon"></div>
            <div class="media-body getintouchinfo">
              <a href="mailto:info@website.com">Gaur City 2, 16th Avenue, Noida, India<span>Visit Our Office</span></a>
            </div>
          </div>
        </div>
        <div class="contact-data mt30">
          <h4>Follow Us On:</h4>
          <div class="social-media-linkz mt10">
            <a href="https://www.facebook.com/boxinall" target="blank"><i class="fab fa-facebook"></i></a>
            <a href="https://twitter.com/Boxinall?s=09" target="blank"><i class="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/boxinall_/?igshid=1s)xkxoumwfia" target="blank"><i class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/boxinall-softech-pvt-ltd/" target="blank"><i class="fab fa-linkedin"></i></a>
            <!-- <a href="javascript:void(0)" target="blank"><i class="fab fa-youtube"></i></a>
            <a href="javascript:void(0)" target="blank"><i class="fab fa-pinterest-p"></i></a>             			   -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import data from '../assets/data/service.json'
import EnquireFreeQuote from './EnquireFreeQuote.vue';

export default {
    name: "WebHeader",
    data() {
        return {
            isSticky: false,
            servicesList: data,
        };
    },
    mounted() {
        window.addEventListener("scroll", this.updateScroll);
        this.updateScroll();
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.updateScroll);
    },
    methods: {
        updateScroll() {
            this.isSticky = window.scrollY >= 80;
        },
    },
    components: { EnquireFreeQuote }
}
</script>
<style scoped>
.underline:hover {
  text-decoration: underline;
  text-decoration-color: #c069d5;
  text-decoration-thickness: 3px;
  text-decoration-style: solid;
  text-underline-offset: 5px;
}
.w-10 {
  width:70px !important
}
</style>