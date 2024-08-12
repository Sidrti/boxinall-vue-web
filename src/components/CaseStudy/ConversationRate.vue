<template>
  <section class="conversation-section">
    <div class="content">
      <h1 class="heading">
        Boxinall Helped Domino's Increase Conversion Rate by 23% Through a
        Transformative UI/UX
      </h1>
      <button class="cta-button">Let's Discuss Your Project Idea</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "ConversationRate",
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

</style>
