<template>
    <div class="main">
      <div class="container market-future-container">
        <!-- Heading and Subheading -->
        <div class="text-center mb-5">
          <h1 class="text-black main-title">
            The mobile application development market size
            is expected to reach <span class="highlight">$567.19 billion in 2030</span>
          </h1>
          <p  class="subhead" style=" margin-top: 20px;">
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
        imageSrc: require("@/assets/images/market/market.png"), // Replace with your image path
      };
    },
  };
  </script>

  <style scoped>
  .main {
    background-color: white;
    padding-top: 200px;
  }

  .market-future-container {
    padding: 20px;
    border-radius: 10px;
  }

  .main-title {
    font-size: 50px;
    line-height: 1.2;
    color: black;
  }

  .highlight {
    color: #007bff; /* Blue color for highlighting */
  }
 .subhead{
    color: black;
    font-size: 1.2rem;

 }
  .discuss-button {
    background-color: transparent;
    border: 3px solid black;
    color: black;
    padding: 10px 20px;
    font-size: 1.1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
  }

  .discuss-button:hover {
    background-color: #007bff;
    transform: translateY(-3px);
    border-color: transparent;
  }

  .arrow-right {
    margin-left: 10px;
    display: inline-block;
    transition: transform 0.3s;
  }

  .discuss-button:hover .arrow-right {
    transform: translateX(5px);
  }

  .market-future-image {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
  </style>
