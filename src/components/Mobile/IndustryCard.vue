<template>
  <div class="container industries-container" style="margin-top: 100px;">
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
</template>

<script>
export default {
  name: "IndustriesWeWorkIn",
  data() {
    return {
      industries: [
        { id: 1, name: "Ecommerce", image: require("@/assets/images/strategyProcess/contact-support.png") },
        { id: 2, name: "Healthcare",image: require("@/assets/images/strategyProcess/contact-support.png")},
        { id: 3, name: "Travel", image: require("@/assets/images/strategyProcess/contact-support.png") },
        { id: 4, name: "Aviation", image: require("@/assets/images/strategyProcess/contact-support.png") },
        { id: 5, name: "Real Estate", image: require("@/assets/images/strategyProcess/contact-support.png") },
        { id: 6, name: "Games", image: require("@/assets/images/strategyProcess/contact-support.png") },
        { id: 7, name: "Social", image: require("@/assets/images/strategyProcess/contact-support.png") },
        { id: 8, name: "Finance", image: require("@/assets/images/strategyProcess/contact-support.png") },
        { id: 9, name: "Ecommerce", image: require("@/assets/images/strategyProcess/contact-support.png") },
        { id: 10, name: "Healthcare", image: require("@/assets/images/strategyProcess/contact-support.png") },
        { id: 11, name: "Travel", image: require("@/assets/images/strategyProcess/contact-support.png") },
        { id: 12, name: "Aviation", image: require("@/assets/images/strategyProcess/contact-support.png") },
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
      const columnsPerRow = 4; // Adjust based on the number of columns per row

      columns.forEach((column, index) => {
        const isLastInRow = (index + 1) % columnsPerRow === 0;
        const isLastColumn = index === columns.length - 1;
        const isLastRow = Math.ceil(columns.length / columnsPerRow) * columnsPerRow - columnsPerRow <= index;

        if (isLastInRow) {
          column.style.borderRight = 'none';
        }
        if (isLastRow) {
          column.style.borderBottom = 'none';
        }
        if (isLastColumn) {
          column.style.borderRight = 'none';
        }
      });
    }
  }
};
</script>

<style scoped>
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
  width: 60px;
  height: 60px;
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
  border-right: 0.5px solid grey ; /* Right border for separation */
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
   color:#007bff
  }
</style>
