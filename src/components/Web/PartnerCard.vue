<template>
    <div class="container mt-10" :style="{ background: 'black',marginTop:'100px' }">
      <div class="row justify-content-center mb-4">
        <div class="col-md-8">
          <div class="d-flex align-items-center">
            <div class="line"></div>
            <h5 class="text-white mx-3">Trusted by conglomerates, enterprises, and startups alike</h5>
            <div class="line"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-2 col-md-4 col-sm-6 mb-4" v-for="partner in partners" :key="partner.name">
          <div class="card h-100 text-center">
            <img class="card-img-top" :src="partner.image" :alt="partner.name">
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'PartnerCard',
    data() {
      return {
        partners: [
          { name: 'Dominos', image: require('@/assets/images/partner/dominos.png') },
          { name: 'KFC', image: require('@/assets/images/partner/kfc2.png') },
          { name: 'KPMG', image: require('@/assets/images/partner/kpmg.png') },
          { name: 'KFC', image: require('@/assets/images/partner/kfc2.png') },
          { name: 'Dominos', image: require('@/assets/images/partner/dominos.png') },
          { name: 'KFC', image: require('@/assets/images/partner/kfc2.png') },
          // Add more partners as needed
        ]
      };
    }
  };
  </script>

  <style scoped>
  .card {
    border: none;
    background-color: black;
    transition: transform 0.2s;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .card-img-top {
    max-height: 150px;
    object-fit: contain;
  }

  .line {
    flex: 1;
    height: 1px;
    background-color: white;
  }
  </style>
