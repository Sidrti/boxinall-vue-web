<template>
  <div class="strategic-process-container" ref="processContainer">
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-6">
          <h1 class="text-white text-start mb-4" style="font-size: 50px">
            Experience Our Best-In-Class ERP Software Development Process
          </h1>
          <p
            class="text-white text-start mb-4"
            style="opacity: 0.8; font-size: 20px"
          >
            Our team is dedicated to ensuring that the final product meets the
            needs of your business, and we pride ourselves on our ability to
            communicate effectively with stakeholders throughout the
            <span class="blue-text">agile development process</span>. With our
            expertise and attention to detail, we guarantee that your ERP
            software is delivered on time and with the desired performance and
            functionalities.
          </p>
        </div>
        <div class="col-lg-6">
          <div class="card-container">
            <transition-group name="fade" tag="div">
              <div
                v-for="(step, index) in displayedSteps"
                :key="index"
                class="card p-4 mb-3"
                style="background-color: black"
                :style="{ top: `${index * 40}px` }"
              >
                <div class="card-image">
                  <img :src="step.image" alt="Logo" class="card-logo" />
                </div>

                <h2 class="text-white card-title mb-3 mt-3">
                  {{ step.title }}
                </h2>
                <p class="text-white card-text">
                  {{ step.description }}
                </p>
              </div>
            </transition-group>
          </div>
        </div>
      </div>
    </div>
    <!-- Intersection observer target element -->
    <div ref="scrollTarget" class="scroll-target"></div>
  </div>
</template>

<script>
export default {
  name: "StrategicProcess",
  data() {
    return {
      steps: [
        {
          title: "Understanding Business Requirements",
          description:
            "As a leading cloud ERP solutions company, we start by understanding your current business requirements and future goals. This vital first step enables us to develop a deep understanding of what exactly you expect from the design and deployment of the ERP software solution.",
          image: require("@/assets/images/strategyProcess/contact-support.png"),
        },
        {
          title: "Crafting a Comprehensive Design Plan",
          description:
            "The next step involves creating a comprehensive design plan for the ERP solution. The step allows us to have a detailed blueprint with even the minutest details related to data migration, infrastructure development, solution integration with existing platforms, and so on.",
          image: require("@/assets/images/strategyProcess/contact-support.png"),
        },
        {
          title: "Building and Deploying the ERP Software Solution",
          description:
            "At this point, the enterprise resource planning software is built by our team of ERP implementation consultants, developers, and analysts in accordance with the specifications detailed in the design plan. Our team deploys and integrates the ERP software with the current business processes after it has been built.",
          image: require("@/assets/images/strategyProcess/contact-support.png"),
        },
        {
          title: "Offering Client-First Support",
          description:
            "A working enterprise resource planning system is dynamic and requires regular support and maintenance. As a top-ranked enterprise resource planning software company, we offer 24*7 support, even after the solution is deployed, to ensure constant upgrades of your ERP system.",
          image: require("@/assets/images/strategyProcess/contact-support.png"),
        },
      ],
      displayedSteps: [],
      observer: null,
      lastScrollY: 0,
      componentInView: false,
      scrollCooldown: false,
      allowScroll: false, // Flag to allow or prevent scrolling
    };
  },
  mounted() {
    // Create an IntersectionObserver for the scroll target
    this.observer = new IntersectionObserver(this.onIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust threshold as needed
    });

    // Observe the scroll target element
    this.observer.observe(this.$refs.scrollTarget);

    // Handle page scroll
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    // Disconnect the observer when the component is destroyed
    if (this.observer) {
      this.observer.disconnect();
    }

    // Remove the scroll event listener
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    onIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.componentInView = true;
          this.handleScroll();
        } else {
          this.componentInView = false;
        }
      });
    },
    resetSteps() {
      // Reset displayedSteps to an empty array
      this.displayedSteps = [];
    },
    addCard() {
      if (this.displayedSteps.length < this.steps.length) {
        this.displayedSteps.push(this.steps[this.displayedSteps.length]);
      }

      // Check if all cards are displayed
      if (this.displayedSteps.length === this.steps.length) {
        // Allow scrolling once all cards are displayed
        this.allowScroll = true;

        // Remove the event listener to prevent further scrolling
        window.removeEventListener("scroll", this.handleScroll);
      }
    },
    handleScroll() {
      const currentScrollY = window.scrollY;


      if (currentScrollY < this.$refs.processContainer.offsetTop - 500) {
        this.resetSteps();
      }

      // Add card logic remains the same
      if (this.componentInView && currentScrollY > this.lastScrollY) {
        if (!this.scrollCooldown && !this.allowScroll) {
          this.addCard();
          this.scrollCooldown = true;
          setTimeout(() => {
            this.scrollCooldown = false;
          }, 1000); // 1 second cooldown before allowing the next scroll trigger
        }
      }

      this.lastScrollY = currentScrollY;
    },
  },
};
</script>

<style scoped>
.strategic-process-container {
  background-color: #000000;
  padding: 50px 0;
  padding-top: 100px;
}

.card-container {
  position: relative;
}

.card {
  transition: transform 0.2s, opacity 0.5s;
  position: absolute;
  width: 100%; /* Make sure cards are the same width */
  border: 1px solid white; /* Added white border */
  border-radius: 10px; /* Added border radius */
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

h1,
p {
  color: white;
}

.blue-text {
  color: blue; /* Make agile development process text blue */
}
.card-image {
  width: 60px;
  height: 60px;
  margin-right: 15px;
  background-color: blue;
  padding: 10px;
  border-radius: 5px;

}

.card-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}


.scroll-target {
  height: 1px; /* Small target to trigger intersection observer */
  margin-bottom: 100px; /* Adjust margin to control scroll trigger frequency */
}
</style>
