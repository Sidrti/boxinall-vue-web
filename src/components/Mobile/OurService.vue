<template>
    <div class="our-service">
      <div class="container">
        <!-- Main Heading and Subheading -->
        <h1 class="main-heading text-start">
          Why Choose Us for Custom Mobile Application Development Services?
        </h1>
        <p class="subheading text-start">
          Boxinall is an award-winning native and cross-platform mobile app
          development service provider. With over eight years of experience, an
          expert team of over 1,200 professionals, and an impressive portfolio of
          over 3,000 successful projects, our team is capable of delivering
          top-notch next-generation mobile apps that guarantee highest ROI.
        </p>

        <!-- Content Layout -->
        <div class="row align-items-center">
          <!-- Left Section with List Points -->
          <div class="col-md-3">
            <ul class="service-list">
              <li
                v-for="(service, index) in services"
                :key="index"
                :class="{ active: selectedServiceIndex === index }"
                @click="selectService(index)"
                ref="listItem"
              >
                <span v-if="selectedServiceIndex === index" class="bullet">&#8226;</span>
                {{ service.title }}
              </li>
            </ul>
          </div>

          <!-- Center Section with Image -->
          <div class="col-md-5 text-center image-card">
            <img
              :src="services[selectedServiceIndex].image"
              alt="Service Image"
              class="service-image"
            />
          </div>

          <!-- Right Section with Content -->
          <div class="col-md-4">
            <div class="service-content">
              <p v-html="services[selectedServiceIndex].description"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: "OurService",
    data() {
      return {
        selectedServiceIndex: 0,
        services: [
          {
            title: "Security - and Compliance- first Approach",
            image: require("@/assets/images/ourservice/software-developers.png"),
            description: 'By prioritizing <span style="color: #007bff;">data encryption</span> and strictly following all compliances and regulations (such as <span style="color: #007bff;">HIPAA</span>, <span style="color: #007bff;">GDPR</span>, and <span style="color: #007bff;">PCI-DSS</span>), we cater to secure mobile application development for our esteemed clients. Our commitment to implement robust security measures help businesses mitigate risks and establish customer trust, ensuring a more substantial online presence and enhanced business agility.',
          },
          {
            title: "4.5/5 Average Rating",
            image: require("@/assets/images/ourservice/business-people.png"),
            description: 'Custom mobile apps developed for our client base witness an exceptional average rating of 4.5/5 at both the Google Play Store and App Store. The positive feedback and excellent ratings for our app’s performance, features, and overall UX are a testimony to the level of perfection we achieve for our clients’ projects.',
          },
          {
            title: "Advance Technical Expertise",
            image: require("@/assets/images/ourservice/young-business-team.png"),
            description: 'Our skilled team is highly proficient in an extensive array of technologies, encompassing <span style="color: #007bff;">Business Intelligence</span>, <span style="color: #007bff;">Big Data Analytics</span>, <span style="color: #007bff;">Artificial Intelligence</span>, <span style="color: #007bff;">Cloud Computing</span>, <span style="color: #007bff;">IoT</span>, and more. Each member of our team contributes a distinct skill set and valuable experience in offering custom mobile apps services to our client base.',
          },
          {
            title: "Faster Delivery",
            image: require("@/assets/images/ourservice/programmer-working-with-software.png"),
            description: 'With our <span style="color: #007bff;">agile development approach</span>, we consistently deliver projects 57% faster compared to traditional delivery methods. Our dedicated mobile software development services and efficient project management techniques enable us to accelerate development timelines while maintaining high quality and client satisfaction.',
          },
        ],
      };
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
          listItems.forEach((item, index) => {
            if (index > 0) {
              item.style.marginTop = '40px';
            }
          });
        });
      },
    },
  };
  </script>

<style scoped>
.our-service {
  padding: 100px 0;
  background-image: url('@/assets/images/testimonial-bg-img.png'); /* Replace with your background image path */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
}

.main-heading {
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: white;
}

.subheading {
  font-size: 22px;
  margin-bottom: 40px;
  text-align: center;
  color: #ddd;
  font-weight: 400;
}

.service-list {
  list-style: none;
  padding: 0;
  color: white;
}

.service-list li {
  cursor: pointer;
  padding: 10px;
  font-size: 25px; /* Increase font size */
  position: relative;
  line-height: 1.5;
  opacity: 0.7;
  font-weight: 600;
}

.service-list li:hover,
.service-list li.active {
  /* background-color: rgba(255, 255, 255, 0.2); */
}

.service-list li.active {
  font-weight: bold;
  opacity: 1;
}

.bullet {
  color: white;
  font-size: 40px;
  position: absolute;
  left: -30px; /* Position the bullet outside the text */
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
  height: 450px; /* Fixed height */
  overflow: auto; /* Scroll if content overflows */
}

.service-content p {
  font-size: 20px;
  color: #ddd;
}

/* Media Query for Mobile Devices */
@media (max-width: 767px) {
  .col-md-5 {
    display: none; /* Hide the image section on mobile */
  }
  .main-heading{
    font-size:26px !important
  }
  .subheading{
    font-size: 20px;
  }
  .service-list li {
    font-size: 20px;
}
}
</style>

