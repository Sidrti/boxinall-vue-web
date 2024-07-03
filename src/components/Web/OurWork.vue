<template>
    <div class="container mt-5">
      <h1 class="text-white text-center mb-4">
        Our Work
      </h1>
      <div class="row justify-content-center">
        <!-- Loop through projects array to generate cards -->
        <div
          v-for="project in projects"
          :key="project.id"
          class="col-lg-4 col-md-6 mb-4"
        >
          <div class="card bg-dark p-4">
            <!-- Project Image -->
            <img
              class="card-img-top"
              :src="project.image"
              :alt="project.name + ' Image'"
            />

            <!-- Project Details -->
            <div class="card-body">
              <h2 class="text-white card-title mb-3">{{ project.name }}</h2>
              <p class="text-white mb-2">
                <strong>Type:</strong> {{ project.type }}
              </p>
              <p class="text-white mb-4">
                <strong>Industry:</strong> {{ project.industry }}
              </p>

              <!-- Button showing technologies -->
              <a :href="project.technologyLink" class="btn btn-primary">Technologies Used</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: "OurWork",
    data() {
      return {
        projects: [
          {
            id: 1,
            name: "Project A",
            type: "Web Application",
            industry: "eCommerce",
            image: require("@/assets/images/projects/project_a.jpg"),
            technologyLink: "/technologies/project_a",
          },
          {
            id: 2,
            name: "Project B",
            type: "Mobile App",
            industry: "Education",
            image: require("@/assets/images/projects/project_b.jpg"),
            technologyLink: "/technologies/project_b",
          },
          {
            id: 3,
            name: "Project C",
            type: "Web Application",
            industry: "Healthcare",
            image: require("@/assets/images/projects/project_c.jpg"),
            technologyLink: "/technologies/project_c",
          },
          // Add more projects as needed
        ],
      };
    },
  };
  </script>

  <style scoped>
  .card {
    border: 1px solid white; /* White border */
    transition: transform 0.2s;
    height: 100%;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .card-img-top {
    height: 200px;
    object-fit: cover;
  }
  </style>
