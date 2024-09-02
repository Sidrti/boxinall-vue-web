<template>
  <div class="client-review">
    <p class="text-white text-center mb-4 text-title">
      {{ reviewTitle }}
    </p>

    <div class="card-container">
      <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
        <div class="card" :key="selectedClient?.id">
          <!-- Client Details Section -->
          <div class="client-details">
            <img :src="require(`@/assets/images/${selectedClient?.image}`)" alt="Client Image" class="client-image" />
            <div class="client-info">
              <h3 class="client-name">{{ selectedClient?.name }}</h3>
              <p class="client-designation">{{ selectedClient?.designation }}</p>
            </div>
          </div>

          <!-- Review Section -->
          <div class="review-section">
            <p class="review-text">{{ selectedClient?.review }}</p>
          </div>
        </div>
      </transition>
      <div class="footer">
        <div
          v-for="client in clients"
          :key="client.id"
          class="bar"
          :class="{ active: selectedClient?.id === client.id }"
          @click="selectClient(client)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClientReview',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      clients: [],
      selectedClient: null
    };
  },
  computed: {
    reviewTitle() {
      return this.data?.clientReview?.title || 'Client Reviews'; // Fallback title
    }
  },
  watch: {
    data: {
      handler(newData) {
        // Update clients and selectedClient when data prop changes
        this.clients = newData?.clientReview?.clients || [];
        if (this.clients.length > 0) {
          this.selectedClient = this.clients[0];
        }
      },
      deep: true, // Watch nested properties
      immediate: true // Run handler immediately with initial data
    }
  },
  methods: {
    selectClient(client) {
      this.selectedClient = client;
    },
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      el.offsetHeight; // trigger reflow
      el.style.transition = 'opacity 0.5s ease';
      el.style.opacity = 1;
      done();
    },
    leave(el, done) {
      el.style.transition = 'opacity 0.5s ease';
      el.style.opacity = 0;
      done();
    }
  }
};
</script>

<style scoped>
.text-title {
  font-size: 50px;
  line-height: 1.1;
  font-weight: 600;
}
.text-subheading {
  font-size: 17px;
  line-height: 1.5;
  font-weight: 400;
}
.client-review {
  background-color: black;
  padding-inline: 40px;
  padding-block: 200px;
  background-image: url('@/assets/images/client-review.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.container {
  max-width: 800px;
  margin: auto;
}

.card-container {
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  border: 0.5px solid grey;
  padding: 20px;
  margin-bottom: 20px;
  position: relative;
}

.card {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  background-color: transparent;
}

.client-details {
  display: flex;
  align-items: start;
  flex-direction: column;
  flex: 1;
  width: 150px;
  height: 150px;
}

.client-image {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  object-fit: cover;
}

.client-info {
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 150px;
}

.client-name {
  font-size: 18px;
  font-weight: 700;
  color: white;
  margin: 0;
}

.client-designation {
  font-size: 14px;
  font-weight: 400;
  color: white;
  margin: 0;
}

.review-section {
  flex: 2;
}

.review-text {
  font-size: 16px;
  color: white;
  line-height: 1.8;
  font-weight: 300;
}

.footer {
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: transparent;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.bar {
  width: 60px;
  height: 3px;
  background-color: #707070;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 0 5px;
  border-radius: 15px;
}

.bar.active {
  background-color: #007bff;
  height: 4px;
}

@media (max-width: 768px) {
  .card {
    flex-direction: column;
  }
  .review-section {
    order: -1;
  }
  .review-text {
    font-size: 12px;
    padding: 0px;
    line-height: 20px;
    font-weight: 300;
  }
  .text-title {
    font-size: 22px;
    line-height: 1.5;
    font-weight: 500;
  }
  .text-subheading {
    font-size: 14px;
  }
  .client-details {
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: auto;
  }
  .client-info {
    flex-direction: column;
    margin-left: 10px;
  }
  .client-image {
    margin-right: 0;
    margin-bottom: 10px;
  }
}

/* Transition styles */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
