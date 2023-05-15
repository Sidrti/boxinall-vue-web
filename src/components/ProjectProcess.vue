<template>
    <section class="service-block pad-tb light-dark">
        <div class="container text-start">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="common-heading ptag">
                        <span>Process</span>
                        <h2>{{  data.process.title }}</h2>
                        <p>{{  data.process.subTitle}}</p>
                    </div>
                </div>
            </div>
            <div v-for="item,index in data.process.processList" :key="index">
                <div class="row upset justify-content-center mt60" v-if="index%2 == 0">
                <div class="col-lg-4 v-center order1">
                    <div class="image-block1">
                        <img :src="item.src" :alt="item.alt" class="img-fluid" />
                        <!-- <img :src="item.src" :alt="item.alt" class="img-fluid" /> -->
                    </div>
                </div>
                <div class="col-lg-7 v-center order2">
                    <div class="ps-block">
                        <span>{{ index+1 }}</span>
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.description }}</p>
                    </div>
                </div>
            </div>
            <div class="row upset justify-content-center mt60" v-if="index%2 !=0">
                <div class="col-lg-7 v-center order2">
                    <div class="ps-block">
                        <span>{{ index + 1 }}</span>
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.description}}</p>
                    </div>
                </div>
                <div class="col-lg-4 v-center order1">
                    <div class="image-block1">
                        <img :src="item.src" :alt="item.src" class="img-fluid" />
                    </div>
                </div>
            </div>
            </div>
            <!-- <div class="row upset justify-content-center mt60">
                <div class="col-lg-4 v-center order1">
                    <div class="image-block1">
                        <img src="../assets/images/process/process-3.jpg" alt="Process" class="img-fluid" />
                    </div>
                </div>
                <div class="col-lg-7 v-center order2">
                    <div class="ps-block">
                        <span>3</span>
                        <h3>Deployment</h3>
                        <p>Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi.
                            Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis.
                            Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.</p>
                    </div>
                </div>
            </div>
            <div class="row upset justify-content-center mt60">
                <div class="col-lg-7 v-center order2">
                    <div class="ps-block">
                        <span>4</span>
                        <h3>Support & Maintenance</h3>
                        <p>Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi.
                            Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis.
                            Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.</p>
                    </div>
                </div>
                <div class="col-lg-4 v-center order1">
                <div class="image-block1">
                    <img src="../assets/images/process/process-4.jpg" alt="Process" class="img-fluid" />
                </div>
            </div>
        </div> -->
    </div>
</section></template>
<script>
export default {
    props:['data'],
}
</script>