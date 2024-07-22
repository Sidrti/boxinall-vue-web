<template>
    <section class="work-category pad-tb" style="background:black;">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="common-heading ptag text-center">

                        <h1 class="text-white mb-5"> Technology We Serve</h1>
                        <h6 class="text-white" style="opacity: 0.8;">Our digital solutions are built using state-of-the-art technologies that enable us to deliver industry-leading, scalable,
                            and transformational customer experiences. By combining innovation, expertise,
                             and technology, we help our clients achieve digital transformation and stay ahead of the curve.</h6>
                    </div>
                </div>
            </div>
            <div class="row mt30">
                <div class="col-lg-3 col-sm-6 col-6" data-aos="fade-in"  data-aos-delay="100" data-aos-duration="1000">
                    <div class="industry-workfor hoshd">
                        <img src="../../assets/images/icons/house.svg" alt="Real Estate" class="img-fluid">
                        <h6 class="text-white">PHP</h6>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-6" data-aos="fade-in"  data-aos-delay="300" data-aos-duration="1000">
                    <div class="industry-workfor hoshd">
                        <img src="../../assets/images/icons/travel-case.svg" alt="Travel & Tours" class="img-fluid">
                        <h6 class="text-white">Laravel</h6>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-6" data-aos="fade-in"  data-aos-delay="500" data-aos-duration="1000">
                    <div class="industry-workfor hoshd">
                        <img src="../../assets/images/icons/video-tutorials.svg" alt="Education" class="img-fluid">
                        <h6 class="text-white">Node JS</h6>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-6" data-aos="fade-in"  data-aos-delay="700" data-aos-duration="1000">
                    <div class="industry-workfor hoshd">
                        <img src="../../assets/images/icons/taxi.svg" alt="Transport" class="img-fluid">
                        <h6 class="text-white">React JS</h6>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-6" data-aos="fade-in"  data-aos-delay="900" data-aos-duration="1000">
                    <div class="industry-workfor hoshd">
                        <img src="../../assets/images/icons/event.svg" alt="Event" class="img-fluid">
                        <h6 class="text-white">Angular JS</h6>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-6" data-aos="fade-in" data-aos-delay="1100" data-aos-duration="1000">
                    <div class="industry-workfor hoshd">
                        <img src="../../assets/images/icons/smartphone.svg" alt="eCommerce" class="img-fluid">
                        <h6 class="text-white">Vue JS</h6>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-6" data-aos="fade-in" data-aos-delay="1500" data-aos-duration="1000">
                    <div class="industry-workfor hoshd">
                        <img src="../../assets/images/icons/healthcare.svg" alt="Healthcare" class="img-fluid">
                        <h6 class="text-white">Wordpress</h6>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-6" data-aos="fade-in" data-aos-delay="1700" data-aos-duration="1000">
                    <div class="industry-workfor hoshd">
                        <img src="../../assets/images/icons/money-growth.svg" alt="Finance" class="img-fluid">
                        <h6 class="text-white">DotNet</h6>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-6" data-aos="fade-in" data-aos-delay="1900" data-aos-duration="1000">
                    <div class="industry-workfor hoshd">
                        <img src="../../assets/images/icons/baker.svg" alt="Restaurant" class="img-fluid">
                        <h6 class="text-white">Javascript</h6>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-6" data-aos="fade-in" data-aos-delay="2100" data-aos-duration="1000">
                    <div class="industry-workfor hoshd">
                        <img src="../../assets/images/icons/mobile-app.svg" alt="On-Demand" class="img-fluid">
                        <h6 class="text-white">Java</h6>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-6" data-aos="fade-in" data-aos-delay="2300" data-aos-duration="1000">
                    <div class="industry-workfor hoshd">
                        <img src="../../assets/images/icons/groceries.svg" alt="Grocery" class="img-fluid">
                        <h6 class="text-white">Python</h6>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'IndustryComponent',
};
</script>

<style scoped>
.work-category {
    background: #333; /* Dark background */
    color: white; /* White text */
    padding-top: 100px; /* Example padding */
}

.common-heading h2 {
    font-size: 32px; /* Adjust as needed */
    margin-bottom: 15px;
}

.common-heading p {
    font-size: 18px; /* Adjust as needed */
    line-height: 1.6;
}

.industry-workfor {
    text-align: center;
    padding: 20px;
    background-color: #444; /* Slightly lighter dark background */
    border-radius: 10px;
    transition: transform 0.2s;
    margin-bottom: 20px;
}

.industry-workfor:hover {
    transform: translateY(-5px);
}

.industry-workfor img {
    max-width: 50px; /* Adjust size as needed */
    height: auto;
}
</style>
