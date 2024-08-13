<template>
  <section class="conversation-section">
    <div class="content">
      <h1 class="heading">
       {{data.content}}
      </h1>
      <button class="cta-button">Let's Discuss Your Project Idea</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "ConversationRate",
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.conversation-section {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  padding: 0 20px;
  background-image: url("@/assets/images/casestudy/dominos-banner2.png"); /* Replace with your image path */
  background-size: cover;
  background-position: center;
  color: white;
}

.content {
  width: 60%;
}

.heading {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
}

.cta-button {
  padding: 20px 30px;
  font-size: 18px;
  color: black;
  font-weight: 600;
  background-color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* Mobile-specific styles */
@media (max-width: 768px) {
  .content {
    width: 100%;
  }

  .heading {
    font-size: 32px; /* Smaller font size for mobile */
    margin-bottom: 15px;
  }

  .cta-button {
    padding: 15px 20px; /* Adjust button padding for mobile */
    font-size: 16px; /* Smaller font size for button */
  }
}
</style>

