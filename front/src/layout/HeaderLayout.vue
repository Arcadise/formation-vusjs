<template>
  <header id="header">
    <div>
      <img src="/logo.svg" alt="">
      <RouterLink to="/">Gestion de stock</RouterLink>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;

  a {
    font-size: 1.5rem;
    margin: 0;
    color: black;
    text-decoration: none;
    font-weight: bolder;
    animation: all 0.5s ease-in;

    &:hover {
      text-decoration: underline;
    }
  }

  div {
    background-color: #eee;
    display: flex;
    align-items: center;
    column-gap: 20px;
    padding: 10px;
  }

  img {
    width: 35px;
    height: 35px;
  }

  img:hover {
    animation: rebond 2s infinite ease-in-out;
  }
}

@keyframes rebond {
  0% {
    transform: translateY(0) rotate(0);
  }
  20% {
    transform: translateY(-30px) rotate(-10deg);
  }
  40% {
    transform: translateY(15px) rotate(5deg);
  }
  60% {
    transform: translateY(-15px) rotate(-5deg);
  }
  80% {
    transform: translateY(10px) rotate(2deg);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
}
</style>
<script setup lang="ts">
</script>
