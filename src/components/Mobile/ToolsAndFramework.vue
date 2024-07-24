<template>
    <div class="main">
      <div class="container tools-framework-container">
        <!-- Heading and Subheading -->
        <div class="text-center mb-5">
          <h1 class="text-black main-title">
            Our Mobile Application Development Tools and Frameworks Aligned with
            Your Business Dynamics
          </h1>
          <p class="text-black sub-title">
            With nearly a decade of industry experience, our team of developers
            excels in crafting mobile app development solutions backed by the latest
            technologies and tool set. By leveraging our tech expertise, you can
            strengthen their brand identity, foster business growth, and expand user
            reach.
          </p>
        </div>

        <!-- Technology Cards -->
        <div class="row mb-5">
          <div
            v-for="techCategory in techCategories"
            :key="techCategory.id"
            class="col-lg-3 col-md-6 mb-4"
          >
            <div
              class="card tech-card text-center"
              :class="{ selected: selectedCategory && selectedCategory.id === techCategory.id }"
              @click="selectCategory(techCategory)"
            >
              <h2 class="tech-title">{{ techCategory.name }}</h2>
            </div>
          </div>
        </div>

        <!-- Display Technologies Based on Selected Category -->
        <div v-if="selectedCategory" class="row">
          <div
            v-for="tech in selectedCategory.technologies"
            :key="tech"
            class="col-lg-3 col-md-3 col-sm-3 mb-4"
          >
            <div class="tech-card-container">
              <div class="card tech-detail-card text-center">
                <img :src="getTechImage(tech)" alt="Tech Image" class="tech-image" />
              </div>
              <p class="tech-detail-title">{{ tech }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: "ToolsAndFramework",
    data() {
      return {
        techCategories: [
          {
            id: 1,
            name: "Backend",
            technologies: ['Php',"Node.js", ".Net", "Python",'Laravel',],
          },
          {
            id: 2,
            name: "Frontend",
            technologies: ["React", "Vue", "CSS",'HTML5','Javascript'],
          },
        ],
        selectedCategory: null,
      };
    },
    mounted() {
      // Default select the "Backend" category
      this.selectedCategory = this.techCategories[0];
    },
    methods: {
      selectCategory(category) {
        this.selectedCategory = category;
      },
      getTechImage(tech) {
        // You can replace these with actual image paths for each technology
        const techImages = {
          ".Net": require("@/assets/images/tech/dotnet.png"),
          "Node.js": require("@/assets/images/tech/nodejs.png"),
          "Python": require("@/assets/images/tech/python.png"),
          "Php": require("@/assets/images/tech/php.png"),
          "Laravel": require("@/assets/images/tech/laravel.png"),
          "React": require("@/assets/images/tech/react.png"),
          "Vue": require("@/assets/images/tech/vue.png"),
          "HTML5": require("@/assets/images/tech/html.png"),
          "CSS": require("@/assets/images/tech/css.png"),
          "Javascript": require("@/assets/images/tech/javascript.png"),
        };
        return techImages[tech] || require("@/assets/images/tech/react.png");
      },
    },
  };
  </script>

  <style scoped>
  .main {
    background-color: white;
    margin-top: 200px;
    margin-bottom: 100px;
  }

  .tools-framework-container {
    padding: 20px;
    border-radius: 10px;
  }

  .main-title {
    font-size: 60px;
    line-height: 1.2;
    color: black;
  }

  .sub-title {
    font-size: 20px;
    line-height: 1.5;
    color: black;
    margin-top: 50px;
    margin-bottom: 50px;
  }
 .tech-card{
  padding: 20px;
  border: 3px solid black; /* Light border */
 }
  .tech-card,
  .tech-detail-card {
    background-color: #fff;
    color: black;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.3s, background-color 0.3s;
    margin: 0 10px; /* Add horizontal margin for spacing between cards */
  }

  .tech-detail-card {
    height: 100px;
    width: 100px;
    background-color: #e5e5e5;
    border: 0.5px solid #e5e5e5; /* Light border */

  }

  .tech-card.selected {
    background-color: #126bfb; /* Highlight selected card with blue background */
    color: white; /* White text color for selected card */
    border: 3px solid transparent; /* Light border */
  }

  .tech-card.selected .tech-title {
    color: white; /* Make tech-title white when the card is selected */
  }


  .tech-title,
  .tech-detail-title {
    color: black;
    font-size: 1.2rem;
    font-weight: normal;
    margin-top: 10px; /* Add margin to separate the title from the card */
  }

  .tech-image {
    width: 60%;
    height: 60%;
    object-fit: contain;
  }

  /* Ensures margin and border are properly applied */
  .row {
    margin-left: 0;
    margin-right: 0;
  }

  .col-lg-3,
  .col-md-6 {
    padding-left: 0;
    padding-right: 0;
  }

  .tech-card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  </style>
