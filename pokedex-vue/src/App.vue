<script setup>
//importacao dos elementos vue-router
import { RouterLink, RouterView } from 'vue-router'
//importacao do bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.json'
//importar componente de barra de navegacao
import BarraNavegacao from './components/BarraNavegacao.vue' 

// importar estilo CSS
import '../src/asserts/css/style.css'
</script>

<template>
  <!--Barra de Nagegacao-->
  <BarraNavegacao />
  
<!--Visualizar conteudo das paginas-->
  <RouterView />
</template>

