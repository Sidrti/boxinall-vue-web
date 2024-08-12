<template>
  <div class="review-container">
    <div class="image-section">
      <img :src="require('@/assets/images/client1.png')" alt="Reviewer Image" class="reviewer-image" />
    </div>
    <div class="content-section">
      <p class="review-text">
        "When we approached Appinventiv, what we had was a Domino's pizza app and website whose conversion rate was dwindling for quite some time. We weren't able to identify the issue, but we needed quick help. The time and effort that the team spent behind our application, not just identified the issue but also eradicated it from scratch".
      </p>
      <p class="reviewer-name">John Doe</p>
      <p class="reviewer-designation">Product Head - Digital</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewTemplate",
};
</script>

<style scoped>
.review-container {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #ddd;
  flex-wrap: wrap;
  padding-inline: 180px;
  padding-top: 100px;
  padding-bottom: 100px;
}

.image-section {
  flex: 1;
  max-width: 30%;
}
.image-section img{
  width: 200px;
  height: 200px;
}

.reviewer-image {
  width: 100%;
  border-radius: 50%;
}

.content-section {
  flex: 2.5;
  max-width: 70%;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
}

.review-text {
  font-size: 22px;
  margin-bottom: 10px;
  font-weight: 600;
  line-height: 1.8;
  color: #000;
}

.reviewer-name {
  font-size: 22px;
  font-weight: bold;
  margin-top: 10px;
  color: #0092ff;
}

.reviewer-designation {
  font-size: 22px;
  font-weight: 600;
  color: #000;
}

@media (max-width: 768px) {
  .review-container {
    flex-direction: column;
    text-align: center;
    padding-inline: 20px;
  }

  .image-section, .content-section {
    max-width: 100%;
    padding-left: 0;
  }

  .reviewer-image {
    margin-bottom: 20px;
  }
}
</style>
