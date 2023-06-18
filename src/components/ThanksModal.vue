<template>
    <div class="thanks-modal">
      <div class="modal-overlay"></div>
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Thanks for Submitting !</h5>
          <button type="button" class="btn-close" aria-label="Close" @click="closeClick"></button>
        </div>
        <div class="modal-body">
          <p>We appreciate your message and will get back to you within 24 hours.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      // Prevent scrolling on the background content when the modal is open
      document.body.style.overflow = 'hidden';
    },
    beforeDestroy() {
      // Restore scrolling on the background content when the modal is closed
      document.body.style.overflow = '';
    },
    methods: {
        closeClick() {
            this.$store.dispatch('contact/updateModalVisible',false);
        }
    }
  };
  </script>
  
  <style scoped>
  .thanks-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }
  
  .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: -1;
  }
  
  .modal-content {
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
    max-width: 400px;
    width: 100%;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  }
  
  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .modal-close {
    background: none;
    border: none;
    color: #007bff;
    cursor: pointer;
    font-size: 14px;
  }
  
  .modal-body {
    margin-bottom: 20px;
  }
  .btn-close {
    width:12px !important;
  }
  .btn-close:hover {
    background-color: red !important;
    color: white !important;
  }
  </style>
  