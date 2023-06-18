<template>
    <section class="hero-card-web mobile-app-">
        <div class="hero-main-rp container-fluid text-start">
            <div class="row">
                <div class="col-lg-6 v-center">
                    <div class="hero-heading-sec2 niwax" data-rellax-speed="3">
                        <h1 class="" data-aos="fadeIn" :data-aos-delay="200" data-aos-duration="1000">Top Rated Mobile App Development Company</h1>
                        <p class="" data-aos="fadeIn" :data-aos-delay="400" data-aos-duration="1000">Schedule a consultation with our team to discuss your idea. If we believe in It, you could be one of our exclusive clients this month. We can't wait to hear about your vision! </p>
                        <div class="content-sec  d-flex mt30 v-center text-w" data-aos="fadeIn" :data-aos-delay="600" data-aos-duration="1000">
                            <div class="mr25"><a href="#/contact" class="btn-main bg-btn4 lnk">Let's discuss your idea
                            <i class="fas fa-chevron-right fa-icon"></i><span class="circle"></span></a></div>
                        </div>
                        <div class="awrd-sec text-w mt40" data-aos="fadeIn" :data-aos-delay="500">
                            <h5>Our Achievements</h5>
                            <VueOwlCarousel class="bages-slider mt20" :autoplay="true" :nav="false" :loop="true" :items="3"
                                :autoplaySpeed="2000" :dots="false" :autoplayTimeout="1900">

                                <div class="img-badge- margin-right20"><a> <img src="../assets/images/icons/clutch.png"
                                            alt="niwax mobile app development company" class="img100w"></a> </div>
                                <div class="img-badge- margin-right20"><a> <img src="../assets/images/icons/mobile.png"
                                            alt="niwax mobile app development company" class="img100w"></a> </div>
                                <div class="img-badge- margin-right20"><a> <img
                                            src="../assets/images/icons/business of apps.png"
                                            alt="niwax mobile app development company" class="img100w"></a> </div>
                                <div class="img-badge- margin-right20"><a> <img src="../assets/images/icons/goodfirms.png"
                                            alt="niwax mobile app development company" class="img100w"></a> </div>
                            </VueOwlCarousel>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 v-center">

                    <div>
                        <div class="form-block formcover shadow sidebarform">
                            <h4 class="mb-3">Request a Free Quote</h4>
                               <EnquireFreeQuote></EnquireFreeQuote>

                            <!-- <form ref="form" data-bs-toggle="validator" class="shake mt30">
                                <div class="row">
                                    <div class="form-group col-sm-6">
                                        <input type="text" id="name" placeholder="Enter name" required
                                            data-error="Please fill Out" v-model="input.name">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                    <div class="form-group col-sm-6">
                                        <input type="email" id="email" placeholder="Enter email" required
                                            v-model="input.email">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-sm-6">
                                        <input type="text" id="mobile" placeholder="Enter mobile (with country code)" required
                                            data-error="Please fill Out" v-model="input.mobile">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                    <div class="form-group col-sm-6">
                                        <select name="Dtype" required v-model="input.interest">
                                            <option value=""  disabled selected>Select an option</option>
                                            <option :value="item.title"  v-for="item,index in servicesList" :key="index">{{ item.title }}</option>
                                        </select>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <textarea id="message" rows="5" placeholder="Enter your message" required
                                        v-model="input.breif"></textarea>
                                    <div class="help-block with-errors"></div>
                                </div>
                                <span class="btn btn-main bg-btn3" @click="submitClick" :class="{ 'loading': $store.state.loader.loading }">
                                    <span v-if="$store.state.loader.loading">Loading...</span>
                                    <span v-else>Submit</span>
                                </span>
                                <div id="msgSubmit" class="h3 text-center hidden"></div>
                                <div class="clearfix"></div>
                            </form> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import EnquireFreeQuote from './EnquireFreeQuote.vue';

export default {
    components:{
        EnquireFreeQuote
    }
}
</script>
<style scoped>
.typed-inline {
    display: inline;
    color: #ff3870 !important;
}

.margin-right20 {
    margin-right: 20px;
}

</style>