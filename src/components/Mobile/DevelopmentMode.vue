<template>
    <div class="container mt-5">
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
      <!-- card no  05 - 08 -->
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
                <img
                  :src="industry.icon"
                  alt="Logo"
                  class="card-logo"
                />
              </div>
            </div>
            <h2 class="text-white card-title mb-4" style="opacity: 0.9">
              {{ industry.name }}
            </h2>
            <h6 class="text-white card-text" style="opacity: 0.8">
              {{ industry.description }}
            </h6>
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
            icon: require("@/assets/images/strategyProcess/contact-support.png"), // Replace with actual icon path
            description:
              "Our exceptional React Native Development company assures the development of fast and seamless cross-platform mobile applications that excel in performance, scalability, and technological prowess. Our goal-oriented, result-driven approach ensures the delivery of customized mobile solutions, meeting the unique business needs of clients worldwide and exceeding their expectations.",
            route: "/ecommerce",
          },
          {
            name: "Progressive Web Application Development",
            icon: require("@/assets/images/strategyProcess/contact-support.png"), // Replace with actual icon path
            description:
              "Our services bridge the gap between mobile and web platforms. Our expert developers ensure the integration of unique features into your progressive web apps, optimizing them to offer a near-native experience and seamless performance, thereby making way for increased user engagement and heightened ROI.",
            route: "/medical",
          },
          {
            name: "Wearable Application Development",
            icon: require("@/assets/images/strategyProcess/contact-support.png"), // Replace with actual icon path
            description:
              "Our exceptional React Native development company assures the development of fast and seamless cross-platform mobile applications that excel in performance, scalability, and technological prowess. Our goal-oriented, result-driven approach ensures the delivery of customized mobile solutions, meeting the unique business needs of clients worldwide and exceeding their expectations.",
            route: "/ecommerce",
          },
        ],
      };
    },
  };
  </script>

  <style scoped>
  .card {
    transition: transform 0.3s; /* Smooth transform transition */
    height: 600px; /* Fixed height for all cards */
    border: 1px solid white;
    position: relative; /* For absolute positioning of elements inside */
    overflow: hidden; /* Ensures content doesn't overflow */
    background-color: transparent; /* Ensures default background is transparent */
  }

  .card:hover {
    transform: translateY(-5px); /* Slight lift effect on hover */
  }

  .card-image {
    width: 80px;
    height: 80px;
    margin-right: 15px;
    background-color: black; /* Default background color */
    padding: 20px;
    border-radius: 10px;
    transition: background-color 0.3s; /* Smooth transition for background color change */
  }
  .card:hover .card-image {
    background-color:  rgba(0, 0, 0, 0.094); /* Background color change on hover */
  }

  .card:hover  {
    background-color: blue !important; /* Background color change on hover */
  }

  .card-logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .card-title,
  .card-text {
    color: white; /* Ensures text color changes with background */
  }

  .text-title {
    font-size: 50px; /* Increase font size */
    line-height: 1.2; /* Adjust line height for space between lines */
    color: white;
  }
  </style>
