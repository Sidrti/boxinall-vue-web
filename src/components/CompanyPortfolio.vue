<template>
    <section class="portfolio-section-nx pad-tb">
        <div class="container text-start">
            <div class="row justify-content-center ">
                <div class="col-lg-8">
                    <div class="common-heading">
                        <span>Our Work</span>
                        <h2 class="mb0">Our Latest Creative Work</h2>
                    </div>
                </div>
            </div>
            <div class="row mt60">

                <div class="col-lg-12 col-sm-12 wptbb" v-for="item, index in filteredPortfolioList" :key="index">
                    <div class="pbwide shadow" :class="item.bgClass">
                        <div class="portfolio-item-info-tt">
                            <!-- <div class="logowide mb20"><img :src="item.secondaryImg" alt="logo" class="img-fluid"></div> -->
                            <div class="widebloktag">
                                <span v-for="i, indx in item.stack" :key="'stack' + indx">{{ i
                            }}</span>
                            </div>
                            <h3 class="mt30 mb30">{{ item.title }}</h3>
                            <ul class="info-list-ul">
                                <li v-for="it, i in item.description" :key="i">{{ it }}</li>
                            </ul>
                            <router-link class="btn-outline lnk mt30" :to="item.to"> View Case Study<i
                                    class="fas fa-chevron-right fa-icon"></i><span class="circle"></span></router-link>

                            <a class="btn-outline lnk mt30 bg-gray" :href="item.link"> Visit Link<i
                            class="fas fa-chevron-right fa-icon"></i><span class="circle"></span></a>
                        </div>
                        <div class="portfolio-wide-image">
                            <div class="img-wide-blocktt tilt-outer">
                                <div class="innerwidedevice tilt-inner" data-tilt data-tilt-max="4" data-tilt-speed="1000"
                                    data-tilt-perspective="2000" ref="tilt1">
                                    <div class="desktopblock shadow1"><img :src="item.primaryWebImg" alt="img"
                                            class="img-fluid"> </div>
                                    <div class="mobileblock shadow1"><img :src="item.primaryMobileImg" alt="img"
                                            class="img-fluid"> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <!-- <div class="col-lg-12 col-sm-12 wptbb">
                    <div class="pbwide shadow bg-gradient2">
                        <div class="portfolio-item-info-tt">
                            <div class="logowide mb20"><img src="../assets/images/client/customer-logo-3.png" alt="logo"
                                    class="img-fluid"></div>
                            <div class="widebloktag"><span>Design</span> <span>Coding</span> <span>Design</span> </div>
                            <h3 class="mt30 mb30">Rethinking how we find & hire photographer</h3>
                            <ul class="info-list-ul">
                                <li>Product Strategy</li>
                                <li>Product UI/UX Design</li>
                                <li>Branding Design</li>
                                <li>Design System</li>
                            </ul>
                            <a href="#" class="btn-outline lnk mt30">View Case Study <i
                                    class="fas fa-chevron-right fa-icon"></i><span class="circle"></span></a>
                        </div>
                        <div class="portfolio-wide-image">
                            <div class="img-wide-blocktt tilt-outer">
                                <div class="innerwidedevice tilt-inner" data-tilt data-tilt-max="4" data-tilt-speed="1000"
                                    data-tilt-perspective="2000" ref="tilt2">
                                    <div class="desktopblock shadow1"><img
                                            src="../assets/images/portfolio/portfolio-wide-2.jpg" alt="img"
                                            class="img-fluid"> </div>
                                    <div class="mobileblock shadow1"><img
                                            src="../assets/images/portfolio/portfolio-wide-2a.jpg" alt="img"
                                            class="img-fluid"> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-sm-12 wptbb">
                    <div class="pbwide shadow bg-gradient3">
                        <div class="portfolio-item-info-tt">
                            <div class="logowide mb20"><img src="../assets/images/client/customer-logo-7.png" alt="logo"
                                    class="img-fluid"></div>
                            <div class="widebloktag"><span>Design</span> <span>Coding</span> <span>Design</span> </div>
                            <h3 class="mt30 mb30">Rethinking how we find & hire photographer</h3>
                            <ul class="info-list-ul">
                                <li>Product Strategy</li>
                                <li>Product UI/UX Design</li>
                                <li>Branding Design</li>
                                <li>Design System</li>
                            </ul>
                            <a href="#" class="btn-outline lnk mt30">View Case Study <i
                                    class="fas fa-chevron-right fa-icon"></i><span class="circle"></span></a>
                        </div>
                        <div class="portfolio-wide-image">
                            <div class="img-wide-blocktt tilt-outer">
                                <div class="innerwidedevice tilt-inner" data-tilt data-tilt-max="4" data-tilt-speed="1000"
                                    data-tilt-perspective="2000" ref="tilt3">
                                    <div class="desktopblock shadow1"><img
                                            src="../assets/images/portfolio/portfolio-wide-3.jpg" alt="img"
                                            class="img-fluid"> </div>
                                    <div class="mobileblock shadow1"><img
                                            src="../assets/images/portfolio/portfolio-wide-3a.jpg" alt="img"
                                            class="img-fluid"> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-sm-12 wptbb">
                    <div class="pbwide shadow bg-gradient4">
                        <div class="portfolio-item-info-tt">
                            <div class="logowide mb20"><img src="../assets/images/client/customer-logo-5.png" alt="logo"
                                    class="img-fluid"></div>
                            <div class="widebloktag"><span>Design</span> <span>Coding</span> <span>Design</span> </div>
                            <h3 class="mt30 mb30">Rethinking how we find & hire photographer</h3>
                            <ul class="info-list-ul">
                            <li>Product Strategy</li>
                            <li>Product UI/UX Design</li>
                            <li>Branding Design</li>
                            <li>Design System</li>
                        </ul>
                        <a href="#" class="btn-outline lnk mt30">View Case Study <i
                                class="fas fa-chevron-right fa-icon"></i><span class="circle"></span></a>
                    </div>
                    <div class="portfolio-wide-image">
                        <div class="img-wide-blocktt tilt-outer">
                            <div class="innerwidedevice tilt-inner" data-tilt data-tilt-max="4" data-tilt-speed="1000"
                                data-tilt-perspective="2000" ref="tilt4">
                                <div class="desktopblock shadow1"><img
                                        src="../assets/images/portfolio/portfolio-wide-4.jpg" alt="img"
                                        class="img-fluid"> </div>
                                <div class="mobileblock shadow1"><img
                                        src="../assets/images/portfolio/portfolio-wide-4a.jpg" alt="img"
                                        class="img-fluid"> </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div> -->
            </div>
        </div>
    </section>
</template>
<style>
.bg-gray {
    background-color: #333333;
    color: white;
    margin-left: 5px;
}
</style>
<script>
import portfolio from '../assets/data/portfolio.json'
import VanillaTilt from 'vanilla-tilt';
export default {
    mounted() {
        this.initTint();
    },
    methods: {
        initTint() {
            VanillaTilt.init(this.$refs.tilt1, {})
            VanillaTilt.init(this.$refs.tilt2, {})
            VanillaTilt.init(this.$refs.tilt3, {})
            VanillaTilt.init(this.$refs.tilt4, {})
        }
    },
    data() {
        return {
            portfolioList: portfolio ? portfolio : []
        }
    },
    computed: {
        filteredPortfolioList() {
            return this.portfolioList.filter(item => {
                return item.pageVisibleInUrl === this.$route.path || item.pageVisibleInUrl === '*';
            });
        }
    }
}
</script>