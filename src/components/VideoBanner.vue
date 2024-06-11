<template>
    <div class="hero-banner">
      <video class="video-background" autoplay loop muted>
        <source src="image/boxinall.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="content">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeroBanner',
  };
  </script>
  
  <style scoped>
  .hero-banner {
    position: relative;
    height: 100vh;
    overflow: hidden;
    color: #fff;
    text-align: center;
  }
  
  .video-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
  }
  
  .content {
    position: relative;
    z-index: 1;
    padding: 20px;
  }
  
  .content h1 {
    font-size: 3em;
  }
  </style>
  