<template>
  <div class="expertise-component">
    <div class="gradient-border">
      <p class="content">
        Put our full stack development experience of solving the challenges of
        <span class="txt_gradient"
          >FinTech, eCommerce, Healthcare, Aviation,</span
        >
        and 20+ other industries to your benefit.
      </p>
      <button class="view-details-btn">Talk to Our Experts</button>
    </div>
  </div>
</template>

<style scoped>
.expertise-component {
  padding: 0px;
  margin: 20px;
  border: 4px solid transparent;
  background-color: black;
  background-image: linear-gradient(white, white),
    linear-gradient(180deg, #00dbd9, #4186fe);
  background-origin: border-box;
  background-clip: content-box, border-box;
  border-radius: 10px;
}

.gradient-border {
  /* height: 300px; */
  padding: 20px;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.content {
  padding: 32px;
  font-size: 32px;
  line-height: 1.5;
  font-weight: 700;
  text-align: center;
  color: white;
}

.txt_gradient {
  background: linear-gradient(to right, #01dbda, #4384ff);
  background-clip: text;
  font-weight: 800;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  font-size: 36px;
  text-decoration: none;
}

.view-details-btn {
  padding: 15px 30px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 15px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  /* margin: 50px; */
}

.view-details-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: all 0.4s ease;
}

.view-details-btn:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
}

.view-details-btn:hover::before {
  left: 100%;
}

.view-details-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 123, 255, 0.3);
}
</style>
