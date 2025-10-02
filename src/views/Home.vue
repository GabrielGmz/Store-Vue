<script setup>
import { ref } from 'vue'
import Modal from '../components/modal.vue'
import Card from '@/components/Card.vue'

import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

const showModal = ref(false)
const selectedImage = ref(null)

// nuevo: modal para el formulario
const showFormModal = ref(false)
const selectedProduct = ref(null)

// datos del formulario
const items = ref({
  mariposas: 0,
  coronas: 0,
  dedicatoria: 'Sin dedicatoria',
})

const openImageModal = (src) => {
  selectedImage.value = src
  showModal.value = true
}

const closeImageModal = () => {
  showModal.value = false
  selectedImage.value = null
}

// abrir formulario desde Card
const openOrderForm = (product) => {
  selectedProduct.value = product
  showFormModal.value = true
}

// cerrar formulario
const closeOrderForm = () => {
  showFormModal.value = false
  selectedProduct.value = null
  items.value = { mariposas: 0, coronas: 0, dedicatoria: 'Sin dedicatoria' }
}

// enviar a WhatsApp con los extras
const submitOrder = () => {
  if (!selectedProduct.value) return

  const phoneNumber = '+50376289891'
  const message =
    `Hola, quiero ordenar el siguiente producto de su catálogo:\n\n` +
    `${selectedImage.value ? `Imagen: ${selectedImage.value}\n` : ''}` +
    `Producto: ${selectedProduct.value.name}\n` +
    `Precio: ${selectedProduct.value.price}\n\n` +
    `🛍️Extras:\n` +
    `🦋Mariposas: ${items.value.mariposas}\n` +
    `👑Coronas: ${items.value.coronas}\n` +
    `📜Dedicatoria: ${items.value.dedicatoria}\n\n` +
    `💰Total: ${(() => {
      const base = parseFloat(selectedProduct.value.price.replace('$', '')) || 0
      const mariposas = Number(items.value.mariposas) || 0
      const coronas = Number(items.value.coronas) || 0
      const total = base + mariposas * 0.5 + coronas * 3.5
      return `$${total.toFixed(2)}`
    })()}\n\n` +
    `¿Podría darme más información?`

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')

  closeOrderForm()
}

const products_flowers = ref([
  {
    name: 'Ramo de Rosas',
    description: 'Ramo Grande - 7 Rosas con Mariposa',
    price: '$16.00',
    image: '/Productos/ramo1.jpg',
  },
  {
    name: 'Ramo de Tulipanes',
    description: '5 Tulipanes con Mariposa',
    price: '$8.00',
    image: '/Productos/ramo2.jpg',
  },
  {
    name: 'Ramito de Rosas',
    description: '2 Rosas',
    price: '$6.00',
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
    name: 'Girasol',
    description: '1 Girasol con Mariposa',
    price: '$7.00',
    image: '/Productos/ramo23.jpg',
  },
  {
    name: 'Ramo de Rosas',
    description: 'Ramo Mediano - 6 Rosas con Mariposa',
    price: '$10.00',
    image: '/Productos/ramo24.jpg',
  },
])
</script>

<template>
  <div class="view">
    <Navbar />
    <p>Entregas solamente para el departamento de <strong>San Miguel, El Salvador!</strong></p>
    <main>
      <h1>Catálogo</h1>
      <h2>Ramos de flores</h2>
      <div class="product-list">
        <Card
          v-for="(product, index) in products_flowers"
          :key="index"
          :product="product"
          @click-image="openImageModal"
          @open-form="openOrderForm"
        />
      </div>
    </main>
    <div class="soon">Próximamente <span>más productos</span></div>

    <!-- Modal de imagen -->
    <Modal :show="showModal" @close="closeImageModal">
      <img :src="selectedImage" alt="Imagen seleccionada" />
    </Modal>

    <!-- Modal de formulario -->
    <Modal :show="showFormModal" @close="closeOrderForm">
      <div class="form-container" v-if="selectedProduct">
        <h2>Ordenar {{ selectedProduct.name }}</h2>
        <form @submit.prevent="submitOrder">
          <label for="mariposas">Mariposas: </label>
          <input type="number" id="mariposas" min="0" v-model="items.mariposas" />

          <label for="coronas">Coronas: </label>
          <input type="number" id="coronas" min="0" v-model="items.coronas" />

          <label for="dedicatoria">Dedicatoria: </label>
          <select id="dedicatoria" v-model="items.dedicatoria">
            <option value="Sin dedicatoria">Sin dedicatoria</option>
            <option value="Con dedicatoria">Con dedicatoria</option>
          </select>

          <label for="total">Total: </label>
          <span id="total">
            {{
              (() => {
                if (!selectedProduct) return '$0.00'
                const base = parseFloat(selectedProduct.price.replace('$', '')) || 0
                const mariposas = Number(items.mariposas) || 0
                const coronas = Number(items.coronas) || 0
                const total = base + mariposas * 0.5 + coronas * 3.5
                return `$${total.toFixed(2)}`
              })()
            }}
          </span>

          <button type="submit" class="btn">Enviar por WhatsApp</button>
        </form>
      </div>
    </Modal>
  </div>
  <Footer />
</template>

<style scoped>
.view > p {
  text-align: center;
  color: rgb(158, 0, 108);
  background: transparent;
  padding: 10px;
  margin: 0;
  font-weight: 600;
  text-transform: uppercase;
  width: 100%;
  font-size: 24px;
  letter-spacing: 1px;
  animation: moverY 0.8s infinite;
  box-sizing: border-box;
}

@keyframes moverY {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background: linear-gradient(90deg, #c9a7eb 0%, #f8c8dc 50%, #a7d8f0 100%);
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
  gap: 50px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}

.modal img {
  max-width: 100%;
  height: 80vh;
  border-radius: 8px;
}

.soon {
  font-size: 24px;
  font-weight: bold;
  padding: 30px;
  color: #ff76ba;
  border: #ff33da 2px dashed;
  border-radius: 8px;
  width: fit-content;
  margin: 20px auto;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 700px;
  margin-top: 15px;
  padding: 10px;
  justify-content: center;
}

form label {
  font-weight: 600;
  color: #0f004fa7;
}
form input,
form select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

select > option {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  background-color: rgb(255, 255, 255);
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #d400ff;
  border-radius: 8px;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
  justify-content: center;
  gap: 10px;
  max-height: 80vh;
}

.form-container > h2 {
  width: 100%;
  text-align: center;
  max-width: 200px;
  color: #ff00d4;
  margin: 0;
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
  margin-top: 15px;
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

  .soon {
    font-size: 20px;
    padding: 20px;
  }

  .view > p {
    font-size: 12px;
    padding: 5px;
    text-align: center;
    box-sizing: border-box;
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
  .soon {
    font-size: 22px;
    padding: 25px;
  }

  .view > p {
    font-size: 18px;
    padding: 8px;
    text-align: center;
  }
}

@media (min-width: 901px) {
  .product-list {
    justify-content: center;
  }
}
</style>
