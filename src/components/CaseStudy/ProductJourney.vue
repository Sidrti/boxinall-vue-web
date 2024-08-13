<template>
    <div class="product-journey-container">
      <div class="left-section">
        <p class="left-section-content">
          {{ product_journey.mainHeading }}
        </p>
      </div>
      <div class="right-section">
        <p class="right-section-content">
          {{ product_journey.content1 }}
        </p>
        <br />
        <br />
        <p class="right-section-content">
          {{ product_journey.content2 }}
        </p>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: "ProductJourney",
    props: {
      product_journey: {
        type: Object,
        required: true
      }
    }
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
