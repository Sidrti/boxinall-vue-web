<template>
    <div class="main">
      <div class="badge-section">
        <!-- Heading -->
        <div class="container text-center mb-5">
          <h1 class="heading-title">
            The major awards and recognitions that have been bestowed to
            Boxinall over the years for Mobile App Development include:
          </h1>
        </div>

        <!-- Slider -->
         <div class="container" style="padding-inline: 100px;">


        <VueOwlCarousel
          class="badge-slider mt-5"
          :autoplay="true"
          :nav="false"
          :loop="true"
          :items="3"
          :autoplaySpeed="2000"
          :dots="false"
          :autoplayTimeout="1900"
        >
          <div class="img-badge">
            <a href="#">
              <img
                src="../assets/images/icons/clutch.png"
                alt="Clutch"
                class="img100w"
              />
            </a>
          </div>
          <div class="img-badge">
            <a href="#">
              <img
                src="../assets/images/icons/mobile.png"
                alt="Mobile"
                class="img100w"
              />
            </a>
          </div>
          <div class="img-badge">
            <a href="#">
              <img
                src="../assets/images/icons/business-of-apps.png"
                alt="Business of Apps"
                class="img100w"
              />
            </a>
          </div>
          <div class="img-badge">
            <a href="#">
              <img
                src="../assets/images/icons/goodfirms.png"
                alt="GoodFirms"
                class="img100w"
              />
            </a>
          </div>
        </VueOwlCarousel>
    </div>
      </div>
    </div>
  </template>

  <script>
  import VueOwlCarousel from "vue-owl-carousel";

  export default {
    name: "BadgeSlider",
    components: {
      VueOwlCarousel,
    },
  };
  </script>

  <style scoped>
  .main {
    background-color: white;
    margin-bottom: 100px;
  }
  .badge-section {
    padding: 20px;
    border-radius: 10px;
  }

  .heading-title {
    font-size: 45px;
    color: #333;
    padding-inline: 30px;
  }

  .badge-slider .img-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 2px solid black; /* Thin vertical line */
    padding-right: 10px; /* Space between the image and the line */
  }

  .img-badge:last-child {
    border-right: none; /* Remove border from the last item */
  }

  .img100w {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    .badge-slider {
      padding: 10px;
    }
  }
  </style>
