<template>
  <section class="hero-section" @click="tryPlayVideo">
    <div class="hero-content" data-aos="fade-right" data-aos-duration="1000">
      <h1 class="hero-title">Innovative Digital Solutions</h1>
      <p class="hero-subtitle">Transforming ideas into powerful experiences</p>
      <button
        @click="$emit('scroll-to-projects')"
        class="cta-button"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        View Our Work
      </button>
    </div>
    <div class="hero-image" data-aos="fade-left" data-aos-duration="1000">
      <video
        ref="videoPlayer"
        :src="currentVideo"
        @ended="onVideoEnded"
        :muted="isMuted"
        autoplay
      ></video>
      <div class="video-controls" data-aos="fade-up" data-aos-delay="500">
        <button @click.stop="togglePlay" class="control-btn">
          <i :class="isPlaying ? 'fas fa-pause' : 'fas fa-play'"></i>
        </button>
        <button @click.stop="toggleMute" class="control-btn">
          <i :class="isMuted ? 'fas fa-volume-mute' : 'fas fa-volume-up'"></i>
        </button>
      </div>
      <div class="video-dots">
        <!-- data-aos="fade-up" -->
        <!-- :data-aos-delay="300 + index * 100" -->
        <span
          v-for="(video, index) in videos"
          :key="index"
          :class="['dot', { active: index === currentVideoIndex }]"
          @click.stop="changeVideo(index)"
        ></span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  data() {
    return {
      videos: [
        "image/boxinall2.mp4",
        "image/boxinall.mp4",
        "image/boxinall2.mp4",
        "image/boxinall.mp4",
      ],
      currentVideoIndex: 0,
      isPlaying: true,
      isMuted: true,
      hasInteracted: false,
    };
  },
  computed: {
    currentVideo() {
      return this.videos[this.currentVideoIndex];
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("scroll", this.tryPlayVideo, { once: true });
    });
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.tryPlayVideo);
  },
  methods: {
    tryPlayVideo() {
      if (!this.hasInteracted && this.$refs.videoPlayer) {
        this.hasInteracted = true;
        this.$refs.videoPlayer.play().catch((error) => {
          console.log("Autoplay was prevented:", error);
        });
      }
    },
    togglePlay() {
      if (this.isPlaying) {
        this.$refs.videoPlayer.pause();
      } else {
        this.$refs.videoPlayer.play().catch((error) => {
          console.log("Play was prevented:", error);
        });
      }
      this.isPlaying = !this.isPlaying;
    },
    toggleMute() {
      this.isMuted = !this.isMuted;
    },
    changeVideo(index) {
      this.currentVideoIndex = index;
      if (this.isPlaying) {
        this.$nextTick(() => {
          this.$refs.videoPlayer.play().catch((error) => {
            console.log("Play was prevented:", error);
          });
        });
      }
    },
    onVideoEnded() {
      this.currentVideoIndex =
        (this.currentVideoIndex + 1) % this.videos.length;
    },
  },
};
</script>

<style scoped>
.hero-section {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5% 5%;
  background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
  overflow: hidden;
}

.hero-content {
  flex: 1;
  max-width: 600px;
  margin-right: 5%;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
  background: linear-gradient(45deg, #007bff, #00dbd9);
  padding: 20px;
  border-radius: 25px;
  text-align: center;
}

.hero-subtitle {
  font-size: 1.5rem;
  opacity: 0.8;
  margin-bottom: 2rem;
  color: white;
}

.hero-image {
  flex: 1;
  max-width: 600px;
  height: 80vh;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 123, 255, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  position: relative;
}

.hero-image video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-controls {
  position: absolute;
  bottom: 60px;
  left: calc(50% - 55px);
  transform: translateX(-45%);
  display: flex;
  gap: 20px;
}

.control-btn {
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.control-btn:hover {
  background-color: rgba(255, 255, 255, 0.4);
}

.control-btn i {
  color: white;
  font-size: 1.2rem;
}

.video-dots {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background-color: #ffffff;
  transform: scale(1.2);
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

@media (max-width: 1200px) {
  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1.3rem;
  }
}

@media (max-width: 992px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
    padding: 10% 5%;
  }

  .hero-content,
  .hero-image {
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 5%;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
    padding: 15px;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .cta-button {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-image {
    align-items: center;
    justify-content: center;
  }
}
</style>
