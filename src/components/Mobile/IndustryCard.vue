<template>
  <div class="main">
    <div class="container industries-container" style="padding-top: 200px;">
      <!-- Heading and Description -->
      <div class="text-center mb-5">
        <h1 class="text-white text-title">
          Crafting Unique and Tailored Mobile Solutions for a Spectrum of Industries
        </h1>
        <h5 class="text-white" style="opacity: 0.9; margin-top: 20px;">
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
          class="col-lg-3 col-md-6 industry-column"
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
      ],
    };
  },
  mounted() {
    this.adjustColumnBorders();
  },
  methods: {
    adjustColumnBorders() {
      const row = this.$refs.industriesRow;
      const columns = row.querySelectorAll('.industry-column');
      const columnsPerRowDesktop = 4;
      const columnsPerRowMobile = 2;

      columns.forEach((column, index) => {
        const isLastInRowDesktop = (index + 1) % columnsPerRowDesktop === 0;
        const isLastInRowMobile = (index + 1) % columnsPerRowMobile === 0;
        const isLastColumn = index === columns.length - 1;
        const isLastRowDesktop = Math.ceil(columns.length / columnsPerRowDesktop) * columnsPerRowDesktop - columnsPerRowDesktop <= index;
        const isLastRowMobile = Math.ceil(columns.length / columnsPerRowMobile) * columnsPerRowMobile - columnsPerRowMobile <= index;

        if (isLastInRowDesktop) {
          column.style.borderRight = 'none';
        }
        if (isLastRowDesktop) {
          column.style.borderBottom = 'none';
        }
        if (isLastColumn) {
          column.style.borderRight = 'none';
        }
        if (window.innerWidth <= 768) {
          if (isLastInRowMobile) {
            column.style.borderRight = 'none';
          }
          if (isLastRowMobile) {
            column.style.borderBottom = 'none';
          }
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
  font-size: 50px;
  line-height: 1.2;
  color: white;
}

.card {
  background-color: transparent;
  color: white;
  border: none; /* No border on the card itself */
  border-radius: 0; /* No rounded corners for the card */
  padding: 40px;
  height: 100%; /* Ensures full height for the card */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Container for image and text */
.card-content {
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center;
  justify-content: center;
}

/* Styling for the card image */
.card-image {
  width: 40px;
  height: 40px;
  margin-bottom: 15px; /* Space between image and text */
  background-color: #1c1c1c;
  padding: 10px;
  border-radius: 5px;
}

.card-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Ensure the title within the card is centered */
.industry-title {
  font-size: 1.2rem;
  font-weight: 400;
  color: white;
}

/* Column styles with border */
.industry-column {
  border-right: 0.5px solid grey; /* Right border for separation */
  border-bottom: 0.5px solid grey; /* Bottom border for separation */
  padding: 0; /* Remove padding inside the column */
}

/* Ensure no margin or border on the outer sides of the container */
.row {
  margin-left: 0;
  margin-right: 0;
}

.col-lg-3, .col-md-6 {
  padding-left: 0;
  padding-right: 0;
}

/* Ensure no extra space for the last column in each row */
.industry-column:last-of-type {
  border-right: none;
}

.industry-title:hover {
  color: #007bff;
}

@media (max-width: 768px) {
  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .industry-column {
    border-right: 0.5px solid grey; /* Right border for separation */
    border-bottom: 0.5px solid grey; /* Bottom border for separation */
  }

  .industry-column:nth-child(2n) {
    border-right: none; /* No right border for every second column in a row */
  }

  .industry-column:last-child {
    border-bottom: none; /* No bottom border for the last column */
  }

  .industry-column:nth-child(2n+1):last-of-type {
    border-right: none; /* No right border for last odd column */
  }
}
</style>
