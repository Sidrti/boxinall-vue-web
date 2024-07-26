<template>
    <div class="main">
      <div class="container market-future-container">
        <!-- Heading and Subheading -->
        <div class="text-center mb-5">
          <h1 class="text-black main-title">
            The mobile application development market size
            is expected to reach <span class="highlight">$567.19 billion in 2030</span>
          </h1>
          <p class="subhead">
            Take your business to new heights by offering unmatched
            mobility to your customers!
          </p>
        </div>

        <!-- Button -->
        <div class="text-center mb-5">
          <button class="btn discuss-button">
            Connect with an Expert <span class="arrow-right">&#10132;</span>
          </button>
        </div>

        <!-- Image -->
        <div class="text-center">
          <img :src="imageSrc" alt="Market Future Image" class="market-future-image" />
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: "MarketFuture",
    data() {
      return {
        imageSrc: require("@/assets/images/market/market.png") // Replace with your image path
      };
    },
  };
  </script>

  <style scoped>
  .main {
    background-color: white;
    padding-top: 100px; /* Reduced padding for mobile */
  }

  .market-future-container {
    padding: 20px;
    border-radius: 10px;
  }

  .main-title {
    font-size: 40px; /* Adjusted font size for mobile */
    line-height: 1.2;
    color: black;
  }

  .highlight {
    color: #007bff; /* Blue color for highlighting */
  }

  .subhead {
    color: black;
    font-size: 18px; /* Adjusted font size for mobile */
    margin-top: 10px;
  }

  .discuss-button {
    background-color: transparent;
    border: 3px solid black;
    color: black;
    padding: 8px 16px; /* Reduced padding for mobile */
    font-size: 1rem; /* Adjusted font size for mobile */
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
  }

  .discuss-button:hover {
    background-color: #007bff;
    transform: translateY(-2px); /* Reduced transform distance for mobile */
    border-color: transparent;
  }

  .arrow-right {
    margin-left: 8px; /* Reduced margin for mobile */
    display: inline-block;
    transition: transform 0.3s;
  }

  .discuss-button:hover .arrow-right {
    transform: translateX(4px); /* Reduced translate distance for mobile */
  }

  .market-future-image {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }

  /* Media Query for Mobile Devices */
  @media (max-width: 767px) {
    .main {
      padding-top: 60px; /* Further reduced padding for smaller screens */
    }

    .main-title {
      font-size: 26px; /* Further reduced font size for smaller screens */
    }

    .subhead {
      font-size: 0.9rem; /* Further reduced font size for smaller screens */
    }

    .discuss-button {
      padding: 6px 12px; /* Further reduced padding for smaller screens */
      font-size: 0.9rem; /* Further reduced font size for smaller screens */
    }

    .arrow-right {
      margin-left: 6px; /* Further reduced margin for smaller screens */
    }

    .discuss-button:hover .arrow-right {
      transform: translateX(3px); /* Further reduced translate distance for smaller screens */
    }
  }
  </style>
