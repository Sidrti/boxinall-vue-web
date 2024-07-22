<template>
  <div class="container mt-5">
    <h1 class="text-white text-center mb-4">
      Rich Industries We Provide Services
    </h1>
    <h5 class="text-white text-center mb-4" style="opacity: 0.8;">
      Paving the Way to Digital Transformation
    </h5>
    <div class="row justify-content-center">
      <!-- Loop through industryData array to generate cards -->
      <div v-for="industry in industryData" :key="industry.name" class="col-md-4 mb-4">
        <div class="card bg-dark p-4">
          <div class="d-flex align-items-center mb-3">
            <img class="small-icon mr-3" :src="industry.icon" :alt="industry.name + ' Icon'">
          </div>
          <h2 class="text-white card-title mb-5" style="opacity: 0.9;">{{ industry.name }}</h2>
          <h5 class="text-white card-text" style="opacity: 0.8;">
            {{ industry.description }}
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndustryComponent",
  data() {
    return {
      industryData: [
        {
          name: "E-commerce",
          icon: require("@/assets/images/industry/ic_glass_bag.png"), // Replace with actual icon path
          description:
            "Ecommerce (or electronic commerce) is the buying and selling of goods or services on the Internet. It encompasses a wide variety of data, systems and tools for online buyers and sellers, including mobile shopping and online payment encryption.",
          route: "/ecommerce"
        },
        {
          name: "Education",
          icon: require("@/assets/images/industry/ic_glass_message.png"), // Replace with actual icon path
          description:
            "An e-learning web app is an interactive webpage that allows learners to input their data and get expected results through interactions. Your students can access the app from a web browser with an active internet connection from remote locations.",
          route: "/education"
        },
        {
          name: "Medical",
          icon: require("@/assets/images/industry/ic_glass_message.png"), // Replace with actual icon path
          description:
            "medical education, course of study directed toward imparting to persons seeking to become physicians the knowledge and skills required for the prevention and treatment of disease. It also develops the methods and objectives approp",
          route: "/medical"
        },
        {
          name: "Tech",
          icon: require("@/assets/images/industry/ic_glass_bag.png"), // Replace with actual icon path
          description:
            "Ecommerce (or electronic commerce) is the buying and selling of goods or services on the Internet. It encompasses a wide variety of data, systems and tools for online buyers and sellers, including mobile shopping and online payment encryption.",
          route: "/ecommerce"
        },
        {
          name: "Sports",
          icon: require("@/assets/images/industry/ic_glass_message.png"), // Replace with actual icon path
          description:
            "An e-learning web app is an interactive webpage that allows learners to input their data and get expected results through interactions. Your students can access the app from a web browser with an active internet connection from remote locations.",
          route: "/education"
        },
        {
          name: "Transportation",
          icon: require("@/assets/images/industry/ic_glass_message.png"), // Replace with actual icon path
          description:
            "medical education, course of study directed toward imparting to persons seeking to become physicians the knowledge and skills required for the prevention and treatment of disease. It also develops the methods and objectives approp",
          route: "/medical"
        },

        // Add more industries as needed
      ]
    };
  }
};
</script>

<style scoped>
.card {
  transition: transform 0.2s;
  height: 500px;
}

.card:hover {
  transform: translateY(-5px);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.small-icon {
  width: 40px; /* Adjust size as needed */
  height: auto;
}
</style>
