<template>
  <div class="container">
    <div class="header">
      <h1 class="title">{{ data.featureSection.title }}</h1>
      <h2 class="subtitle">{{ data.featureSection.subTitle }}</h2>
    </div>
    <div class="container-main">
      <!-- Left Section: Vertically Scrollable List -->
      <div class="left-section">
        <ul class="scrollable-list">
          <li
            v-for="(item, index) in data.featureSection.processList"
            :key="index"
            @click="selectItem(index)"
            :class="{ active: selectedIndex === index }"
          >
            <span class="number">0{{ index + 1 }}{{ "." }}</span>
            {{ item.title }}
          </li>
        </ul>
      </div>

      <!-- Right Section: Description -->
      <div class="right-section">
        <div class="card-container">
          <div class="card-image">
            <img
              :src="require('@/assets/images/icons/react-native.png')"
              alt="Logo"
              class="card-logo"
            />
          </div>
        </div>

        <h2>{{ selectedItem.title }}</h2>
        <p>{{ selectedItem.description }}</p>
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
  },
  data() {
    return {
      selectedIndex: 0, // Default to the first item
    };
  },
  computed: {
    selectedItem() {
      return this.data.featureSection.processList[this.selectedIndex];
    },
  },
  methods: {
    selectItem(index) {
      this.selectedIndex = index;
    },
  },
};
</script>

<style scoped>
.container-main {
  display: flex;
  justify-content: space-between;
  height: 100vh; /* Ensure full height */
  overflow: hidden;
  background-color: #0059ff;
  border: 1px solid blue;
  border-radius: 15px;
}
.header {
  text-align: start;
  padding: 20px;
  color: white;
}
.title {
  font-size: 50px;
  font-weight: 600;
  line-height: 1.1;
  margin: 0;
  font-family: "Inter", sans-serif;
}
.subtitle {
  font-size: 18px;
  margin: 10px 0 0;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  line-height: 1.5;
}

/* Left Section: Vertically Scrollable List */
.left-section {
  flex: 0.5; /* Use the full width allocated to this flex item */
  margin-right: 0; /* Remove right margin */
  height: 100%; /* Full height */
  overflow-y: auto; /* Enable vertical scrolling */
  padding: 100px 20px; /* Add padding if you need spacing inside */
}

/* Custom Scrollbar Styles */
.left-section::-webkit-scrollbar {
  width: 4px;
}

.left-section::-webkit-scrollbar-track {
  background: #f0f0f0; /* Lighter grey background for the scrollbar track */
}

.left-section::-webkit-scrollbar-thumb {
  background-color: grey; /* Dark grey color for the scrollbar thumb */
  border-radius: 10px;
  border: 3px solid #f0f0f0; /* Padding around the thumb to create a smaller thumb within the track */
}

/* Custom Scrollbar Styles for Firefox */
.left-section {
  scrollbar-width: thin;
  scrollbar-color: grey #f0f0f0;
}

.scrollable-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.scrollable-list li {
  padding: 40px 10px; /* Combined padding to reduce code */
  cursor: pointer;
  border-bottom: 1px solid #e0e0e0;
  transition: background-color 0.3s;
  font-size: 28px;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  color: white;
  line-height: 1.5;
  opacity: 0.6;
}



.card-container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
}

.card-image {
  display: flex;
  margin-bottom: 20px;
  width: 80px;
  height: 80px;
  margin-right: 15px;
  background-color: #0059ff; /* Default background color */
  padding: 20px;
  border-radius: 10px;
  transition: background-color 0.3s; /* Smooth transition for background color change */
}

/* Right Section: Description */
.right-section {
  display: flex;
  flex-direction: column;
  flex: 0.5; /* Equal width to left-section */
  padding-left: 20px;
  overflow-y: auto; /* Ensure content scrolls if it overflows */
  background-color: white;
  justify-content: center;
  align-items: center;
  padding-inline: 40px;
}

.right-section h2 {
  font-size: 28px;
  margin-bottom: 10px;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  line-height: 1.5;
}

.right-section p {
  font-size: 18px;
  line-height: 1.5;
  font-family: "Inter", sans-serif;
  font-weight: 400;
}
</style>
