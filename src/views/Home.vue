    <script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter();
    const goToWhatsApp = (product) => {
        const phoneNumber = '+50376289891';
        const message = `Hola, estoy interesado en el siguiente producto de su catálogo:\n\n` +
            `Nombre: ${product.name}\n` +
            `Descripción: ${product.description}\n` +
            `Precio: ${product.price}\n\n` +
            `¿Podría darme más información?`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };
</script>

<template>
    <div class="view">
        <nav class="navbar">
            <ul>
                <li><a href="#">World Of Varieties</a></li>
            </ul>
        </nav>
        <main>
            <h1>Catálogo</h1>
            <h2>Ramos de flores</h2>
            <div class="product-list" v-if="true">
                <div class="product-item" v-if="true">
                    <img src="https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"
                        alt="Producto 1">
                    <h2>Producto 1</h2>
                    <p>Descripción del producto 1</p>
                    <p>$10.00</p>
                    <button class="btn"
                        @click="goToWhatsApp({ name: 'Producto 1', description: 'Descripción del producto 1', price: '$10.00' })">Pedir</button>
                </div>
                <div class="product-item">
                    <img src="https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"
                        alt="Producto 2">
                    <h2>Producto 2</h2>
                    <p>Descripción del producto 2</p>
                    <p>$20.00</p>
                    <button class="btn"
                        @click="goToWhatsApp({ name: 'Producto 2', description: 'Descripción del producto 2', price: '$20.00' })">Pedir</button>
                </div>
                <div class="product-item">
                    <img src="https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"
                        alt="Producto 3">
                    <h2>Producto 3</h2>
                    <p>Descripción del producto 3</p>
                    <p>$30.00</p>
                    <button class="btn"
                        @click="goToWhatsApp({ name: 'Producto 3', description: 'Descripción del producto 3', price: '$30.00' })">Pedir</button>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
.view {
    background-color: rgb(255, 255, 255);
}

.navbar {
    background-color: #ffffff;
    padding: 1rem;
    position: sticky;
    top: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

}

.navbar>ul {
    font-family: 'Lobster', cursive;
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 1rem;
    font-size: 26px;
    font-weight: 800;
    letter-spacing: 1px;
}

.navbar>ul:hover {
    opacity: 0.8;
}



.navbar>ul>li>a {
    color: rgb(0, 0, 0);
    text-decoration: none;
    background: linear-gradient(90deg, rgb(255, 0, 242) 0%, rgb(0, 14, 86) 35%, rgb(0, 251, 255) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    transition: all .6s ease-in-out;
}

.navbar>ul>li>a:hover {
    text-decoration: underline;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    text-shadow: 1px 1px 2px rgba(255, 0, 225, 0.385);

}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
}

main h1 {
    text-transform: uppercase;
    font-weight: 800;
    background: linear-gradient(90deg, rgb(6, 0, 122) 0%, rgb(0, 203, 190) 35%, rgb(255, 0, 230) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    text-shadow: 1px 1px 2px rgba(251, 0, 205, 0.5);
    margin: 0;
}

main>h2 {
    text-transform: uppercase;
    text-align: left;
    width: 100%;
    padding-left: 10px;
    font-weight: 800;
    font-size: 22px;
    background: linear-gradient(90deg, rgb(251, 0, 201) 0%, rgb(255, 44, 195) 35%, rgb(0, 0, 0) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    text-shadow: 1px 1px 2px rgba(255, 0, 225, 0.782);
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
    border-radius: 10px;
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

@media (max-width: 600px) {
    .product-list {
        justify-content: center;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }

    .product-item {
        width: 100%;
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
}

@media (min-width: 901px) {
    .product-list {
        justify-content: center;
    }
}
</style>