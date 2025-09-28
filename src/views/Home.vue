<script setup>
import { ref } from 'vue'
import Modal from '../components/modal.vue'
import Card from '@/components/Card.vue'
import Alert from '@/components/Alert.vue'

import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

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
  {
    name: 'Ramo Amarillo',
    description: 'Descripción del ramo amarillo',
    price: '$70.00',
    image: '/Productos/ramo7.jpg',
  },
  {
    name: 'Ramo Rojo',
    description: 'Descripción del ramo rojo',
    price: '$80.00',
    image: '/Productos/ramo8.jpg',
  },
  {
    name: 'Ramo Morado',
    description: 'Descripción del ramo morado',
    price: '$90.00',
    image: '/Productos/ramo9.jpg',
  },
  {
    name: 'Ramo Verde',
    description: 'Descripción del ramo verde',
    price: '$100.00',
    image: '/Productos/ramo10.jpg',
  },
  {
    name: 'Ramo Celeste',
    description: 'Descripción del ramo celeste',
    price: '$110.00',
    image: '/Productos/ramo11.jpg',
  },
  {
    name: 'Ramo Fucsia',
    description: 'Descripción del ramo fucsia',
    price: '$120.00',
    image: '/Productos/ramo12.jpg',
  },
  {
    name: 'Ramo Lavanda',
    description: 'Descripción del ramo lavanda',
    price: '$130.00',
    image: '/Productos/ramo13.jpg',
  },
  {
    name: 'Ramo Turquesa',
    description: 'Descripción del ramo turquesa',
    price: '$140.00',
    image: '/Productos/ramo14.jpg',
  },
  {
    name: 'Ramo Coral',
    description: 'Descripción del ramo coral',
    price: '$150.00',
    image: '/Productos/ramo15.jpg',
  },
  {
    name: 'Ramo Champagne',
    description: 'Descripción del ramo champagne',
    price: '$160.00',
    image: '/Productos/ramo16.jpg',
  },
  {
    name: 'Ramo Violeta',
    description: 'Descripción del ramo violeta',
    price: '$170.00',
    image: '/Productos/ramo17.jpg',
  },
  {
    name: 'Ramo Magenta',
    description: 'Descripción del ramo magenta',
    price: '$180.00',
    image: '/Productos/ramo18.jpg',
  },
  {
    name: 'Ramo Salmón',
    description: 'Descripción del ramo salmón',
    price: '$190.00',
    image: '/Productos/ramo19.jpg',
  },
  {
    name: 'Ramo Lavanda',
    description: 'Descripción del ramo lavanda',
    price: '$200.00',
    image: '/Productos/ramo20.jpg',
  },
  {
    name: 'Ramo Pistacho',
    description: 'Descripción del ramo pistacho',
    price: '$210.00',
    image: '/Productos/ramo21.jpg',
  },
  {
    name: 'Ramo Champagne',
    description: 'Descripción del ramo champagne',
    price: '$220.00',
    image: '/Productos/ramo22.jpg',
  },
  {
    name: 'Ramo Cobre',
    description: 'Descripción del ramo cobre',
    price: '$230.00',
    image: '/Productos/ramo23.jpg',
  },
  {
    name: 'Ramo Marfil',
    description: 'Descripción del ramo marfil',
    price: '$240.00',
    image: '/Productos/ramo24.jpg',
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
    </main>
    <div class="soon">Próximamente <span>más productos</span></div>
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

.soon {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  padding: 30px;
  color: #ff76ba;
  border: #ff33da 2px dashed;
  border-radius: 8px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
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
