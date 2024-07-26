<template>
  <div class="achievements-grid" ref="achievementsGrid">
    <div
      v-for="(item, index) in achievements"
      :key="index"
      class="achievement-item"
    >
      <div class="achievement-label">{{ item.label }}</div>
      <div class="achievement-value">
        {{ item.animatedValue }}{{ item.suffix }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AchievementsDisplay",
  data() {
    return {
      achievements: [
        { label: "Higher Orders", value: 50, suffix: "%", animatedValue: 0 },
        {
          label: "Play/App Store Rating",
          value: 4.7,
          suffix: "",
          animatedValue: 0,
        },
        {
          label: "Higher Conversion Rate",
          value: 30,
          suffix: "%",
          animatedValue: 0,
        },
        {
          label: "Mobile App Downloads",
          value: 50,
          suffix: "K+",
          animatedValue: 0,
        },
        {
          label: "Raised in Funding",
          value: 52,
          suffix: " M",
          animatedValue: 0,
        },
        {
          label: "Mobile App Downloads",
          value: 2,
          suffix: " M+",
          animatedValue: 0,
        },
        {
          label: "Million Active Users",
          value: 2.6,
          suffix: "",
          animatedValue: 0,
        },
        {
          label: "Website Traffic",
          value: 997,
          suffix: "K+",
          animatedValue: 0,
        },
        {
          label: "IKEA Stores Deployed the Solution",
          value: 7,
          suffix: "+",
          animatedValue: 0,
        },
        {
          label: "Solution Touted as the Biggest Source of RoI Measurement",
          value: 1,
          suffix: "",
          animatedValue: 0,
        },
        {
          label: "iOS App Downloads",
          value: 3,
          suffix: " M+",
          animatedValue: 0,
        },
        {
          label: "Android App Downloads",
          value: 1,
          suffix: " M+",
          animatedValue: 0,
        },
      ],
      observer: null,
      animationInProgress: false,
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
    setupIntersectionObserver() {
      this.observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            if (!this.animationInProgress) {
              this.startAllAnimations();
            }
          } else {
            this.resetAllAnimations();
          }
        },
        { threshold: 0.1 } // Trigger when 10% of the component is visible
      );
      this.observer.observe(this.$refs.achievementsGrid);
    },
    startAllAnimations() {
      this.animationInProgress = true;
      this.achievements.forEach((item, index) => {
        this.startAnimation(index);
      });
    },
    resetAllAnimations() {
      this.animationInProgress = false;
      this.achievements.forEach((item) => {
        this.$set(item, "animatedValue", 0);
      });
    },
    startAnimation(index) {
      const item = this.achievements[index];
      const duration = 2000; // Animation duration in milliseconds
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentValue = progress * item.value;

        this.$set(item, "animatedValue", this.formatValue(currentValue));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          if (index === this.achievements.length - 1) {
            this.animationInProgress = false;
          }
        }
      };

      requestAnimationFrame(animate);
    },
    formatValue(value) {
      return Number.isInteger(value)
        ? Math.floor(value)
        : Number(value.toFixed(1));
    },
  },
};
</script>

<style scoped>
.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  padding: 20px;
}

.achievement-item {
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease;
  height: 250px;
  background-color: #141414;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.achievement-item:hover {
  transform: translateY(-5px);
  background-color: #007bff;
  cursor: pointer;
}

.achievement-value {
  font-size: 38px;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 10px;
}

.achievement-label {
  font-size: 20px;
  color: white;
  font-weight: 800;
  line-height: 1.5;
}

.achievement-item:hover .achievement-value {
  color: #141414;
}
</style>
