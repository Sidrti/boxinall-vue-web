<template>
  <div class="container mt-5">
    <h1 class="text-white text-center mb-4">
      Leveraging Emerging Technologies to Enhance Your Digital Journey and Drive
      Increased Value
    </h1>
    <h5 class="text-white text-center mb-4" style="opacity: 0.8">
      Introducing mobility for your users is the most prominent way of staying
      ahead of the curve. Our mobile app development services landscape is
      backed by disruptive technologies that can increase your business efficacy
      and enhance operational efficiency and productivity.
    </h5>
    <div class="row justify-content-center">
      <!-- Loop through industryData array to generate cards -->
      <div
        v-for="industry in industryData"
        :key="industry.name"
        class="col-lg-4 col-md-6 mb-4"
      >
        <div class="card bg-dark p-4">
          <div class="d-flex align-items-center mb-3">
            <img
              class="small-icon mr-3"
              :src="industry.icon"
              :alt="industry.name + ' Icon'"
            />
          </div>
          <h2 class="text-white card-title mb-4" style="opacity: 0.9">
            {{ industry.name }}
          </h2>
          <h6 class="text-white card-text" style="opacity: 0.8">
            {{ industry.description }}
          </h6>
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
          name: "Artificial Intelligence",
          icon: require("@/assets/images/industry/ic_glass_bag.png"), // Replace with actual icon path
          description:
            "Our highly skilled mobile app developers have the expertise to revolutionize and propel your business forward by integrating next-gen artificial intelligence solutions. With our advanced AI capabilities, you can automate processes, drive innovation, and unlock new possibilities for your business.",
          route: "/ecommerce",
        },
        {
          name: "Internet of Things",
          icon: require("@/assets/images/industry/ic_glass_message.png"), // Replace with actual icon path
          description:
            "We leverage IoT technology by seamlessly integrating connected devices, sensors, and data analytics with mobile apps. Our effective IoT mobile app development services collect and analyze big data, enabling you to streamline operations.",
          route: "/education",
        },
        {
          name: "AR/VR",
          icon: require("@/assets/images/industry/ic_glass_message.png"), // Replace with actual icon path
          description:
            "Our team of skilled mobile app developers excels in creating immersive experiences through cutting-edge technologies. We harness the power of AR/VR to enhance brand awareness and foster business growth, making it a valuable asset for your business success.",
          route: "/medical",
        },

        // Add more industries as needed
      ],
    };
  },
};
</script>

<style scoped>
.card {
  transition: transform 0.2s;
  height: 500px;
  border: 1px solid white;
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
