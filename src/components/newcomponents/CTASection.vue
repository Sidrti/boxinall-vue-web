<template>
  <section class="cta-section">
    <div class="cta-content" data-aos="zoom-in">
      <h2 class="cta-title">Ready to bring your ideas to life?</h2>
      <p class="cta-description">
        Let's collaborate on your next digital project
      </p>
      <button @click="$emit('contact-us')" class="cta-button">
        Get in Touch
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "CTASection",
};
</script>

<style scoped>
.cta-section {
  background: url("../../assets/images/Boxinall@123.png") center/cover no-repeat;
  padding: 8% 10%;
  object-fit: contain;
  text-align: center;
  position: relative;
}

.cta-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
}

.cta-content {
  position: relative;
  z-index: 1;
}

.cta-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

.cta-description {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  color: #ffffff;
  opacity: 0.9;
}

.cta-button {
  background: linear-gradient(45deg, #007bff, #00dbd9);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
}

.cta-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 123, 255, 0.4);
}

@media (max-width: 768px) {
  .cta-title {
    font-size: 2.5rem;
  }

  .cta-description {
    font-size: 1.1rem;
  }
}
</style>
