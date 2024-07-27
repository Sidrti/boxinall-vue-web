<template>
    <div class="main">
      <div class="container">
        <div class="row align-items-center">
          <!-- Left Section -->
          <div class="col-md-6 text-left">
            <h1 class="funding-heading">
              <span class="gradient-text">$950</span> <span class="gradient-text">Million+</span> <span class="gradient-text">Raised</span>
            </h1>
            <h5 class="funding-subheading">
              Boxinall has helped over 1,000 startups bag more than $950 Million in funding for their outstanding applications.
            </h5>
            <button class="btn funding-button">
              Let's Discuss Your App Idea
              <span class="arrow">→</span>
            </button>
          </div>
          <!-- Right Section -->
          <div class="col-md-6 d-none d-md-block">
            <img
              :src="fundingImage"
              alt="Funding Image"
              class="funding-image"
            />
          </div>
          <div class="col-12 d-md-none">
            <img
              :src="fundingImage"
              alt="Funding Image"
              class="funding-image-mobile"
            />
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: "FundingRaised",
    data() {
      return {
        fundingImage: require('@/assets/images/business-people-meet.png') // Replace with actual image path
      };
    }
  };
  </script>

  <style scoped>
  .main {
    padding: 10px 0;
    background-color: black; /* Light background color */
  }

  .funding-heading {
    font-size: 35px;
    margin-bottom: 15px;
    font-weight: 700;
    line-height: 1.2;
    color: yellow;
  }

  .gradient-text {
    background: linear-gradient(to right, #ffcc00, #ff9900);
    -webkit-background-clip: text;
    color: transparent;
  }

  .funding-subheading {
    font-size: 24px;
    color: white;
    line-height: 1.8;
    font-weight: 500;
    margin-bottom: 30px;
  }

  .funding-button {
    border: 2px solid white;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 15px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
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

  .funding-image, .funding-image-mobile {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  /* Media Query for Mobile Devices */
  @media (max-width: 767px) {
    .main{
        margin-top: -100px;
    }
    .funding-heading {
      font-size: 36px; /* Adjust font size for mobile */
      line-height: 1.2;
    }

    .funding-subheading {
      font-size: 16px; /* Adjust font size for mobile */
      line-height: 1.7;
      font-weight: 500;
    }

    .funding-button {
      padding: 8px 15px; /* Adjust padding for mobile */
      font-size: 14px; /* Adjust font size for mobile */
      margin-bottom: 10px;
    }

    .arrow {
      margin-left: 5px; /* Adjust arrow margin for mobile */
    }

    .d-md-block {
      display: none; /* Hide the image section on mobile */
    }

    .d-md-none {
      display: block; /* Show the image section on mobile */
    }
  }
  </style>
