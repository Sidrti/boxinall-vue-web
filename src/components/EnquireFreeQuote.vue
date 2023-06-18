<template>
    <div>
        <ValidationObserver v-slot="{ handleSubmit }" ref="observerRef">
        <div class="row">
            <ValidationProvider name="name" rules="required|max:20" v-slot="{ errors }" class="form-group col-sm-6" :class="showIcons ? 'floating-label': '' ">
                <div class="formicon" v-if="showIcons"><i class="fas fa-user"></i></div>
                <input v-model="input.name" type="text" placeholder="Enter Name" :class="showIcons ? 'floating-input' : '' ">
                <span class="d-block">
                    <p class="text-danger text-small error-msg">{{ errors[0] }}</p>
                </span>
            </ValidationProvider>
            <ValidationProvider name="email" rules="required|email" v-slot="{ errors }" class="form-group col-sm-6" :class="showIcons ? 'floating-label': '' ">
                <div class="formicon" v-if="showIcons"><i class="fas fa-envelope"></i></div>
                <input v-model="input.email" type="email" placeholder="Enter Email" :class="showIcons ? 'floating-input' : '' ">
                <span class="d-block">
                    <p class="text-danger text-small error-msg">{{ errors[0] }}</p>
                </span>
            </ValidationProvider>
        </div>

        <div class="row" v-if="page != 'CONTACT'">
            <VuePhoneNumberInput v-model="input.mobile" class="form-group col mb-2" @update="mobileInput = $event" />
            <span class="d-block">
                <p class="text-danger text-small error-msg" v-if="!mobileInput.isValid && input.mobile != null ">Incorrect Mobile</p>
            </span>
        </div>

        <div class="row">
            <ValidationProvider v-if="page != 'CONTACT'" name="interest" rules="required" v-slot="{ errors }" class="form-group col" :class="showIcons ? 'floating-label': '' ">
                <div class="formicon" v-if="showIcons"><i class="fas fa-file-alt"></i></div>
                <select name="Dtype" required v-model="input.interest" :class="showIcons ? 'floating-input' : '' ">
                    <option value="" disabled selected>Select an option</option>
                    <option :value="item.title" v-for="item, index in servicesList" :key="index">{{
                        item.title }}</option>
                </select>
                <span class="d-block">
                    <p class="text-danger text-small error-msg">{{ errors[0] }}</p>
                </span>
            </ValidationProvider>

            <ValidationProvider v-if="page == 'CONTACT'" name="interest" rules="required" v-slot="{ errors }" class="form-group col-sm-6" :class="showIcons ? 'floating-label': '' ">
                <div class="formicon" v-if="showIcons"><i class="fas fa-file-alt"></i></div>
                <select name="Dtype" required v-model="input.interest" :class="showIcons ? 'floating-input' : '' ">
                    <option value="" disabled selected>Intrested In</option>
                    <option :value="item.title" v-for="item, index in servicesList" :key="index">{{
                        item.title }}</option>
                    <option value="Other" key="other">Other</option>
                </select>
                <span class="d-block">
                    <p class="text-danger text-small error-msg">{{ errors[0] }}</p>
                </span>
            </ValidationProvider>
            <ValidationProvider v-if="page == 'CONTACT'" name="location" rules="required" v-slot="{ errors }" class="form-group col-sm-6" :class="showIcons ? 'floating-label': '' ">
                <div class="formicon" v-if="showIcons"><i class="fas fa-map-marker-alt"></i></div>
                <select name="Dtype" required v-model="input.location" :class="showIcons ? 'floating-input' : '' ">
                    <option value="" disabled selected>Select your location</option>
                    <option :value="item.name" v-for="item, index in country" :key="index">{{item.emoji}} {{
                        item.name }}</option>
                </select>
                <span class="d-block">
                    <p class="text-danger text-small error-msg">{{ errors[0] }}</p>
                </span>
            </ValidationProvider>
        </div>
        <div class="row">
            <ValidationProvider name="brief" rules="required|min:10|max:500" v-slot="{ errors }" class="form-group col" :class="showIcons ? 'floating-label': '' ">
                <div class="formicon" v-if="showIcons"><i class="fas fa-comment-dots"></i></div>
                <textarea id="message" rows="5" placeholder="Enter your message" required v-model="input.breif" :class="showIcons ? 'floating-input': '' "></textarea>
                <span class="d-block">
                    <p class="text-danger text-small error-msg">{{ errors[0] }}</p>
                </span>
            </ValidationProvider>
        </div>
        <span class="btn btn-main bg-btn3 gradient-bg" @click="handleSubmit(submitClick)"
            :class="{ 'loading': $store.state.loader.loading }">
            <span v-if="$store.state.loader.loading">Loading...</span>
            <span v-else>Submit</span>
        </span>
    </ValidationObserver>
    <ThanksModal v-if="$store.state.contact.showContactThanksModal"></ThanksModal>
    </div>
</template>
<script>
import data from '../assets/data/service.json'
import country from '../utils/country.json'
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import ThanksModal from './ThanksModal.vue';
export default {
    data() {
        return {
            input: { interest: "",location:"" },
            servicesList: data,
            country:country,
            mobileInput:{isValid:true}
        }
    },
    methods: {
        submitClick() {
            this.input.page = this.$route.path;
            this.$store.dispatch('contact/createContactAPICall', this.input).then(res => {
                if (res.data.status == 1) {
                    this.$store.dispatch('contact/updateModalVisible', true);
                    this.input = {};
                    this.$refs.observerRef.reset();

                }
                else {
                    alert('Form not submitted');
                }
            });
        }
    },
    props: {
        showIcons: {
          type:Boolean,
          default:false
        },
        page: {
            type:String
        }
    },
    components: { VuePhoneNumberInput,ThanksModal}
}

</script>
<style>
.loading {
    pointer-events: none;
    opacity: 0.5;
}

.error-msg {
    margin-top: -15px;
    font-size: 12px;
    line-height: 15px;
}

.d-block {
    min-height: 20px;
}
.gradient-bg {
    background: linear-gradient(to right, #ffbd84 0%,#ff1f8e 100%) !important;
}
</style>