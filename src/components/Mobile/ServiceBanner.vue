<template>
    <section class="breadcrumb-areav2 mt-20" :style="{ background: 'black' ,marginTop:'50px'}" data-background="../assets/images/banner/6.jpg">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="bread-titlev2">
                        <h1 class="wow fadeInUp title-text" data-wow-delay=".2s" >Mobile App<br/>Development Services</h1>
                        <h5 class="mt20 wow fadeInUp sub-head" data-wow-delay=".4s" >Embrace the future of app development with our scalable solutions built on disruptive technologies.</h5>
                        <a v-if="!hideCtc" href="#/contact" class="btn-main bg-btn2 lnk mt20 wow zoomInDown" data-wow-delay=".6s">Get Quote <i class="fas fa-chevron-right fa-icon"></i><span class="circle"></span></a>
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

.title-text {
  font-size: 80px; /* Default font size for larger screens */
  line-height: 1.2; /* Adjust line height for space between lines */
  color: white;
}

.sub-head {
  font-size: 24px; /* Default font size for larger screens */
  color: white;
  font-weight: 400;
}

/* Media Query for Mobile Devices */
@media (max-width: 767px) {
  .title-text {
    font-size: 40px; /* Smaller font size for mobile */
  }

  .sub-head {
    font-size: 18px; /* Smaller font size for mobile */
  }
}
</style>

