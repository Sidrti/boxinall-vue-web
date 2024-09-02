<template>
  <section
    class="breadcrumb-areav2 mt-20"
    :style="{ background: 'white', marginTop: '50px' }"
    data-background="../assets/images/banner/6.jpg"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="bread-titlev2">
            <!-- Use jsonData.title and jsonData.subtitle here -->

            <h1 class="wow fadeInUp title-black" data-wow-delay=".2s">
              {{ data.title1 }}<br />
              {{ data.title2 }}
            </h1>
            <h5
              class="mt20 wow fadeInUp sub-head title-black"
              data-wow-delay=".4s"
            >
              {{ data.subtitle }}
            </h5>
            <button class="btn funding-button">
              {{ data.bannerBtnTitle }}
              <span class="arrow">→</span>
            </button>
             <img
              :src="require(`@/assets/images/banner/${data.bannerImageSrc}`)"

              class="mt20 banner-image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    hideCtc: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.breadcrumb-areav2 {
  color: white;
  padding: 80px 0;
}

.title-text {
  font-size: 50px;
  line-height: 1.2;
  font-weight: 700;
  color: white;
}

.sub-head {
  font-size: 16px;
  color: black;
  line-height: 1.4;
  font-weight: 400;
}
.funding-button {
  border: 2px solid black;
  color: black;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 15px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  margin-top: 50px;
}

.funding-button:hover {
  background-color: #126bfb;
  border: 2px solid transparent;
}

.arrow {
  margin-left: 10px;
  transition: margin-left 0.3s ease;
}

.funding-button:hover .arrow {
  margin-left: 15px;
}

@media (max-width: 767px) {
  .title-text {
    font-size: 24px;
    line-height: 1.2;
    font-weight: 700;
  }

  .sub-head {
    font-size: 14px;
    line-height: 1.5;
    font-weight: 400;
  }
}
</style>
