<template>
  <div
    class="project-overview"
    :class="{ reverse: project.orientation === 'right' }"
    ref="projectOverview"
  >
    <div class="image-container" ref="imageContainer">
      <img :src="project.image" alt="Project Image" class="project-image" />
      <div class="small-image-container">
        <img
          v-if="project.smallimage"
          :src="project.smallimage"
          alt="Project Image"
          class="project-image-small"
        />
      </div>
    </div>
    <div class="content-container" ref="contentContainer">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <div class="stack">
        <span
          v-for="(tech, index) in project.stack"
          :key="index"
          class="stackitem"
        >
          {{ tech }}
          <span
            v-if="index < project.stack.length - 1"
            class="stackitem-separator"
          >
            |
          </span>
        </span>
      </div>
      <button @click="viewDetails(project.link)" class="view-details-btn">
        View Case Study
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectOverview",
  props: {
    project: {
      type: Object,
      required: true,
      default: () => ({
        title: "",
        description: "",
        stack: [],
        image: "",
        smallimage: "",
        link: "",
        orientation: "left",
      }),
    },
  },
  data() {
    return {
      observer: null,
    };
  },
  mounted() {
    this.setupIntersectionObserver();
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    viewDetails(link) {
      window.open(link, "_blank");
    },
    // setupIntersectionObserver() {
    //   this.observer = new IntersectionObserver(
    //     (entries) => {
    //       entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //           this.$refs.imageContainer.classList.add("animate-in");
    //           this.$refs.contentContainer.classList.add("animate-in");
    //         } else {
    //           this.$refs.imageContainer.classList.remove("animate-in");
    //           this.$refs.contentContainer.classList.remove("animate-in");
    //         }
    //       });
    //     },
    //     {
    //       threshold: 0.2,
    //     }
    //   );
    //   this.observer.observe(this.$refs.projectOverview);
    // },
    setupIntersectionObserver() {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.$refs.imageContainer.classList.add(
                "animate-in",
                "rotate-in"
              );
              this.$refs.contentContainer.classList.add("animate-in");
              if (this.project.smallimage) {
                this.$refs.imageContainer
                  .querySelector(".small-image-container img")
                  .classList.add("rotate-in");
              }
            } else {
              this.$refs.imageContainer.classList.remove(
                "animate-in",
                "rotate-in"
              );
              this.$refs.contentContainer.classList.remove("animate-in");
              if (this.project.smallimage) {
                this.$refs.imageContainer
                  .querySelector(".small-image-container img")
                  .classList.remove("rotate-in");
              }
            }
          });
        },
        {
          threshold: 0.2,
        }
      );
      this.observer.observe(this.$refs.projectOverview);
    },
  },
};
</script>

<style scoped>
@keyframes rotateImageVertical {
  from {
    transform: rotateY(-30deg) translateY(0px);
  }
  to {
    transform: rotateY(0deg) translateY(0);
  }
}

.rotate-in {
  animation: rotateImageVertical 2s ease forwards;
}

.project-overview {
  display: flex;
  width: 100%;
  align-items: stretch;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  margin: 150px 0;
  padding: 20px;
  column-gap: 50px;
  background-color: black;
}

.project-overview:hover {
  background-color: #141414;
  cursor: pointer;
}

.project-overview.reverse {
  flex-direction: row-reverse;
}

.image-container,
.content-container {
  flex: 1;
  padding-left: 100px;
  max-width: 50%;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.image-container.animate-in,
.content-container.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.project-overview.reverse .image-container {
  transform: translateX(50px);
}

.project-overview.reverse .content-container {
  transform: translateX(-50px);
}

.project-overview.reverse .image-container.animate-in,
.project-overview.reverse .content-container.animate-in {
  transform: translateX(0);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.small-image-container {
  position: absolute;
  top: 1%;
  left: -0px;
  width: auto;
  height: 98%;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.project-image-small {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
}

.content-container {
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h2 {
  font-size: 32px;
  margin-bottom: 15px;
  color: white;
  font-weight: 800;
}

p {
  font-size: 18px;
  color: white;
  margin-bottom: 20px;
}

.stack {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  color: white;
  margin-bottom: 20px;
}

.stackitem {
  color: white;
  font-size: 20px;
  font-weight: 800;
}

.stackitem-separator {
  margin: 0 5px;
}

.view-details-btn {
  align-self: flex-start;
  padding: 15px 30px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 15px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.view-details-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: all 0.4s ease;
}

.view-details-btn:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
}

.view-details-btn:hover::before {
  left: 100%;
}

.view-details-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 123, 255, 0.3);
}
</style>
