<!--Script-->

<script setup>
//Importaçoes
import { onMounted, ref } from 'vue';


//vetor contendo so pokemos
let vetor = ref([])

// variavel para exibier o carregamento
let carregamento = ref(true)
//variavel para armazenar o termo da filtragem
let termoFiltragem = ref('')

//OnMount
onMounted(async() => {
    for (let indice = 252; indice <= 386; indice++) {
        let requisicao = await fetch('https://pokeapi.co/api/v2/pokemon/' + indice)
            let pokemon = await requisicao.json()
            vetor.value.push(pokemon)
    }
    carregamento.value = false
})
//função para filtrar os pokémon
function filtrar(){
    return vetor.value.filter(obj => obj.name.toLowerCase().includes(termoFiltragem.value.toLowerCase()))
}

</script>

<!--HTML-->
<template>
    <div class="carregamento" v-if="carregamento">
        <img src="../asserts/img/pokeball.gif">
    </div>
    <main class="container" v-if="!carregamento">
        
        <!--Filtragem-->
        <div class="row">
            <div class="col-12">
                <input type="text" placeholder="Qual o pokémon você está procurando" class="form-contral pesquisa" v-model="termoFiltragem">
            </div>
            <p v-if="filtrar().length == 0">Não foi encontrado nenhum pokémon</p>
            <p v-else-if="filtrar().length == 1">Foi encontrado apenas um pokémon</p>
            <p v-else>Foram encontrados {{ filtrar().length }} Pokémons.</p>
        </div>
        <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="v in filtrar()">
            <div class="card" :class="v.types[0].type.name">
                <img :src="v.sprites.other.home.front_default" alt="">
                <p>{{ v.name }}</p>
            </div>
        </div>
        </div>
        
    </main>
</template>