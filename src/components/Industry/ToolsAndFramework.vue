<template>
  <div class="main">
    <div class="container tools-framework-container">
      <!-- Heading and Subheading -->
      <div class="text-center mb-5">
        <h1 class="text-black main-title">
          {{ data.toolsAndFramework.title }}
        </h1>
        <p class="text-black sub-title">
          {{ data.toolsAndFramework.subTitle }}
        </p>
      </div>

      <!-- Technology Cards -->
      <div class="row mb-5">
        <div
          v-for="techCategory in data.toolsAndFramework.techCategories"
          :key="techCategory.id"
          class="col-lg-2 col-md-4 col-sm-6 mb-4"
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
          class="col-lg-2 col-md-4 col-sm-6 mb-4"
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
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({
        toolsAndFramework: {
          title: "",
          subTitle: "",
          techCategories: [],
        },
      }),
    },
  },
  data() {
    return {
      selectedCategory: null,
    };
  },
  watch: {
    data: {
      handler(newValue) {
        // Reset selectedCategory if new data does not have categories
        if (newValue.toolsAndFramework.techCategories.length > 0) {
          this.selectedCategory = newValue.toolsAndFramework.techCategories[0];
        } else {
          this.selectedCategory = null;
        }
      },
      deep: true, // Watch nested properties
      immediate: true // Run handler immediately with initial data
    }
  },
  mounted() {
    // Default select the first category if available
    if (this.data.toolsAndFramework.techCategories.length > 0) {
      this.selectedCategory = this.data.toolsAndFramework.techCategories[0];
    }
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
    },
    getTechImage(tech) {
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
        "Docker": require("@/assets/images/tech/docker-tech.png"),
        "Kubernetes": require("@/assets/images/tech/kubernetes-tech.png"),
        "Jenkins": require("@/assets/images/tech/jenkins-tech.png"),
        "Selenium": require("@/assets/images/tech/selenium-tech.png"),
        "JUnit": require("@/assets/images/tech/junit-tech.png"),
        "Chef": require("@/assets/images/tech/chef-tech.png"),
        "Puppet": require("@/assets/images/tech/puppet-tech.png"),
        "Terraform": require("@/assets/images/tech/terraform-tech.png"),
        "GitLab": require("@/assets/images/tech/gitlab-tech.png"),
        "Ansible": require("@/assets/images/tech/ansible-tech.png"),
        "CircleCI": require("@/assets/images/tech/circleci-tech.png"),
        "Travis CI": require("@/assets/images/tech/travisci-tech.png"),
        "Appium": require("@/assets/images/tech/appium-tech.png"),
        "TestNG": require("@/assets/images/tech/testng-tech.png"),
        "Cucumber": require("@/assets/images/tech/cucumber-tech.png"),
        "Postman": require("@/assets/images/tech/postman-tech.png"),
        "JMeter": require("@/assets/images/tech/jmeter-tech.png"),
        "LoadRunner": require("@/assets/images/tech/loadrunner-tech.png"),
        "SonarQube": require("@/assets/images/tech/sonarqube-tech.png"),
        "TestRail": require("@/assets/images/tech/testrail-tech.png"),
        "Mongodb": require("@/assets/images/tech/mongodb-tech.png"),
        "Mysql": require("@/assets/images/tech/mysql-tech.png"),
        "PostgreSQL": require("@/assets/images/tech/postgresql-tech.png"),
        "Firebase": require("@/assets/images/tech/firebase-tech.png"),
      };
      return techImages[tech] || require("@/assets/images/tech/react.png");
    },
  },
};
</script>

<style scoped>
.main {
  background-color: white;
  margin-top: 50px;
  margin-bottom: 100px;
}

.tools-framework-container {
  padding: 20px;
  border-radius: 10px;
}

.main-title {
  font-size: 50px;
  line-height: 1.1;
  font-weight: 600;
  color: black;
}

.sub-title {
  font-size: 20px;
  line-height: 1.5;
  color: black;
  margin-top: 50px;
  margin-bottom: 50px;
}

.tech-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  padding-top: 2px;
  border: 3px solid black;
  cursor: pointer;
  transition: transform 0.3s, background-color 0.3s;
}

.tech-card,
.tech-detail-card {
  background-color: #fff;
  color: black;
  border-radius: 15px;
  margin: 0 10px;
}

.tech-detail-card {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100px;
  background-color: #e5e5e5;
  border: 0.5px solid #e5e5e5;
}

.tech-card.selected {
  background-color: #126bfb;
  color: white;
  border: 3px solid transparent;
}

.tech-card.selected .tech-title {
  color: white;
}

.tech-title,
.tech-detail-title {
  color: black;
  font-size: 1.2rem;
  font-weight: normal;
  margin-top: 10px;
  text-align: center;
}

.tech-title {
  font-weight: 500;
}

.tech-image {
  width: 60%;
  height: 60%;
  object-fit: contain;
}

.row {
  margin-left: 0;
  margin-right: 0;
}

.col-lg-2,
.col-md-4,
.col-sm-6 {
  padding-left: 0;
  padding-right: 0;
}

.tech-card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .main-title {
    font-size: 22px !important; /* Smaller font size for mobile */
    line-height: 1.5;
    font-weight: 500;
  }

  .sub-title {
    font-size: 14px !important; /* Smaller font size for mobile */
    line-height: 1.5;
    margin-top: 30px; /* Reduced margin for mobile */
    margin-bottom: 30px; /* Reduced margin for mobile */
  }

  .tech-detail-card {
    height: 80px;
    width: 80px;
  }

  .tech-title,
  .tech-detail-title {
    font-size: 1rem; /* Smaller font size for mobile */
  }

  .tech-card-container {
    flex-direction: column; /* Stack tech details vertically */
  }

  /* Ensure better fit on smaller screens */
  .col-lg-2,
  .col-md-4,
  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}
</style>
