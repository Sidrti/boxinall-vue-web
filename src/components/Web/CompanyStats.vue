<template>
    <div class="statistics-section pad-tb tilt3d" style="background: #333; margin-top: 100px; border-radius: 5px;">
        <div class="container" >
            <div class="row justify-content-center text-center">
                <div class="col-lg-4 col-sm-6">
                    <div class="statistics">
                        <div class="statistics-img" ref="tilt1">
                            <img src="../../assets/images/icons/startup.svg" alt="years" class="img-fluid" />
                        </div>
                        <div class="statnumb">
                            <number :to="6" :duration="2" class="text-white" />
                            <span class="text-white">+</span>
                            <p class="text-white">Years In Business</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="statistics">
                        <div class="statistics-img" ref="tilt2">
                            <img src="../../assets/images/icons/team.svg" alt="team" class="img-fluid" />
                        </div>
                        <div class="statnumb">
                            <number :to="30" :duration="3" class="text-white" /><span class="text-white">+</span>
                            <p class="text-white">Team Members</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row text-center mt-4">
                <div class="col-lg-3 col-sm-6">
                    <div class="statistics">
                        <div class="statistics-img" ref="tilt3">
                            <img src="../../assets/images/icons/deal.svg" alt="happy" class="img-fluid" />
                        </div>
                        <div class="statnumb">
                            <number :to="200" :duration="5" class="text-white" />
                            <p class="text-white">Happy Clients</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="statistics">
                        <div class="statistics-img" ref="tilt4">
                            <img src="../../assets/images/icons/computers.svg" alt="project" class="img-fluid" />
                        </div>
                        <div class="statnumb counter-number">
                            <number :to="230" :duration="2" class="text-white" /><span class="text-white">+</span>
                            <p class="text-white">Projects Done</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="statistics">
                        <div class="statistics-img" ref="tilt5">
                            <img src="../../assets/images/icons/worker.svg" alt="work" class="img-fluid" />
                        </div>
                        <div class="statnumb">
                            <number :to="17" :duration="4" class="text-white" /><span class="text-white" >k</span>
                            <p class="text-white">Hours Worked</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="statistics mb0">
                        <div class="statistics-img" ref="tilt6">
                            <img src="../../assets/images/icons/customer-service.svg" alt="support" class="img-fluid" />
                        </div>
                        <div class="statnumb">
                            <span class="text-white">24/7</span>
                            <p class="text-white">Support Available</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VanillaTilt from 'vanilla-tilt';

export default {
    mounted() {
        this.initTilt();
    },
    methods: {
        initTilt() {
            VanillaTilt.init(this.$refs.tilt1, this.options);
            VanillaTilt.init(this.$refs.tilt2, this.options);
            VanillaTilt.init(this.$refs.tilt3, this.options);
            VanillaTilt.init(this.$refs.tilt4, this.options);
            VanillaTilt.init(this.$refs.tilt5, this.options);
            VanillaTilt.init(this.$refs.tilt6, this.options);
        }
    },
};
</script>

<style scoped>
.statistics-section {
    background: #333; /* Dark background */
    color: white; /* White text color */
}

.statistics-img img {
    max-width: 100%;
    height: auto;
}

.statistics {
    padding: 20px;
    border-radius: 10px;
    background: #444; /* Slightly lighter dark background */
    transition: transform 0.2s;
}

.statistics:hover {
    transform: translateY(-5px);
}

.statnumb {
    text-align: center;
}

.statnumb number {
    font-size: 2em;
    color: white; /* White number color */
}

.text-white {
    color: white !important;
}
</style>
