<template>
  <div class="main">
    <div class="container">
      <!-- Use data.developmentMode prop for title and subtitle -->
      <h1 class="text-white text-start mb-4 text-title">
        {{ title }}
      </h1>
      <p class="text-white text-subheading text-start mb-4" style="opacity: 0.9">
        {{ subTitle }}
      </p>

      <!-- Card list loop -->
      <div class="row justify-content-center">
        <!-- Loop through cardList array to generate cards -->
        <div
          v-for="card in cardList"
          :key="card.id"
          class="col-lg-4 col-md-6 mb-4"
        >
          <div class="card bg-dark p-4">
            <div class="d-flex align-items-center mb-3">
              <div class="card-image">
                <img :src="getImageSrc(card.imagesrc)" alt="Logo" class="card-logo" />
              </div>
            </div>
            <h2 class="text-white card-title mb-4" style="opacity: 0.9">
              {{ card.title }}
            </h2>
            <p class="text-white card-text text-description">
              {{ card.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "developmentMode",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      title: "",
      subTitle: "",
      cardList: []
    };
  },
  watch: {
    data: {
      handler(newData) {
        this.updateData(newData);
      },
      immediate: true, // Trigger the watcher immediately after component creation
      deep: true // Deep watch to monitor nested property changes
    }
  },
  mounted() {
    this.updateData(this.data);
    console.log("check here:", this.data.developmentMode);
  },
  methods: {
    updateData(data) {
      // Check if data.developmentMode exists and update the component data
      if (data.developmentMode) {
        this.title = data.developmentMode.title || "Default Title";
        this.subTitle = data.developmentMode.subTitle || "Default Subtitle";
        this.cardList = data.developmentMode.cardList || [];
      } else {
        this.title = "Default Title";
        this.subTitle = "Default Subtitle";
        this.cardList = [];
      }
    },
    getImageSrc(filename) {
      try {
        // Assuming images are in "@/assets/images/icons/"
        return require(`@/assets/images/icons/${filename}`);
      } catch (e) {
        console.error(`Image not found: ${filename}`);
        return ""; // Return a fallback image or empty string
      }
    }
  }
};
</script>

<style scoped>
.main {
  background-color: black;
  padding-top: 100px;
}

.card {
  transition: transform 0.3s;
  height: 500px;
  border: 1px solid grey;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  background-color: black;
}

.card-image {
  width: 80px;
  height: 80px;
  margin-right: 15px;
  background-color: #1c1c1c;
  padding: 20px;
  border-radius: 10px;
  transition: background-color 0.3s;
}

.card:hover .card-image {
  background-color: rgba(0, 0, 0, 0.094);
}

.card:hover {
  background-color: blue !important;
}

.card-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.card-title {
  font-size: 26px;
  font-weight: 700;
  line-height: 1.2;
  margin-top: 50px;
}

.card-title,
.card-text {
  color: white;
}

.card-text {
  font-size: 17px;
  line-height: 1.4;
}

.text-title {
  font-size: 50px;
  font-weight: 600;
  line-height: 1.1;
  color: white;
}

.text-subheading {
  font-weight: 400;
  font-size: 17px;
  line-height: 1.5;
  color: white;
}

.text-description {
  font-size: 13px;
  line-height: 1.5;
  font-weight: 400;
}

@media (max-width: 767px) {
  .text-title {
    font-size: 22px;
    line-height: 1.5;
    font-weight: 500;
  }
  .text-subheading {
    font-size: 14px !important;
    line-height: 1.5 !important;
    font-weight: 400 !important;
  }
  .text-description {
    font-size: 13px;
    line-height: 1.5;
    font-weight: 400;
  }
  .card-title {
    font-size: 15px;
    font-weight: 700;
  }
  .card-text {
    font-size: 13px;
    line-height: 1.5;
    font-weight: 400;
  }
  .card {
    height: auto;
  }
}
</style>
