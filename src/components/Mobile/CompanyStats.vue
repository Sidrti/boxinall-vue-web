<template>
    <div class="main">
      <div class="container stats-container">
        <div class="row justify-content-center">
          <div v-for="stat in stats" :key="stat.id" class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="stat-card p-4 text-center">
              <h1 class="stat-number">{{ stat.number }}</h1>
              <p class="stat-title">{{ stat.title }}</p>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <button class="btn discuss-button">
            Discuss Your Business Requirement <span class="arrow-right">&#10132;</span>
          </button>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: "CompanyStats",
    data() {
      return {
        stats: [
          {
            id: 1,
            number: "8+",
            title: "Years of Industry Expertise"
          },
          {
            id: 2,
            number: "1200+",
            title: "Mobile App Developers"
          },
          {
            id: 3,
            number: "3000+",
            title: "Custom Mobile App Projects Delivered"
          },
          {
            id: 4,
            number: "950M+",
            title: "Funding Raised for Clients"
          }
        ]
      };
    }
  };
  </script>

  <style scoped>
  .main {
    background-color: black;
  }

  .stats-container {
    border: 0.5px solid grey;
    border-radius: 10px;
    padding: 20px;
    padding-top: 20px;
    padding-bottom: 100px;
    background-color: #1c1c11;
  }

  .stat-card {
    background-color: transparent;
    color: white;
    border-radius: 10px;
    transition: transform 0.3s, background-color 0.3s;
  }

  .stat-number {
    font-size: 3.5rem;
    font-weight: bold;
    color: white;
  }

  .stat-title {
    font-size: 1.25rem;
    opacity: 0.9;
    color: white;
    margin-top: 10px;
  }

  .discuss-button {
    background-color: transparent;
    border: 2px solid white;
    color: white;
    padding: 10px 20px;
    font-size: 1.1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    font-weight: 500;
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
    animation: shake 0.5s infinite;
  }

  @keyframes shake {
    0%, 100% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-2px);
    }
    75% {
      transform: translateX(2px);
    }
  }

  @media (max-width: 768px) {
    .stat-card {
      padding: 15px;
    }

    .stat-number {
      font-size: 2.5rem;
    }

    .stat-title {
      font-size: 1rem;
    }

    .discuss-button {
      font-size: 1rem;
      padding: 8px 16px;
    }

    .arrow-right {
      font-size: 1.2rem;
    }

    /* Two columns on mobile */
    .col-sm-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
  </style>
