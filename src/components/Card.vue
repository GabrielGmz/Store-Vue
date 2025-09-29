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
    <p class="description">{{ product.description }}</p>
    <p class="price">{{ product.price }}</p>
    <button class="bt-details" @click="$emit('open-form', product)">Ordenar</button>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
})

defineEmits(['click-image', 'open-form'])
</script>

<style scoped>
.product-item {
  border: 1px solid #6b6b6b1d;
  padding: 15px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  color: #0f004fa7;
  max-width: 400px;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-item img {
  width: 100%;
  height: 100%;
  max-height: 250px;
  border-radius: 10px;
  object-fit: cover;
}

.product-item h2 {
  font-size: 1.5em;
  margin: 5px 0;
}
.description {
  flex-grow: 1;
  margin: 0;
  padding: 0;
}

.price {
  font-size: 1.2em;
  color: #ff00d4;
  font-weight: bold;
  margin: 10px 0;
  align-items: center;
}

.bt-details {
  background-color: #ff00d4;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 800;
  text-transform: uppercase;
  align-items: flex-end;
  bottom: 0;
}
</style>
