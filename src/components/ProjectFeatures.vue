<template>
    <section class="case-study pad-tb bg-gradient6 deep-dark">
        <div class="container text-start">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="common-heading">
                        <span>App Features</span>
                        <h2 class="mb30">{{ data.title }}</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <h4 class="mt20 mb10">{{ data.subTitle1 }}</h4>
                    <ul class="list-style-">
                        <li v-for="item,index in data.description1" :key="index">{{ item }}</li>
                    </ul>
                </div>
                <div class="col-lg-6">
                    <h4 class="mt20 mb10">{{ data.subTitle1 }}</h4>
                    <ul class="list-style-">
                        <li v-for="item,index in data.description2" :key="'description2'+index">{{ item }}</li>
                    </ul>
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