<template>
    <div>
        <h1>Article {{ id }}</h1>

<div class="container py-4 mb">
    <img v-bind:src="articleUnique.thumbnailUrl" alt="">
    <h2>{{ articleUnique.title }}</h2>
</div>

<button v-on:click="funcRetour" class="btn-success">Retour</button>

    </div>
</template>


<script>

import axios from 'axios'

export default {
    name:"MyArticle",
    data(){
        return{
            id:this.$route.params.id,
            articleUnique: []
        }
    },
    methods:{
        funcRetour:function(){
            this.$router.push('/')
        }
    
    },
    mounted(){
        axios.get(`https://jsonplaceholder.typicode.com/photos/${this.id})`)
        .then(reponse => {
            this.articleUnique = reponse.data
        })
    }
}

</script>



<style scoped>

img{
    width: 100%;
    height: 500px;
    object-fit: cover
}


</style>