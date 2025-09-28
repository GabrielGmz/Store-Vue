<template>
  <nav class="navbar">
    <ul>
      <li><a href="#">World Of Varieties</a></li>
    </ul>
  </nav>
</template>

<style scoped>
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

.navbar > ul {
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

.navbar > ul:hover {
  opacity: 0.8;
}

.navbar > ul > li > a {
  color: rgb(0, 0, 0);
  text-decoration: none;
  background: linear-gradient(
    90deg,
    rgb(255, 0, 242) 0%,
    rgb(0, 14, 86) 35%,
    rgb(0, 251, 255) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  transition: all 0.6s ease-in-out;
}

.navbar > ul > li > a:hover {
  text-decoration: underline;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  text-shadow: 1px 1px 2px rgba(255, 0, 225, 0.385);
}
</style>
