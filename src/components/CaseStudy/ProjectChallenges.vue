<template>
    <section class="project-challenges">

      <div class="content">
        <div class="left-section">
          <h2 class="left-heading">Our Project Challenges</h2>
        </div>
        <div class="right-section">
          <div class="card" v-for="(challenge, index) in challenges" :key="index">
            <div class="card-header">
              <span class="card-number">{{ index + 1 }}</span>
              <h3 class="card-heading">{{ challenge.title }}</h3>
            </div>
            <p class="card-content">{{ challenge.content }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>

  <script>
  export default {
    name: "ProjectChallenges",
    props: {
      challenges: {
        type: Array,
        required: true
      }
    }
  };
  </script>

<style scoped>
.project-challenges {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full viewport height */
}

.header {
  padding: 20px;
  text-align: center;
}

.heading {
  font-size: 36px;
  font-weight: bold;
  color: #333;
}

.content {
  display: flex;
  flex: 1;
}

.left-section {
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  margin-top: 20px;
}

.left-heading {
  font-size: 40px;
  font-weight: bold;
  color: #333;
}

.right-section {
  width: 50%;
  overflow-y: auto; /* Scrollable vertical content */
  padding: 20px;
}

.card {
  border: none;
  background-color: white;
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background-color: white;
}

.card-number {
  font-size: 100px;
  font-weight: bold;
  color: black;
  opacity: 0.1;
  margin-left: -60px;
}

.card-heading {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.card-content {
  font-size: 17px;
  color: black;
  font-weight: 500;
}

/* Mobile-specific styles */
@media (max-width: 768px) {
  .project-challenges {
    height: auto;
  }

  .content {
    flex-direction: column; /* Stack vertically */
  }

  .left-section, .right-section {
    width: 100%;
    padding: 20px;
  }

  .left-section {
    order: -1; /* Move heading to the top */
    align-items: center; /* Center heading horizontally */
    margin-bottom: 20px;
  }

  .card {
    margin-bottom: 15px;
  }
}
</style>


