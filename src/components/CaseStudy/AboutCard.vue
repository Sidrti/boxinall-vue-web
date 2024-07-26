<template>
  <section class="reveal__section">
    <div class="hero_banner" data-aos="zoom-out" data-aos-duration="1500">
      <img :src="data.WebImg" alt="Web Image" class="hero_image" />
      <div
        class="hero_overlay aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <h1 style="color: white">{{ data.herotitle }}</h1>
        <p>{{ data.heroctaText }}</p>
      </div>
    </div>

    <div class="container">
      <div class="detail__panel">
        <div class="left_sec" data-aos="fade-right" data-aos-duration="1000">
          <h2 class="heading2">{{ data.title }}</h2>
          <p class="para">{{ data.description }}</p>
        </div>
        <div
          class="right_sec"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <!-- :data-aos="index % 2 === 0 ? 'flip-left' : 'flip-right'" -->
          <div class="grid_wrapper">
            <div
              v-for="(item, index) in data.details"
              :key="index"
              class="indus_service"
              :data-aos="index % 2 === 0 ? 'fade-up-right' : 'fade-up-left'"
              :data-aos-delay="150 * (index + 1)"
              data-aos-duration="800"
            >
              <span class="industry">{{ item.label }}</span>
              <a
                v-if="item.isLink"
                :class="['indushead', { based_clr: item.isColored }]"
                :href="item.value"
                target="_blank"
              >
                {{ item.text }}
              </a>
              <span
                v-else
                :class="['indushead', { based_clr: item.isColored }]"
              >
                {{ item.text }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wave-divider"></div>

    <div class="container">
      <div class="services__panel" data-aos="fade-up" data-aos-duration="1200">
        <h2
          class="services__title"
          data-aos="zoom-in-up"
          data-aos-duration="800"
        >
          Our Services Provided
        </h2>
        <div class="services__grid">
          <div
            v-for="(service, index) in data.services"
            :key="index"
            class="service__item"
            :data-aos="
              ['zoom-in', 'fade-up', 'flip-left', 'flip-right'][index % 4]
            "
            :data-aos-duration="800"
            :data-aos-delay="100 * (index + 1)"
          >
            <div class="service__icon">
              <i
                :class="['fas', serviceIcons[index % serviceIcons.length]]"
              ></i>
            </div>
            <h3 class="service__heading">{{ service.title }}</h3>
            <ul class="service__list">
              <li v-for="(list, idx) in service.items" :key="idx">
                {{ list }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="skew-divider"></div>

    <div class="container">
      <div
        class="challenges__panel"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 class="section__title" data-aos="fade-down" data-aos-duration="800">
          Our Project Challenges
        </h2>
        <div class="challenges__grid">
          <div
            v-for="(challenge, index) in data.challenges"
            :key="index"
            class="challenge__item"
            :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
            :data-aos-duration="800"
            :data-aos-delay="100 * (index + 1)"
          >
            <div class="challenge__content">
              <h3 class="challenge__heading">{{ challenge.title }}</h3>
              <p class="challenge__text">{{ challenge.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tilt-divider"></div>

    <div class="container">
      <div class="process__panel" data-aos="fade-up" data-aos-duration="1000">
        <h2 class="section__title" data-aos="fade-down" data-aos-duration="800">
          Our Development Process
        </h2>
        <div
          class="process__content"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <h3 class="process__heading">{{ data.development.subtitle }}</h3>
          <div class="process__steps">
            <div
              v-for="(description, index) in data.development.description"
              :key="index"
              class="process__step"
              :data-aos="'fade-up'"
              :data-aos-delay="150 * (index + 1)"
            >
              <div class="step__number">{{ index + 1 }}</div>
              <p class="process__text">{{ description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="zigzag-divider"></div>

    <div class="results__background">
      <div class="container">
        <div class="results__panel" data-aos="fade-up" data-aos-duration="1000">
          <h2
            class="section__title"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            The Results
          </h2>
          <div class="results__grid">
            <div
              v-for="(result, index) in data.results"
              :key="index"
              class="result__item"
              :data-aos="'zoom-in'"
              :data-aos-duration="800"
              :data-aos-delay="200 * (index + 1)"
            >
              <div class="result__circle">
                <div class="result__number">{{ result.number }}</div>
              </div>
              <div class="result__text">{{ result.text }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="wave-divider"></div> -->
    <!-- <div class="skew-divider"></div> -->
    <!-- <div class="curved-divider"></div> -->
    <!-- <div class="tilt-divider"></div> -->
    <!-- <div class="triangle-divider"></div> -->
    <!-- <div class="zigzag-divider"></div> -->
    <div class="asymmetrical-divider"></div>
  </section>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "AboutSection",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      serviceIcons: ["fa-cog", "fa-paint-brush", "fa-code", "fa-rocket"],
    };
  },
  mounted() {
    AOS.init({
      duration: 1000,
      once: false,
    });
  },
};
</script>

<style scoped>
.wave-divider {
  height: 100px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%231a1a1a' fill-opacity='1' d='M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,90.7C672,75,768,85,864,122.7C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
  background-size: cover;
  background-position: center;
}
.skew-divider {
  height: 100px;
  background-color: #1a1a1a;
  transform: skewY(-3deg);
  margin: 100px 0;
}
.curved-divider {
  height: 100px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%231a1a1a' fill-opacity='1' d='M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,149.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
  background-size: cover;
  background-position: center;
}
.tilt-divider {
  height: 100px;
  background-color: #1a1a1a;
  clip-path: polygon(0 0, 100% 50%, 100% 100%, 0% 100%);
}
.triangle-divider {
  height: 100px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%231a1a1a' fill-opacity='1' d='M0,32L1440,288L1440,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
  background-size: cover;
  background-position: center;
}
.zigzag-divider {
  height: 100px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%231a1a1a' fill-opacity='1' d='M0,160L48,176C96,192,192,224,288,240C384,256,480,256,576,234.7C672,213,768,171,864,165.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
  background-size: cover;
  background-position: center;
}
.asymmetrical-divider {
  height: 100px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%231a1a1a' fill-opacity='1' d='M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,154.7C672,181,768,203,864,186.7C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
  background-size: cover;
  background-position: center;
}

.reveal__section {
  padding: 0 0 100px 0;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: #0a0a0a;
  color: #ffffff;
}

.hero_banner {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.hero_image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero_overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
}

.hero_overlay h1 {
  font-size: 4rem;
  margin-bottom: 20px;
}

.hero_overlay p {
  font-size: 1.5rem;
  max-width: 800px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.detail__panel {
  display: flex;
  justify-content: space-between;
  margin: 100px 0;
}

.left_sec,
.right_sec {
  flex: 1;
  margin: 0 15px;
}

.heading2 {
  font-size: 2.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
}

.para {
  font-size: 1.1rem;
  line-height: 1.6;
}

.grid_wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.indus_service {
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.indus_service:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.industry {
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.indushead {
  display: block;
  color: #3498db;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.indushead:hover {
  color: #2980b9;
}

.based_clr {
  color: #e74c3c;
}

.services__panel,
.challenges__panel,
.process__panel {
  margin: 100px 0;
}

.section__title,
.services__title {
  font-size: 3rem;
  color: #ffffff;
  text-align: center;
  margin-bottom: 50px;
}

.services__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.service__item {
  background-color: #1a1a1a;
  border-radius: 15px;
  padding: 40px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.service__item:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.service__icon {
  font-size: 3rem;
  color: #3498db;
  margin-bottom: 20px;
}

.service__heading {
  font-size: 1.8rem;
  color: #ffffff;
  margin-bottom: 20px;
}

.service__list {
  list-style-type: none;
  padding: 0;
}

.service__list li {
  color: #cccccc;
  margin-bottom: 10px;
  font-size: 1.1rem;
  line-height: 1.6;
}

.challenges__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.challenge__item {
  background-color: #1a1a1a;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.challenge__content {
  padding: 40px;
}

.challenge__heading {
  font-size: 1.8rem;
  color: #3498db;
  margin-bottom: 20px;
}

.challenge__text {
  color: #cccccc;
  font-size: 1.1rem;
  line-height: 1.6;
}

.process__content {
  background-color: #1a1a1a;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.process__heading {
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 30px;
  text-align: center;
}

.process__steps {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.process__step {
  display: flex;
  align-items: flex-start;
}

.step__number {
  background-color: #3498db;
  color: #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 20px;
  flex-shrink: 0;
}

.process__text {
  color: #cccccc;
  font-size: 1.1rem;
  line-height: 1.6;
}

.results__background {
  background-color: #1a1a1a;
  padding: 100px 0;
}

.results__grid {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.result__item {
  text-align: center;
  margin: 20px;
}

.result__circle {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #3498db;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.result__circle:hover {
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(52, 152, 219, 0.5);
}

.result__number {
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffffff;
}

.result__text {
  font-size: 1.2rem;
  color: #ffffff;
}

@media (max-width: 768px) {
  .hero_overlay h1 {
    font-size: 2.5rem;
  }

  .hero_overlay p {
    font-size: 1.1rem;
  }

  .detail__panel,
  .services__grid,
  .challenges__grid {
    flex-direction: column;
    grid-template-columns: 1fr;
  }

  .grid_wrapper {
    grid-template-columns: 1fr;
    padding-right: 20px;
  }

  .left_sec,
  .right_sec,
  .service__item,
  .challenge__item,
  .result__item {
    width: 100%;
    margin-bottom: 30px;
  }

  .section__title,
  .services__title {
    font-size: 2.2rem;
  }

  .heading2 {
    font-size: 2rem;
  }

  .service__heading,
  .challenge__heading {
    font-size: 1.5rem;
  }

  .process__heading {
    font-size: 1.8rem;
  }

  .result__circle {
    width: 120px;
    height: 120px;
  }

  .result__number {
    font-size: 2rem;
  }

  .result__text {
    font-size: 1rem;
  }
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

.service__icon {
  animation: float 3s ease-in-out infinite;
}

.indus_service,
.service__item,
.challenge__item,
.process__content,
.result__circle {
  transition: all 0.3s ease;
}

.indus_service:hover,
.service__item:hover,
.challenge__item:hover,
.process__content:hover,
.result__circle:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}
</style>
