<template>
    <section class="our-process">
      <h1 class="main-heading">Our Process</h1>
      <div class="cards-container">
        <div v-for="(service, index) in services" :key="index" class="card">
          <div class="card-number">{{ index + 1 }}</div>
          <div class="card-content">
            <p>{{ service.title }}</p>
            <ul>
              <li v-for="(item, i) in service.items" :key="i">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </template>

  <script>
  export default {
    name: "OurProcess",
    props: {
      services: {
        type: Array,
        required: true
      }
    }
  }
  </script>

  <style scoped>
  .our-process {
    padding: 50px 20px;
    background-color: white;
    color: #333;
    text-align: center;
    padding-inline: 180px;
  }

  .main-heading {
    font-size: 36px;
    font-weight: bold;
    color: #333;
    margin-bottom: 50px; /* Space between heading and cards */
    text-align: left;
  }

  .cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .card {
    padding: 20px;
    flex: 1 1 calc(25% - 20px); /* 4 cards in a row on desktop */
    border: none; /* Remove border */
    box-shadow: none; /* Remove box-shadow if previously applied */
    background-color: #fff; /* Ensure background is white or as needed */
  }

  .card-number {
    color: grey;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 85px;
    font-weight: bold;
    opacity: 0.2;
    margin-bottom: -2px;
  }

  .card-content {
    text-align: left;
  }

  .card-content p {
    font-size: 26px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
  }

  .card-content ul {
    padding: 0;
    list-style-type: none;
  }

  .card-content li {
    font-size: 20px;
    line-height: 1.5;
    font-weight: 500;
    color: #000; /* List items in black */
    margin-bottom: 5px;
  }

  @media (max-width: 768px) {
    .cards-container {
      flex-direction: column;
    }
    .our-process {

    padding-inline: 20px;
  }

    .card {
      flex: 1 1 100%;
    }
  }
  </style>
