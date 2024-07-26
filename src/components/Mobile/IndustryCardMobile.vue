<template>
  <div class="main">
    <div class="container industries-container" style="padding-top: 200px;">
      <!-- Heading and Description -->
      <div class="text-center mb-5">
        <h1 class="text-white text-title">
          Crafting Unique and Tailored Mobile Solutions for a Spectrum of Industries
        </h1>
        <h5 class="text-white description">
          As a leading mobile app development services firm, we excel in offering
          custom solutions for various industries, ensuring great versatility and
          the ability to cater to diverse business needs and requirements.
        </h5>
      </div>

      <!-- Industries Cards -->
      <div class="row no-gutters" ref="industriesRow">
        <div
          v-for="industry in industries"
          :key="industry.id"
          class="col-lg-2-4 col-md-4 col-sm-6 industry-column"
        >
          <div class="card text-center">
            <div class="card-content">
              <div class="card-image">
                <img :src="industry.image" alt="Logo" class="card-logo" />
              </div>
              <h2 class="industry-title">{{ industry.name }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndustriesWeWorkIn",
  data() {
    return {
      industries: [
        { id: 1, name: "Ecommerce", image: require("@/assets/images/industry/ecommerce.png") },
        { id: 2, name: "Healthcare", image: require("@/assets/images/industry/healthcare.png") },
        { id: 3, name: "Travel", image: require("@/assets/images/industry/travel.png") },
        { id: 4, name: "Aviation", image: require("@/assets/images/industry/aviation.png") },
        { id: 5, name: "Real Estate", image: require("@/assets/images/industry/real-estate.png") },
        { id: 6, name: "Games", image: require("@/assets/images/industry/games.png") },
        { id: 7, name: "Social", image: require("@/assets/images/industry/social.png") },
        { id: 8, name: "Finance", image: require("@/assets/images/industry/finance.png") },
        { id: 9, name: "Education", image: require("@/assets/images/industry/education.png") },
        { id: 10, name: "On-Demand", image: require("@/assets/images/industry/on-demand.png") },
        { id: 11, name: "Entertainment", image: require("@/assets/images/industry/entertainment.png") },
        { id: 12, name: "Government", image: require("@/assets/images/industry/government.png") },
        { id: 13, name: "Restaurant", image: require("@/assets/images/industry/restaurant.png") },
        { id: 14, name: "Logistics", image: require("@/assets/images/industry/logistics.png") },
        { id: 15, name: "Agriculture", image: require("@/assets/images/industry/agriculture.png") },
      ],
    };
  },
  mounted() {
    this.adjustColumnBorders();
    window.addEventListener("resize", this.adjustColumnBorders);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.adjustColumnBorders);
  },
  methods: {
    adjustColumnBorders() {
      const row = this.$refs.industriesRow;
      const columns = row.querySelectorAll('.industry-column');
      const columnsPerRowDesktop = 5;
      const columnsPerRowMobile = 2;
      const isMobile = window.innerWidth <= 768;

      columns.forEach((column, index) => {
        column.style.borderRight = '0.5px solid grey';
        column.style.borderBottom = '0.5px solid grey';

        const isLastInRow = (index + 1) % (isMobile ? columnsPerRowMobile : columnsPerRowDesktop) === 0;
        const isLastColumn = index === columns.length - 1;
        const isLastRow = Math.ceil(columns.length / (isMobile ? columnsPerRowMobile : columnsPerRowDesktop)) * (isMobile ? columnsPerRowMobile : columnsPerRowDesktop) - (isMobile ? columnsPerRowMobile : columnsPerRowDesktop) <= index;

        if (isLastInRow || isLastColumn) {
          column.style.borderRight = 'none';
        }
        if (isLastRow) {
          column.style.borderBottom = 'none';
        }
      });
    }
  }
};
</script>

<style scoped>
.main {
  background-color: black;
  padding-bottom: 100px;
}

.industries-container {
  padding: 20px;
}

.text-title {
  font-size: 2.5rem; /* Adjusted for mobile */
  line-height: 1.2;
  color: white;
}

.description {
  font-size: 1.125rem; /* Adjusted for mobile */
  opacity: 0.9;
  margin-top: 20px;
}

.card {
  background-color: transparent;
  color: white;
  border: none;
  border-radius: 0;
  padding: 20px; /* Adjusted for mobile */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-image {
  width: 60px; /* Adjusted for mobile */
  height: 60px; /* Adjusted for mobile */
  margin-bottom: 10px;
  background-color: #1c1c1c;
  padding: 10px;
  border-radius: 5px;
}

.card-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.industry-title {
  font-size: 1rem; /* Adjusted for mobile */
  font-weight: 400;
  color: white;
}

.industry-column {
  border-right: 0.5px solid grey;
  border-bottom: 0.5px solid grey;
  padding: 0;
}

.row {
  margin-left: 0;
  margin-right: 0;
}

.col-lg-2-4,
.col-md-4,
.col-sm-6 {
  padding-left: 0;
  padding-right: 0;
}

.col-lg-2-4 {
  flex: 0 0 20%;
  max-width: 20%;
}

.col-md-4 {
  flex: 0 0 33.3333%;
  max-width: 33.3333%;
}

.col-sm-6 {
  flex: 0 0 50%;
  max-width: 50%;
}

.industry-column:last-of-type {
  border-right: none;
}

.industry-title:hover {
  color: #007bff;
}

@media (max-width: 768px) {
  .text-title {
    font-size: 26px; /* Adjusted for mobile */
  }

  .description {
    font-size: 1rem; /* Adjusted for mobile */
  }

  .card {
    padding: 10px; /* Adjusted for mobile */
  }

  .card-image {
    width: 50px; /* Adjusted for mobile */
    height: 50px; /* Adjusted for mobile */
    margin-bottom: 8px; /* Adjusted for mobile */
  }

  .industry-title {
    font-size: 0.9rem; /* Adjusted for mobile */
  }

  .industry-column:nth-child(2n) {
    border-right: none; /* No right border for every second column in a row */
  }

  .industry-column:last-child {
    border-bottom: none; /* No bottom border for the last column */
  }
}
</style>
