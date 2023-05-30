<template>
    <section class="service pad-tb light-dark">
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <div class="text-l service-desc- pr25">
                        <h3 class="mb20">{{ data.overview.title }}</h3>
                        <p>{{ data.overview.subtitle }}</p>
                        <ul class="service-point-2 mt20">
                            <li v-for="item,index in data.overview.hashtags" :key="index">{{ item.name }}</li>
                            <!-- <li># 200+ Team Strength</li>
                            <li># User-Friendly Interface</li>
                            <li># 400 Happy Clients</li>
                            <li># 95% Repeat business</li>
                            <li># Quality Service UX</li> -->
                        </ul>
                        <div class="tec-icon mt30">
                            <ul class="servc-icon-sldr">
                                <li v-for="item,index in data.overview.iconList" :key="index">
                                        <div class="img-iconbb"><img :src="item.src" :alt="item.alt">
                                        </div>
                                    </li>
                                <!-- <li><a href="#">
                                        <div class="img-iconbb"><img src="../assets/images/icons/android.svg" alt="img">
                                        </div>
                                    </a></li>
                                <li><a href="#">
                                        <div class="img-iconbb"><img src="../assets/images/icons/apple.svg" alt="img"></div>
                                    </a></li>
                                <li><a href="#">
                                        <div class="img-iconbb"><img src="../assets/images/icons/tablet.svg" alt="img">
                                        </div>
                                    </a></li> -->
                            </ul>
                        </div>
                        <a href="#/contact" class="btn-main bg-btn2 lnk mt30">Request A Quote <i
                                class="fas fa-chevron-right fa-icon"></i><span class="circle"></span></a>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="servie-key-points">
                        <h4>Technology Stack</h4>
                        <ul class="key-points mt20">
                            <li v-for="item,index in data.overview.advantages" :key="index">{{ item.title }}</li>
                            <!-- <li >Strategize with The Valuable Data and Analytics</li>
                            <li>Content Performance and Lead Generation</li>
                            <li>Reduction in cost and raises standards</li>
                            <li>Improved Conversion Rates</li>
                            <li>More Cost Effective Than Traditional Marketing</li>
                            <li>Higher Revenues</li>
                            <li>Higher ROI from Your Campaigns</li>
                            <li>Earn People’s Trust and Build Brand Reputation</li>
                            <li>Know All About Your Competitors</li> -->
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props:['data']
}
</script>