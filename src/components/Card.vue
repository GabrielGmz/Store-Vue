<template>
  <div class="product-item">
    <img
      v-if="product?.image"
      :src="product?.image"
      alt="Product Image"
      @click="$emit('click-image', product.image)"
      style="cursor: pointer"
    />
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <p>{{ product.price }}</p>
    <button class="btn" @click="$emit('order-product', product)">Pedir</button>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
defineEmits(['click-image', 'order-product'])
</script>

<style scoped>
.product-item {
  border: 1px solid #6b6b6b1d;
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ff9cef19;
  color: #0f004fa7;
  max-width: 400px;
}

.product-item img {
  width: 100%;
  height: auto;
  max-height: 300px;
  border-radius: 10px;
  object-fit: cover;
}

.btn {
  background-color: #ff00d4;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 800;
  text-transform: uppercase;
}
</style>
