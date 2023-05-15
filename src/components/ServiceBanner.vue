<template>
    <section class="breadcrumb-areav2" data-background="../assets/images/banner/6.jpg">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-7">
                    <div class="bread-titlev2">
                        <h1 class="wow fadeInUp" data-wow-delay=".2s">{{ data.title ? data.title : '' }}</h1>
                        <p class="mt20 wow fadeInUp" data-wow-delay=".4s">{{ data.subtitle ? data.subtitle : '' }}</p>
                        <a href="#" class="btn-main bg-btn2 lnk mt20 wow zoomInDown" data-wow-delay=".6s">Get Quote <i
                                class="fas fa-chevron-right fa-icon"></i><span class="circle"></span></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: ['data']
}
</script>