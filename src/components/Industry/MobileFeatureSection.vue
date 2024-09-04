<template>
    <div class="container">
      <div class="header">
        <h1 class="title">{{ data.featureSection.title }}</h1>
        <h2 class="subtitle">{{ data.featureSection.subTitle }}</h2>
      </div>
      <div class="cards-container">
        <div
          v-for="(item, index) in data.featureSection.processList"
          :key="index"
          class="card"
          :class="{ expanded: expandedIndex === index }"
          @click="toggleExpand(index)"
        >
          <div class="card-header">
            <!-- <div class="card-image">
          <img
            :src="require('@/assets/images/icons/react-native.png')"
            alt="Icon"
            class="card-icon"
          />
        </div> -->

            <span class="card-title">{{ item.title }}</span>
            <span class="expand-icon">
              {{ expandedIndex === index ? "-" : "+" }}
            </span>
          </div>
          <div v-if="expandedIndex === index" class="card-body">
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        expandedIndex: null, // Track which card is expanded
      };
    },
    methods: {
      toggleExpand(index) {
        this.expandedIndex = this.expandedIndex === index ? null : index;
      },
    },
  };
  </script>

  <style scoped>
  .container {
    padding: 20px;
    background-color: white;
    color: white;
    border-radius: 15px;
  }

  .header {
    text-align: start;
    margin-bottom: 20px;
  }

  .title {
    font-size: 28px;
    font-weight: 600;
    margin: 0;
    font-family: "Inter", sans-serif;
  }

  .subtitle {
    font-size: 16px;
    margin: 10px 0 0;
    font-family: "Inter", sans-serif;
    line-height: 1.4;
    font-weight: 400;
  }

  .cards-container {
    display: flex;
    flex-direction: column;
  }

  .card {

    color: black;
    /* border-radius: 10px; */
    margin-bottom: 30px;

    cursor: pointer;
    transition: all 0.3s ease;
    border: none;

  }

  .card-header {
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    height: 100px;
  }

  .card-title {
    font-size: 18px;
    font-weight: 600;
    font-family: "Inter", sans-serif;
    color: white;
  }

  .number {
    font-size: 18px;
    font-weight: 600;
    font-family: "Inter", sans-serif;
    margin-right: 10px;
  }

  .expand-icon {
    font-size: 24px;
    font-weight: 700;
    color: white;
  }

  .card-body {
    margin-top: 10px;
  }

  .card-image {
  display: flex;
  width: 80px;
  height: 80px;

  background-color: #0059ff; /* Default background color */
  padding: 20px;
  border-radius: 10px;
  transition: background-color 0.3s; /* Smooth transition for background color change */
}
  </style>
