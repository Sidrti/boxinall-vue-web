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
        <div class="container badge-slider-container">
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

  .badge-slider-container {
    padding-inline: 100px;
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

  /* Mobile styles */
  @media (max-width: 768px) {
    .heading-title {
      font-size: 26px; /* Smaller font size for mobile */
      line-height: 1.2;
      padding-inline: 10px; /* Less padding on mobile */
    }

    .badge-slider-container {
      padding-inline: 10px; /* Less padding for the slider container on mobile */
    }

    .badge-slider .img-badge {
      border-right: 1px solid black; /* Thinner border for mobile */
      padding-right: 5px; /* Less space between the image and the line */
    }

    .img100w {
      max-width: 80%; /* Limit the width of the images on mobile */
    }
  }
  </style>
