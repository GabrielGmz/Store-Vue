<script setup>
import { ref } from 'vue'
import Modal from '../components/modal.vue'
import Card from '@/components/Card.vue'
import Footer from '@/components/footer.vue'
import Navbar from '@/components/Navbar.vue'

const showModal = ref(false)
const selectedImage = ref(null)

const openImageModal = (src) => {
  selectedImage.value = src
  showModal.value = true
}

const closeImageModal = () => {
  showModal.value = false
  selectedImage.value = null
}

const goToWhatsApp = (product) => {
  const phoneNumber = '+50376289891'
  const message =
    `Hola, estoy interesado en el siguiente producto de su catálogo:\n\n` +
    `Nombre: ${product.name}\n` +
    `Descripción: ${product.description}\n` +
    `Precio: ${product.price}\n\n` +
    `¿Podría darme más información?`
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}

const products_flowers = ref([
  {
    name: 'Ramo Pink',
    description: 'Descripción del ramo pink',
    price: '$10.00',
    image: '/Productos/ramo1.jpg',
  },
  {
    name: 'Ramo Rosa',
    description: 'Descripción del ramo rosa',
    price: '$20.00',
    image: '/Productos/ramo2.jpg',
  },
  {
    name: 'Ramo Blanco',
    description: 'Descripción del ramo blanco',
    price: '$30.00',
    image: '/Productos/ramo3.jpg',
  },
  {
    name: 'Ramo Multicolor',
    description: 'Descripción del ramo multicolor',
    price: '$40.00',
    image: '/Productos/ramo4.jpg',
  },
  {
    name: 'Ramo Naranja',
    description: 'Descripción del ramo naranja',
    price: '$50.00',
    image: '/Productos/ramo5.jpg',
  },
  {
    name: 'Ramo Azul',
    description: 'Descripción del ramo azul',
    price: '$60.00',
    image: '/Productos/ramo6.jpg',
  },
])

const custom_arragements = ref([
  {
    name: 'Arreglo 1',
    description: 'Descripción del arreglo 1',
    price: '$15.00',
    image: '/Productos/arreglo1.jpg',
  },
  {
    name: 'Arreglo 2',
    description: 'Descripción del arreglo 2',
    price: '$25.00',
    image: '/Productos/arreglo2.jpg',
  },
  {
    name: 'Arreglo 3',
    description: 'Descripción del arreglo 3',
    price: '$35.00',
    image: '/Productos/arreglo3.jpg',
  },
  {
    name: 'Arreglo 4',
    description: 'Descripción del arreglo 4',
    price: '$45.00',
    image: '/Productos/arreglo4.jpg',
  },
])

const hotwheels = ref([
  {
    name: 'Hotwheel 1',
    description: 'Descripción del hotwheel 1',
    price: '$5.00',
    image: '/Productos/hotwheel1.jpg',
  },
  {
    name: 'Hotwheel 2',
    description: 'Descripción del hotwheel 2',
    price: '$10.00',
    image: '/Productos/hotwheel2.jpg',
  },
  {
    name: 'Hotwheel 3',
    description: 'Descripción del hotwheel 3',
    price: '$15.00',
    image: '/Productos/hotwheel3.jpg',
  },
  {
    name: 'Hotwheel 4',
    description: 'Descripción del hotwheel 4',
    price: '$20.00',
    image: '/Productos/hotwheel4.jpg',
  },
])
</script>

<template>
  <div class="view">
    <Navbar />
    <main>
      <h1>Catálogo</h1>
      <h2>Ramos de flores</h2>
      <div class="product-list" v-if="true">
        <Card
          v-for="(product, index) in products_flowers"
          :key="index"
          :product="product"
          @click-image="openImageModal"
          @order-product="goToWhatsApp"
        />
      </div>
      <h2>Arreglos Personalizados</h2>
      <div class="product-list" v-if="true">
        <Card
          v-for="(product, index) in custom_arragements"
          :key="index"
          :product="product"
          @click-image="openImageModal"
          @order-product="goToWhatsApp"
        />
      </div>
      <h2>Hotwheels</h2>
      <div class="product-list" v-if="true">
        <Card
          v-for="(product, index) in hotwheels"
          :key="index"
          :product="product"
          @click-image="openImageModal"
          @order-product="goToWhatsApp"
        />
      </div>
    </main>
    <Modal :show="showModal" @close="closeImageModal">
      <img :src="selectedImage" alt="Imagen seleccionada" />
    </Modal>
  </div>
  <Footer />
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

main h1 {
  text-transform: uppercase;
  font-weight: 800;
  background: linear-gradient(
    90deg,
    rgb(6, 0, 122) 0%,
    rgb(0, 203, 190) 35%,
    rgb(255, 0, 230) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  text-shadow: 1px 1px 2px rgba(251, 0, 205, 0.5);
  margin: 0;
}

main > h2 {
  text-transform: uppercase;
  text-align: left;
  width: 100%;
  padding-left: 10px;
  font-weight: 800;
  font-size: 22px;
  background: linear-gradient(90deg, rgb(204, 34, 170) 0%, rgb(255, 0, 183) 35%, rgb(0, 0, 0) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  text-shadow: 1px 1px 2px rgba(255, 0, 225, 0.574);
  letter-spacing: 1px;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  gap: 2rem;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}

.modal img {
  max-width: 100%;
  max-height: 80vh;
  border-radius: 8px;
}

@media (max-width: 600px) {
  .product-list {
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .product-item {
    width: 100%;
  }

  .modal img {
    max-height: 60vh;
  }
}

@media (min-width: 601px) and (max-width: 900px) {
  .product-list {
    justify-content: center;
    padding: 10px;
  }

  .product-item {
    width: 100%;
  }

  .modal img {
    max-height: 70vh;
  }
}

@media (min-width: 901px) {
  .product-list {
    justify-content: center;
  }
}
</style>
