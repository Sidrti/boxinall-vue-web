<template>

<div>
    <img :src="require(`@/assets/images/casestudy/dominos-banner2.png`)" alt="Image 1" class="image-head" />
    <section class="product-journey">


      <h1 class="main-heading">{{ journey.mainHeading }}</h1>
      <div class="content-section">
        <p v-for="(content, index) in journey.contents" :key="index">
          {{ content }}<br /><br /><br />
        </p>
      </div>
      <div class="images-container">

        <img :src="require(`@/assets/images/casestudy/${journey.image1}`)" alt="Image 1" class="image" />
        <img :src="require(`@/assets/images/casestudy/${journey.image2}`)" alt="Image 2" class="image" />
      </div>
    </section>
</div>

  </template>

  <script>
  export default {
    name: "ProductJourney",
    props: {
      journey: {
        type: Object,
        required: true,
        default: () => ({
          mainHeading: "",
          contents: [],
          image1: "",
          image2: ""
        })
      }
    }
  }
  </script>

  <style scoped>
  .product-journey {
    padding: 50px 20px;
    background-color: white;
    color: #333;
    text-align: start;
    padding-inline: 180px;
  }

  .main-heading {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
  }
  .image-head{
    width: 100%;
    margin: 0;
  }

  .content-section p {
    font-size: 20px;
    line-height: 2;
    font-weight: 500;
    margin: 0;
    color: black;
  }

  .images-container {
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
  }

  .image {
    width: 30%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .product-journey {

    padding-inline: 20px;
  }

  }
  </style>
