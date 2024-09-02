<template>
    <div class="industry-stats">
      <div class="container">
        <div class="row">
          <!-- Left Section -->
          <div class="col-md-6 left-section">
            <div class="text-center">
              <h1 class="heading">{{ data.industryStats.title }}</h1>
              <button class="btn funding-button">
                {{ 'Schedule a call' }}
                <span class="arrow">→</span>
              </button>
            </div>
          </div>

          <!-- Right Section -->
          <div class="col-md-6 right-section">
            <div v-for="(stat, index) in data.industryStats.stats" :key="index" class="stat-item">
              <h2 class="stat-number">{{ stat.number }}</h2>
              <p class="stat-description">{{ stat.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: "IndustryStats",
    props: {
      data: {
        type: Object,
        required: true
      }
    }
  };
  </script>

  <style scoped>
  .industry-stats {
    padding: 50px 0;
  }

  .container {
    background-color: #eef0fe;
  }

  .left-section {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .text-center {
    text-align: center;
  }

  .heading {
    font-size: 36px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px; /* Space between heading and button */
  }

  .funding-button {
    border: 2px solid black;
    color: black;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 15px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    margin-top: 20px; /* Space above the button */
  }

  .funding-button:hover {
  background-color: #126bfb;
  border: 2px solid transparent;
}
.funding-button:hover .arrow {
  margin-left: 15px;
}
.arrow {
  margin-left: 10px;
  transition: margin-left 0.3s ease;
}


  .right-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
  }

  .stat-item {
    margin-bottom: 20px;
    text-align: center;
  }

  .stat-number {
    font-size: 30px;
    font-weight: bold;
    color: #333;
  }

  .stat-description {
    font-size: 18px;
    color: #666;
  }

  @media (max-width: 767px) {
    .heading {
      font-size: 24px;
    }
    .stat-number {
      font-size: 24px;
    }
    .stat-description {
      font-size: 16px;
    }
  }
  </style>
