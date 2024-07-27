<template>
  <div class="main">
    <div class="container">
      <h1 class="text-black heading-title text-start mb-4">
        Leveraging Emerging Technologies to Enhance Your Digital Journey and Drive
        Increased Value
      </h1>
      <p class="text-black subhead text-start mb-4" style="font-weight: 500;font-size: 18px;">
        Introducing mobility for your users is the most prominent way of staying
        ahead of the curve. Our mobile app development services landscape is
        backed by disruptive technologies that can increase your business efficacy
        and enhance operational efficiency and productivity.
      </p>
      <div class="row justify-content-center">
        <!-- Loop through industryData array to generate cards -->
        <div
          v-for="industry in industryData"
          :key="industry.name"
          class="col-lg-4 col-md-6 mb-4"
        >
          <div class=" p-4">
            <div class="image-card d-flex align-items-center mb-3">
              <img
                class="small-icon mr-3"
                :src="industry.icon"
                :alt="industry.name + ' Icon'"
              />
            </div>
            <h3 class="text-black card-title mb-4" style="opacity: 0.9">
              {{ industry.name }}
            </h3>
            <p class="text-black card-description card-text" style="font-weight: 400;">
              <span v-html="highlightDescription(industry.description)"></span>
            </p>
          </div>
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
          icon: require("@/assets/images/ai/ai-img.png"), // Replace with actual icon path
          description:
            "Our highly skilled mobile app developers have the expertise to revolutionize and propel your business forward by integrating next-gen artificial intelligence solutions. With our advanced AI capabilities, you can automate processes, drive innovation, and unlock new possibilities for your business.",
          route: "/ecommerce",
        },
        {
          name: "Internet of Things",
          icon: require("@/assets/images/ai/IoT-img.png"), // Replace with actual icon path
          description:
            "We leverage IoT technology by seamlessly integrating connected devices, sensors, and data analytics with mobile apps. Our effective IoT mobile app development services collect and analyze big data, enabling you to streamline operations.",
          route: "/education",
        },
        {
          name: "AR/VR",
          icon: require("@/assets/images/ai/AR-VR-img.png"), // Replace with actual icon path
          description:
            "Our team of skilled mobile app developers excels in creating immersive experiences through cutting-edge technologies. We harness the power of AR/VR to enhance brand awareness and foster business growth, making it a valuable asset for your business success.",
          route: "/medical",
        },
        {
          name: "Cloud",
          icon: require("@/assets/images/ai/cloud-img.png"), // Replace with actual icon path
          description:
            "We are one of the leading dedicated cloud application development service providers that builds scalable custom solutions for businesses of all sizes, while eliminating the need for extensive infrastructure investments.",
          route: "/medical",
        },
        {
          name: "Metaverse",
          icon: require("@/assets/images/ai/metaverse-img.png"), // Replace with actual icon path
          description:
            "Our team possesses extensive expertise in metaverse development, crafting captivating and immersive virtual environments that enable your business to differentiate itself in a competitive market.",
          route: "/medical",
        },
        {
          name: "Blockchain",
          icon: require("@/assets/images/ai/blockchain-img.png"), // Replace with actual icon path
          description:
            "Our team of experts leverages blockchain technology to provide custom mobile application development services that enhance data security, mitigate the risk of data breaches, and ensure that sensitive information is accessible only to authorized users.",
          route: "/medical",
        }
      ],
    };
  },
  methods: {
    highlightDescription(description) {
      const termsToHighlight = [
        "artificial intelligence solutions",
        "IoT mobile app development",
        "blockchain technology",
        "AR/VR",
        "metaverse development"
      ];
      let highlightedDescription = description;
      termsToHighlight.forEach(term => {
        const regex = new RegExp(`(${term})`, "gi");
        highlightedDescription = highlightedDescription.replace(regex, '<span style="color: #00cbca;">$1</span>');
      });
      return highlightedDescription;
    }
  }
};
</script>

<style scoped>
.main {
  background-color: white;
  margin-bottom: 100px;
}

.container {
  padding-top: 10px;
}

.card {
  transition: transform 0.2s;
  height: 400px;
  border: 1px solid white;
  border-radius: 15px;
}

.card:hover {
  background-color: rgb(236, 243, 245);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.image-card {
  width: 40px;
  height: 40px;
  background-color: #514f57;
  border-radius: 10px;
  justify-content: center;
}

.small-icon {
  /* Adjust size as needed */
  height: 60%;
  width: 60%;
  object-fit: contain;
}

.card-title {
  font-size: 25px;
}

@media (max-width: 768px) {
  .heading-title {
    font-size: 22px !important; /* Smaller font size for mobile */
    line-height: 1.5;
    font-weight: 500;
  }
  .subhead {
    font-size: 14px !important;
    line-height: 1.5 !important;
    font-weight: 400;
  }
  .card-title {
    font-size: 16px !important; /* Smaller font size for mobile */
    font-weight: 600 !important;
  }
  .card-description {
    font-size: 14px !important; /* Smaller font size for mobile */
    line-height: 1.7;
  }
}
</style>
