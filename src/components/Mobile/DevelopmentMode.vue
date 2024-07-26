<template>
    <div class="main">
      <div class="container">
        <h1 class="text-white text-start mb-4 text-title">
          Custom Mobile App Development<br />
          Services Paving the Way to<br />
          Digital Transformation
        </h1>
        <h5 class="text-white text-start mb-4" style="opacity: 0.9">
          Our expert team specializes in creating robust and scalable mobile
          applications that redefine industry standards within the mobile-first
          landscape. Our mobile app development services can help you confidently
          navigate the ever-evolving mobile landscape and seize the opportunities
          that guarantee maximum ROI.
        </h5>
        <!-- card no 05 - 08 -->
        <div class="row justify-content-center">
          <!-- Loop through industryData array to generate cards -->
          <div
            v-for="industry in industryData"
            :key="industry.name"
            class="col-lg-4 col-md-6 mb-4"
          >
            <div class="card bg-dark p-4">
              <div class="d-flex align-items-center mb-3">
                <div class="card-image">
                  <img :src="industry.icon" alt="Logo" class="card-logo" />
                </div>
              </div>
              <h2 class="text-white card-title mb-4" style="opacity: 0.9">
                {{ industry.name }}
              </h2>
              <p class="text-white card-text text-description" v-html="industry.description">
                <!-- Using v-html to render HTML content -->
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: "IndustryComponent",
    data() {
      return {
        industryData: [
          {
            name: "React Native Application Development",
            icon: require("@/assets/images/icons/react-native.png"),
            description:
              'Our exceptional <span style="color: #00cbca;">React Native Development company</span> assures the development of fast and seamless cross-platform mobile applications that excel in performance, scalability, and technological prowess. Our goal-oriented, result-driven approach ensures the delivery of customized mobile solutions, meeting the unique business needs of clients worldwide and exceeding their expectations.',
            route: "/ecommerce",
          },
          {
            name: "Progressive Web Application Development",
            icon: require("@/assets/images/icons/progressive-web.png"),
            description:
              'As a <span style="color: #00cbca;">Progressive Web Application Development company</span>, our services bridge the gap between mobile and web platforms. Our expert developers ensure the integration of unique features into your progressive web apps, optimizing them to offer a near-native experience and seamless performance, thereby making way for increased user engagement and heightened ROI.',
            route: "/medical",
          },
          {
            name: "Android Application Development",
            icon: require("@/assets/images/icons/android-app.png"),
            description:
              'We provide Comprehensive <span style="color: #00cbca;"> Android Application Development service</span>, custom to your specific business requirements. Our expert app developers are well-versed in guiding clients through the intricate journey of conceptualizing and building enterprise-grade Android applications.',
            route: "/ecommerce",
          },
        ],
      };
    },
  };
  </script>

  <style scoped>
  .main {
    background-color: black;
    padding-top: 100px;
  }

  .card {
    transition: transform 0.3s; /* Smooth transform transition */
    height: 600px; /* Fixed height for all cards */
    border: 1px solid grey;
    border-radius: 15px;
    position: relative; /* For absolute positioning of elements inside */
    overflow: hidden; /* Ensures content doesn't overflow */
    background-color: black; /* Ensures default background is transparent */
  }

  .card-image {
    width: 80px;
    height: 80px;
    margin-right: 15px;
    background-color: #1c1c1c; /* Default background color */
    padding: 20px;
    border-radius: 10px;
    transition: background-color 0.3s; /* Smooth transition for background color change */
  }

  .card:hover .card-image {
    background-color: rgba(0, 0, 0, 0.094); /* Background color change on hover */
  }

  .card:hover {
    background-color: blue !important; /* Background color change on hover */
  }

  .card-logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .card-title {
    font-size: 30px;
    line-height: 1.2;
  }

  .card-title,
  .card-text {
    color: white; /* Ensures text color changes with background */
  }

  .card-text {
    font-size: 17px;
    line-height: 1.4;
  }

  .text-title {
    font-size: 40px; /* Default font size for larger screens */
    line-height: 1.2; /* Adjust line height for space between lines */
    color: white;
  }

  /* Media Query for Mobile Devices */
  @media (max-width: 767px) {
    .text-title {
      font-size: 26px; /* Smaller font size for mobile */
    }
    .text-description{
        font-size: 16px !important;
    }
    .card-title {
      font-size: 20px; /* Smaller font size for card titles on mobile */
    }

    .card-text {
      font-size: 14px; /* Smaller font size for card text on mobile */
    }

    .card {
      height: auto; /* Remove fixed height for cards on mobile */
    }
  }
  </style>
