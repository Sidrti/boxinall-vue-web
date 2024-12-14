<template>
  <section class="portfolio-section-nx pad-tb" style="background-color: black">
    <div style="padding: 10px 40px">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="common-heading">
            <span>Our Work</span>
            <h2 class="mb0" style="color: white">Our Latest Creative Work</h2>
          </div>
        </div>
      </div>
      <div>
        <Portfolio2
          v-for="project in projectsData"
          :key="project.id"
          :project="project"
        />
        <Achievements />
        <TalkToExpert />
        <!-- <PartnerWithUs /> -->
      </div>
    </div>
  </section>
</template>
<style>
.bg-gray {
  background-color: #333333;
  color: white;
  margin-left: 5px;
}
</style>
<script>
import TalkToExpert from "./newcomponents/TalkToExpert.vue";
import Portfolio2 from "./newcomponents/Portfolio2.vue";
import Achievements from "./newcomponents/Achievements.vue";
import portfolio from "../assets/data/portfolio.json";
import VanillaTilt from "vanilla-tilt";
export default {
  components: {
    Portfolio2,
    Achievements,
    TalkToExpert,
    // PartnerWithUs,
  },
  mounted() {
    this.initTint();
  },
  methods: {
    initTint() {
      VanillaTilt.init(this.$refs.tilt1, {});
      VanillaTilt.init(this.$refs.tilt2, {});
      VanillaTilt.init(this.$refs.tilt3, {});
      VanillaTilt.init(this.$refs.tilt4, {});
    },
  },
  data() {
    return {
      portfolioList: portfolio ? portfolio : [],
      projectsData: [
        {
          title: "UDates- Dating & Chat",
          description:
            "A modern dating and chat application built for both Android and iOS platforms. Utilizing React Native for cross-platform development, this app offers a seamless user experience with real-time chat features. The backend is powered by PHP and MySQL, ensuring robust data management and user matching algorithms.",
          stack: ["Mobile App", "Android", "iOS"],
          image: "/image/pf3.png",
          smallimage: "/image/pf1.png",
          link: "/case-study/dating-application",
          sitelink:
            "https://play.google.com/store/apps/details?id=com.app.udates&hl=en",
          orientation: "left",
        },
        {
          title: "Doctor Appointment Design",
          description:
            "A comprehensive UI/UX design project for a doctor appointment application. This project encompasses the full design process from product strategy and branding to creating a cohesive design system. The intuitive interface, designed in Figma, aims to simplify the process of booking medical appointments and managing healthcare needs.",
          stack: ["Design", "Figma", "UI", "UX"],
          image: "/image/pf5.png",
          smallimage: "/image/pf4.png",
          link: "/case-study/doctor-appointment-application",
          sitelink:
            "https://www.figma.com/design/GrvBMZDMscP3AThHJEXWSL/Sakhee-Copy?node-id=0-1&t=fmBdOmst0J0IHHLB-0",
          orientation: "right",
        },
        {
          title: "Real-Estate-Website",
          description:
            "A dynamic real estate website built on WordPress, offering a user-friendly platform for property listings and searches. This project combines attractive design with practical functionality, leveraging WordPress's flexibility along with custom HTML and MySQL integration to deliver a comprehensive solution for real estate professionals and clients.",
          stack: ["Design", "Wordpress"],
          image: "/image/pf6.png",
          smallimage: "/image/pf7.png",
          link: "/case-study/real-estate-website",
          orientation: "left",
          sitelink: "https://aitsquare.com/",
        },
        {
          title: "Event Management App",
          description:
            "A sleek and efficient event management application designed with Figma. This UI/UX project focuses on creating an intuitive interface for event planning, ticketing, and attendee management. The design prioritizes user experience, making it easy for organizers to create and manage events, and for attendees to discover and participate in them.",
          stack: ["Figma", "UI/UX"],
          image: "/image/pf10.png",
          smallimage: "/image/pf8.png",
          link: "/case-study/event-management-aPP",
          orientation: "right",
          sitelink:
            "https://www.figma.com/design/vAo6ZzBjRSOM8D6PkzPf5G?fuid=1013042852031927202&prev-plan-id=1303336793008847953&prev-plan-type=team&prev-selected-view=recentsAndSharing&prev-tab=recently-viewed",
        },
        {
          title: "Travel Flight Booking Website",
          description:
            "A comprehensive travel and flight booking website that simplifies the process of planning and booking trips. Built with PHP and integrated with MySQL, this platform offers robust search capabilities, secure booking processes, and user account management. The responsive design ensures a smooth experience across all devices.",
          stack: ["Website", "PHP"],
          image: "/image/pf13.png",
          smallimage: "/image/pf14.png",
          link: "/case-study/travel-booking-system",
          orientation: "left",
          sitelink: "https://www.bigvaluetravels.com/",
        },
        {
          title: "98degreenorth",
          description:
            "An innovative web and mobile application built with Vue.js, PHP, and MySQL. This project offers a unique service or product (specifics not provided), leveraging modern web technologies to create a responsive and interactive user experience. The combination of a web platform and mobile app ensures accessibility across all devices.",
          stack: ["Website", "Mobile app"],
          image: "/image/98.png",
          smallimage: "/image/pf93.jpg",
          link: "/case-study/98degreenorth",
          orientation: "right",
          sitelink: "https://98degreenorth.com/",
        },
        {
          title: "Michelin Tyre",
          description:
            "A specialized website and mobile application developed for Michelin Tyre, focusing on user account management and possibly e-commerce functionality. Built with Vue.js for a reactive frontend, and supported by PHP and MySQL on the backend, this project likely offers features such as product browsing, order management, and user-specific information related to Michelin products.",
          stack: ["Website", "Mobile app"],
          image: "/image/pf32.png",
          smallimage: "/image/pf92.jpg",
          link: "/case-study/Michelin-Tyre",
          orientation: "left",
          sitelink:
            "https://indus.swagat.michelin.in/account/login?returnUrl=%2F",
        },
        {
          title: "Michelin Tyre",
          description:
            "A specialized website and mobile application developed for Michelin Tyre, focusing on user account management and possibly e-commerce functionality. Built with Vue.js for a reactive frontend, and supported by PHP and MySQL on the backend, this project likely offers features such as product browsing, order management, and user-specific information related to Michelin products.",
          stack: ["Website", "Mobile app"],
          image: "/image/pf32.png",
          smallimage: "/image/pf92.jpg",
          link: "/case-study/Michelin-Tyre",
          orientation: "left",
          sitelink:
            "https://indus.swagat.michelin.in/account/login?returnUrl=%2F",
        },
      ],
    };
  },
  computed: {
    filteredPortfolioList() {
      return this.portfolioList.filter((item) => {
        return (
          item.pageVisibleInUrl === this.$route.path ||
          item.pageVisibleInUrl === "*"
        );
      });
    },
  },
};
</script>
