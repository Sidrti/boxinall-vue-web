import { createContact } from "@/service/contact.service";

export default  {
    namespaced: true,
    state:{
      showContactThanksModal:false
    },
    mutations: {
      UPDATE_MODAL_VISIBLE(state,payload) {
        state.showContactThanksModal = payload
      }
    },
    actions: {
        createContactAPICall(context,formData) {
            return createContact(formData).then((res) => {
              return res;
            });
          },
      updateModalVisible(context,payload) {
        context.commit("UPDATE_MODAL_VISIBLE", payload);
      },
    },
}