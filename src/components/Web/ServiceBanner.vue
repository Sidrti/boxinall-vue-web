<template>
    <section class="breadcrumb-areav2 mt-20" :style="{ background: 'black' ,marginTop:'50px'}"   data-background="../assets/images/banner/6.jpg">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="bread-titlev2">
                        <h1 class="wow fadeInUp" data-wow-delay=".2s" style="font-size:60px;color: white;">Top Web Development Company</h1>
                        <h5 class="mt20 wow fadeInUp" data-wow-delay=".4s" style="font-size:20px;color: white;">Boxinall is a top website design and web development company based in India & USA, is committed to delivering the best web design and development services to businesses worldwide. Our team of expert specializing in creating custom websites, web applications, and web-tools that perfectly align with your business goals. With a 100% delivery rate, we are committed to providing the best available solutions that meet your specific needs.</h5>
                        <a v-if="!hideCtc" href="#/contact" class="btn-main bg-btn2 lnk mt20 wow zoomInDown" data-wow-delay=".6s">Get Quote <i
                                class="fas fa-chevron-right fa-icon"></i><span class="circle"></span></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['data', 'hideCtc']
}
</script>

<style scoped>
.breadcrumb-areav2 {
    color: white; /* Set text color to white */
    padding: 80px 0; /* Example padding, adjust as needed */
}
</style>
