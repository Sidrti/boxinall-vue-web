<template>
    <div class="col-lg-4 col-sm-6 mt30" data-aos="fadeInUp" :data-aos-delay="aosDelay" data-aos-duration="1000">
        <!-- <div class="s-block up-hor ovr-base">
            <div class="nn-card-set">
                <div class="s-card-icon"><img src="../assets/../assets/images/icons/branding.svg" alt="service" class="img-fluid" />
                </div>
                <h4>Social Media Marketing</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <router-link class="menu-links" to="/process/android-development">View More <i
                        class="fas fa-chevron-right fa-icon"></i></router-link>
            </div>
        </div> -->
        <div class="service-card-app hoshd">
            <h4>{{ data.title }}</h4>
            <ul class="-service-list mt10">
                <li v-for="item,index in data.subTitleList" :key="'subtitle'+index" > {{ item.title }} </li>
            </ul>
            <div class="tec-icon mt30">
                <ul class="servc-icon-sldr">
                    <li v-for="item,index in data.iconsList" :key="'icon'+index">
                        
                            <div class="img-iconbb"><img :src="item.src" :alt="item.alt"></div>
                        
                    </li>
                    <!-- <li><a href="#">
                            <div class="img-iconbb"><img src="../assets/images/icons/apple.svg" alt="img"></div>
                        </a></li>
                    <li><a href="#">
                            <div class="img-iconbb"><img src="../assets/images/icons/tablet.svg" alt="img"></div>
                        </a></li> -->
                </ul>
            </div>
            <p class="mt20">{{ data.description }}
            </p>
            <router-link class="mt20 link-prbs" :to=" data.to">Read More <i
                    class="fas fa fa-arrow-circle-right"></i></router-link>
        </div>
    </div>
</template>
<script>
export default {
    props: ['aosDelay','data'],
}
</script>