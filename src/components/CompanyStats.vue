<template>
    <div class="statistics-section pad-tb tilt3d" style="background: #c7ecff;background: -moz-linear-gradient(top, #c7ecff 0%, #f9efff 100%);background: -webkit-linear-gradient(top, #c7ecff 0%,#f9efff 100%);background: linear-gradient(to bottom, #c7ecff 0%,#f9efff 100%);">
        <div class="container">
            <div class="row justify-content-center t-ctr">
                <div class="col-lg-4 col-sm-6">
                    <div class="statistics">
                        <div class="statistics-img" ref="tilt1">
                            <img src="../assets/images/icons/startup.svg" alt="years" class="img-fluid" />
                        </div>
                        <div class="statnumb">
                            <span class="counter">15</span><span>+</span>
                            <p>Year In Business</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="statistics">
                        <div class="statistics-img" ref="tilt2">
                            <img src="../assets/images/icons/team.svg" alt="team" class="img-fluid" />
                        </div>
                        <div class="statnumb">
                            <span class="counter">80</span><span>+</span>
                            <p>Team Members</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row small t-ctr">
                <div class="col-lg-3 col-sm-6">
                    <div class="statistics">
                        <div class="statistics-img" ref="tilt3">
                            <img src="../assets/images/icons/deal.svg" alt="happy" class="img-fluid" />
                        </div>
                        <div class="statnumb">
                            <span class="counter">450</span>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="statistics">
                        <div  class="statistics-img" ref="tilt4">
                            <img src="../assets/images/icons/computers.svg" alt="project" class="img-fluid" />
                        </div>
                        <div class="statnumb counter-number">
                            <span class="counter">48</span><span>k</span>
                            <p>Projects Done</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="statistics">
                        <div class="statistics-img" ref="tilt5">
                            <img src="../assets/images/icons/worker.svg" alt="work" class="img-fluid"/>
                        </div>
                        <div class="statnumb">
                            <span class="counter">95</span><span>k</span>
                            <p>Hours Worked</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="statistics mb0">
                        <div class="statistics-img" ref="tilt">
                            <img src="../assets/images/icons/customer-service.svg" alt="support" class="img-fluid" ref="tilt6" />
                        </div>
                        <div class="statnumb">
                            <span>24/7</span>
                            <p>Support Available</p>
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
        this.initTint();
    },
    methods: {
        initTint() {
            VanillaTilt.init(this.$refs.tilt1,this.options)
            VanillaTilt.init(this.$refs.tilt2,this.options)
            VanillaTilt.init(this.$refs.tilt3,this.options)
            VanillaTilt.init(this.$refs.tilt4,this.options)
            VanillaTilt.init(this.$refs.tilt5,this.options)
            VanillaTilt.init(this.$refs.tilt6,this.options)
        }
    }
}
</script>