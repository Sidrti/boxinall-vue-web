<template>
    <div class="product-journey-container">
      <div class="left-section">
        <p class="left-section-content">
          Every Solution Needs a Problem to Begin With - In Case of Domino's
          Mobile App, It was a Complex User Journey.
        </p>
      </div>
      <div class="right-section">
        <p class="right-section-content">
          It is not uncommon for a restaurant application to get reviews on food
          quality, delivery time, etc. It is something that every food business
          owner is prepared for. What is alarming is when reviews start
          highlighting issues related to the app experience, difficulty in placing
          an order, or in-app user journey.
        </p>
        <br />
        <br />
        <p class="right-section-content">
          When Domino's came to us, they were
          facing issues with retaining customers and were seeing a rise in their
          mobile app's bounce rate. They were looking for ways to redefine their
          business identity in the market and reinstate their image, through
          redesigned <span class="highlight">user interface and user experience (UI/UX)</span>.
        </p>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: "ProductJourney",
  };
  </script>

  <style scoped>
  .product-journey-container {
    display: flex;
    justify-content: space-between;
    background-color: #1259ad;
    padding-top: 60px;
    flex-wrap: wrap;
    padding-bottom: 100px;
    padding-inline: 180px;
  }

  .left-section,
  .right-section {
    width: 45%;
    color: white;
  }

  .left-section-content {
    font-size: 40px;
    font-weight: bold;
    line-height: 1.5;
  }

  .right-section-content {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.8;
    color: #fff;
  }

  .highlight {
    color: #00aaff; /* Blue color for the highlighted text */
  }

  /* Responsive design for mobile */
  @media (max-width: 768px) {
    .product-journey-container {
      flex-direction: column;
      padding-inline: 20px;
    }

    .left-section,
    .right-section {
      width: 100%;
      margin-bottom: 20px;
    }

    .left-section-content {
      font-size: 30px;
    }

    .right-section-content {
      font-size: 18px;
    }
  }
  </style>
