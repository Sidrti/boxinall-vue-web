<template>
    <section class="case-study pad-tb">
        <div class="container text-start">
            <div class="row">
                <div class="col-lg-6 col-sm-6">
                    <h2 class="mt20 mb20">{{ data.title }}</h2>
                    <p>{{ data.subTitle }}</p>
                    <ul class="list-style- mt30">
                        <li v-for="item,index in data.description" :key="'des'+index">{{ item }}</li>
                    </ul>
                </div>
                <div class="col-lg-6 col-sm-6">
                    <div class="project-view m-mt30">
                        <img :src="data.primaryImgSrc" alt="case study" class="img-fluid" />
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