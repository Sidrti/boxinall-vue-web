<template>
    <section class="product-gallery">
      <div class="images-container">
        <img v-for="(image, index) in images" :key="index" :src="require(`@/assets/images/casestudy/${image}`)" :alt="`Product Image ${index + 1}`" class="gallery-image" />
      </div>
    </section>
  </template>

  <script>
  export default {
    name: "ProductGallery",
    data() {
      return {
        images: [
          'dominos-screen1.png',
          'dominos-screen3.png',
          'dominos-screen4.png',
          'dominos-screen1.png'
        ]
      }
    }
  }
  </script>

  <style scoped>
  .product-gallery {
    padding: 50px 20px;
    background-color: white;
    text-align: center;
    padding-inline: 180px;
  }

  .gallery-heading {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  .images-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: nowrap;
    overflow-x: auto;
  }

  .gallery-image {
    width: 23%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .gallery-image {
      width: 45%;
    }
    .product-gallery {

    padding-inline: 20px;
  }
  }
  </style>
