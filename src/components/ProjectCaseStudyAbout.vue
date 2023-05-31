<template>
    <section class="case-study pad-tb">
        <div class="container text-start">
            <div class="row">
                <div class="col-lg-6">
                    <div class="image-block upset">
                        <img :src="data.primaryImgSrc" alt="case study" class="img-fluid no-shadow" />
                    </div>
                </div>
                <div class="col-lg-6 block-1 v-center">
                    <div class="common-heading inner-heading text-l pl25">
                        <span>About The Project</span>
                        <h2>{{ data.title2 }}</h2>
                        <p>{{ data.about }}</p>
                    </div>
                    <div class="project-platform mt60 pl25 text-start">
                        <div v-for="item,index in data.icons" :key="index" class="project-platform-used -shadow"><a><img :src="item"
                                    alt="technology"></a></div>
                    </div>
            </div>
        </div>
    </div>
</section></template>
<script>
export default {
    props:['data']
}
</script>