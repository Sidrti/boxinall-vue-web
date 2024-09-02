<template>
  <div class="our-service">
    <div class="container">
      <!-- Main Heading and Subheading -->
      <h1 class="main-heading text-start">
        {{ data.ourservices?.title || "Default Title" }}
      </h1>
      <p class="subheading text-start">
        {{ data.ourservices?.subTitle || "Default Subtitle" }}
      </p>

      <!-- Content Layout -->
      <div class="row align-items-center">
        <!-- Left Section with List Points -->
        <div class="col-md-3">
          <ul class="service-list">
            <li
              v-for="(service, index) in services"
              :key="service.id"
              :class="{ active: selectedServiceIndex === index }"
              @click="selectService(index)"
              ref="listItem"
            >
              <span v-if="selectedServiceIndex === index" class="bullet"
                >&#8226;</span
              >
              {{ service.title }}
            </li>
          </ul>
        </div>

        <!-- Center Section with Image -->
        <div class="col-md-5 text-center image-card" v-if="services.length">
          <img
            :src="getImageSrc(services[selectedServiceIndex]?.imagesrc)"
            alt="Service Image"
            class="service-image"
          />
        </div>

        <!-- Right Section with Content -->
        <div class="col-md-4">
          <div class="service-content">
            <p
              v-html="
                services[selectedServiceIndex]?.description ||
                'No description available'
              "
            ></p>
          </div>
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
    hideCtc: {
      type: Boolean,
      default: false,
    },
  },
  name: "OurService",
  data() {
    return {
      selectedServiceIndex: 0,
      services: [], // Initialize as an empty array
    };
  },
  watch: {
    data: {
      handler(newData) {
        // Check if ourservices and servicesList exist and update services accordingly
        this.services = newData.ourservices?.servicesList || [];
        console.log("Updated services:", this.services);

        // Reset the selectedServiceIndex to 0 if services list is not empty
        if (this.services.length > 0) {
          this.selectedServiceIndex = 0;
        }
      },
      immediate: true, // Trigger the watcher immediately after component creation
      deep: true, // Deep watch to monitor nested property changes
    },
  },
  mounted() {
    this.adjustListItemMargins();
  },
  methods: {
    selectService(index) {
      this.selectedServiceIndex = index;
    },
    adjustListItemMargins() {
      this.$nextTick(() => {
        const listItems = this.$refs.listItem;
        if (listItems && Array.isArray(listItems)) {
          listItems.forEach((item, index) => {
            if (index > 0) {
              item.style.marginTop = "40px";
            }
          });
        } else if (listItems) {
          // Handle the case where listItems is not an array
          if (listItems.length > 0) {
            listItems.style.marginTop = "40px";
          }
        }
      });
    },
    getImageSrc(imageName) {
      try {
        return require(`@/assets/images/ourservice/${imageName}`);
      } catch (e) {
        console.error(`Image not found: ${imageName}`);
        return ""; // Return a fallback image or empty string
      }
    },
  },
};
</script>

<style scoped>
.our-service {
  padding: 50px 0;
  background-image: url("@/assets/images/testimonial-bg-img.png");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
}

.main-heading {
  font-size: 50px;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 20px;
  text-align: center;
  color: white;
}

.subheading {
  font-size: 17px;
  margin-bottom: 40px;
  text-align: center;
  color: #ddd;
  font-weight: 400;
  line-height: 1.5;
}

.service-list {
  list-style: none;
  padding: 0;
  color: white;
}

.service-list li {
  cursor: pointer;
  padding: 10px;
  font-size: 22px;
  position: relative;
  line-height: 1.4;
  opacity: 0.7;
  font-weight: 600;
}

.service-list li.active {
  font-weight: bold;
  opacity: 1;
}

.bullet {
  color: white;
  font-size: 40px;
  position: absolute;
  left: -30px;
  top: 50%;
  transform: translateY(-50%);
}

.image-card {
  border-radius: 20px;
  height: 300px;
  margin-top: -100px;
}

.service-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.service-content {
  padding: 20px;
  height: 450px;
  overflow: auto;
}

.service-content p {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.4;
  color: #ddd;
}

@media (max-width: 767px) {
  .col-md-5 {
    display: none;
  }
  .main-heading {
    font-size: 22px !important;
    line-height: 1.5;
    font-weight: 500;
  }
  .subheading {
    font-size: 14px;
    line-height: 1.5;
    font-weight: 400;
  }
  .service-list li {
    font-size: 14px;
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: -30px;
  }

  .bullet {
    left: -10px;
    font-size: 20px;
  }
  .service-content p {
    font-size: 14px;
    line-height: 1.4;
    font-weight: 300;
    color: #ddd;
    margin-top: 20px;
  }
}
</style>
