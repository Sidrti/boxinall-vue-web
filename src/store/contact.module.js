import { createContact } from "@/service/contact.service";

export default  {
    namespaced: true,
    state:{
  
    },
    mutations: {

    },
    actions: {
        createContactAPICall(context,formData) {
            return createContact(formData).then((res) => {
              return res;
            });
          },
      },
}