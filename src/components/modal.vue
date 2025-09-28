<template>
  <transition name="modal-fade">
    <div class="modal" v-if="show" @click.self="closeModal">
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
})
const emit = defineEmits(['close'])
const closeModal = () => {
  emit('close')
}
</script>

<style scoped>
/* Fondo del modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

/* Animaciones de entrada y salida */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* Contenido del modal */
.modal-content {
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  transform: scale(1);
}

/* Animación de escala */
.modal-fade-enter-from .modal-content,
.modal-fade-leave-to .modal-content {
  transform: scale(0.95);
  opacity: 0;
}
</style>
